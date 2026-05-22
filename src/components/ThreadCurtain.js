import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  background-color: rgba(0, 0, 0, ${({ $bgOff }) => ($bgOff ? 0 : 1)});
  transition: background-color ${({ $bgMs }) => $bgMs}ms ease,
              opacity 450ms ease;
  opacity: ${({ $fade }) => ($fade ? 0 : 1)};
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

const NAME = "DIBYAJYOTI";
const PERIOD = ".";
const TAGLINE = "SENIOR SOFTWARE ENGINEER · LONDON";
const ORANGE = "#ff7a1a";
const WHITE = "#ffffff";
const DIM_RGB = "38,38,38";
const MUTED_RGB = "107,111,118";

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, p) => a + (b - a) * p;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Letter stroke paths (normalized -0.5..0.5)
const LETTER_PATHS = {
  D: [
    [[-0.40, -0.50], [-0.40, 0.50]],
    [[-0.40, -0.50], [0.15, -0.50], [0.38, -0.28], [0.40, 0.0], [0.38, 0.28], [0.15, 0.50], [-0.40, 0.50]],
  ],
  I: [[[0, -0.50], [0, 0.50]]],
  B: [
    [[-0.40, -0.50], [-0.40, 0.50]],
    [[-0.40, -0.50], [0.15, -0.50], [0.35, -0.30], [0.35, -0.08], [0.15, 0.02], [-0.40, 0.02]],
    [[-0.40, 0.02], [0.18, 0.02], [0.40, 0.22], [0.40, 0.40], [0.18, 0.50], [-0.40, 0.50]],
  ],
  Y: [
    [[-0.40, -0.50], [0, 0.0]],
    [[0.40, -0.50], [0, 0.0]],
    [[0, 0.0], [0, 0.50]],
  ],
  A: [
    [[-0.40, 0.50], [0, -0.50]],
    [[0, -0.50], [0.40, 0.50]],
    [[-0.22, 0.12], [0.22, 0.12]],
  ],
  J: [
    [[-0.20, -0.50], [0.35, -0.50]],
    [[0.15, -0.50], [0.15, 0.28], [0, 0.50], [-0.25, 0.50], [-0.40, 0.30]],
  ],
  O: [
    [[0, -0.50], [0.30, -0.40], [0.40, -0.15], [0.40, 0.15], [0.30, 0.40], [0, 0.50], [-0.30, 0.40], [-0.40, 0.15], [-0.40, -0.15], [-0.30, -0.40], [0, -0.50]],
  ],
  T: [
    [[-0.40, -0.50], [0.40, -0.50]],
    [[0, -0.50], [0, 0.50]],
  ],
};

const ThreadCurtain = ({ onFinish }) => {
  const canvasRef = useRef(null);
  const [bgOff, setBgOff] = useState(false);
  const [fade, setFade] = useState(false);
  const [done, setDone] = useState(false);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;
  const BG_MS = 250;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const W = Math.round(rect.width);
    const H = Math.round(rect.height);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const sansStack = `-apple-system, "Inter", "Helvetica Neue", Arial, sans-serif`;
    const monoStack = `"SF Mono", "JetBrains Mono", Menlo, Consolas, monospace`;

    let nameFs = Math.max(20, Math.round(H * 0.06));
    ctx.font = `900 ${nameFs}px ${sansStack}`;
    try { ctx.letterSpacing = "-1.5px"; } catch (_) {}
    let probe = ctx.measureText(NAME + PERIOD).width || 1;
    nameFs = Math.max(20, Math.round(nameFs * (W * 0.22 / probe)));

    let tagFs = Math.max(10, Math.round(H * 0.014));
    ctx.font = `500 ${tagFs}px ${monoStack}`;
    try { ctx.letterSpacing = "2.5px"; } catch (_) {}
    const tProbe = ctx.measureText(TAGLINE).width || 1;
    tagFs = Math.max(10, Math.round(tagFs * (Math.max(220, W * 0.22) / tProbe)));

    const gapNameDiv = Math.round(nameFs * 0.85);
    const gapDivTag = Math.round(tagFs * 3.5);
    const span = nameFs / 2 + gapNameDiv + gapDivTag + tagFs / 2;
    const blockTop = (H - span) / 2;
    const cy = Math.round(blockTop + nameFs / 2);
    const divY = cy + gapNameDiv;
    const tagY = divY + gapDivTag;

    ctx.font = `900 ${nameFs}px ${sansStack}`;
    try { ctx.letterSpacing = "-1.5px"; } catch (_) {}
    const fullName = NAME + PERIOD;
    const totalW = ctx.measureText(fullName).width;
    const startX = (W - totalW) / 2;
    const targetX = [];
    const charWidth = [];
    let cursor = startX;
    for (let i = 0; i < fullName.length; i++) {
      const w = ctx.measureText(fullName[i]).width;
      targetX.push(cursor + w / 2);
      charWidth.push(w);
      cursor += w;
    }

    // ===== Build thread path (combined letter strokes + lifts) =====
    // Each entry: {x, y, drawFromPrev: true/false}
    // drawFromPrev = should thread be visible from previous point to this one?
    const path = [];
    const letterRanges = []; // [{start, end}, ...] indices into path for each letter

    for (let i = 0; i < fullName.length; i++) {
      const ch = fullName[i];
      const startIdx = path.length;
      if (ch === ".") {
        // Period: tiny tap motion at period location
        const cxp = targetX[i];
        const dotY = cy + nameFs * 0.32;
        path.push({ x: cxp - nameFs * 0.04, y: dotY - nameFs * 0.04, drawFromPrev: path.length > 0 ? false : true });
        path.push({ x: cxp + nameFs * 0.04, y: dotY + nameFs * 0.04, drawFromPrev: true });
        letterRanges.push({ start: startIdx, end: path.length - 1 });
        continue;
      }
      const lp = LETTER_PATHS[ch];
      if (!lp) {
        letterRanges.push({ start: startIdx, end: startIdx });
        continue;
      }
      const cxL = targetX[i];
      const halfW = charWidth[i] * 0.55;
      const halfH = nameFs * 0.5;
      for (let s = 0; s < lp.length; s++) {
        const stroke = lp[s];
        for (let k = 0; k < stroke.length; k++) {
          const nx = stroke[k][0];
          const ny = stroke[k][1];
          const x = cxL + nx * halfW * 2;
          const y = cy + ny * halfH * 1.05;
          // First point of any new stroke = lift (don't draw thread from prev)
          const drawFromPrev = !(k === 0);
          path.push({ x, y, drawFromPrev });
        }
      }
      letterRanges.push({ start: startIdx, end: path.length - 1 });
    }

    // Pre-compute segment lengths + cumulative
    const segLens = [];
    let totalLen = 0;
    for (let i = 1; i < path.length; i++) {
      const dx = path[i].x - path[i - 1].x;
      const dy = path[i].y - path[i - 1].y;
      const l = Math.sqrt(dx * dx + dy * dy);
      segLens.push(l);
      totalLen += l;
    }

    // ===== Timing =====
    const T_THREAD_DUR = 3.6;
    const T_HOLD_END = T_THREAD_DUR + 1.5;
    const T_EXIT_END = T_HOLD_END + 2.2;

    // Map time → needle index along path (returns {idx, frac, x, y})
    const needleAt = (progress) => {
      const targetDist = progress * totalLen;
      let acc = 0;
      for (let i = 0; i < segLens.length; i++) {
        if (acc + segLens[i] >= targetDist) {
          const remain = targetDist - acc;
          const frac = segLens[i] > 0 ? remain / segLens[i] : 0;
          const a = path[i];
          const b = path[i + 1];
          return {
            idx: i,
            frac,
            x: lerp(a.x, b.x, frac),
            y: lerp(a.y, b.y, frac),
          };
        }
        acc += segLens[i];
      }
      const last = path[path.length - 1];
      return { idx: segLens.length - 1, frac: 1, x: last.x, y: last.y };
    };

    // Render thread up to needle position
    const drawThread = (cutIdx, cutFrac, alphaScale = 1) => {
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = Math.max(1.2, nameFs * 0.022);

      // Pass 1: subtle outer halo
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `rgba(255,240,210,${0.22 * alphaScale})`;
      ctx.lineWidth = Math.max(2, nameFs * 0.05);
      ctx.beginPath();
      let pen = false;
      for (let i = 0; i <= cutIdx && i < path.length - 1; i++) {
        const a = path[i];
        const b = path[i + 1];
        if (!b.drawFromPrev) {
          pen = false;
          continue;
        }
        if (!pen) {
          ctx.moveTo(a.x, a.y);
          pen = true;
        }
        if (i === cutIdx) {
          const tx = lerp(a.x, b.x, cutFrac);
          const ty = lerp(a.y, b.y, cutFrac);
          ctx.lineTo(tx, ty);
        } else {
          ctx.lineTo(b.x, b.y);
        }
      }
      ctx.stroke();

      // Pass 2: bright thread core
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = `rgba(250,240,220,${0.92 * alphaScale})`;
      ctx.lineWidth = Math.max(1.0, nameFs * 0.018);
      ctx.beginPath();
      pen = false;
      for (let i = 0; i <= cutIdx && i < path.length - 1; i++) {
        const a = path[i];
        const b = path[i + 1];
        if (!b.drawFromPrev) {
          pen = false;
          continue;
        }
        if (!pen) {
          ctx.moveTo(a.x, a.y);
          pen = true;
        }
        if (i === cutIdx) {
          const tx = lerp(a.x, b.x, cutFrac);
          const ty = lerp(a.y, b.y, cutFrac);
          ctx.lineTo(tx, ty);
        } else {
          ctx.lineTo(b.x, b.y);
        }
      }
      ctx.stroke();

      ctx.restore();
    };

    const drawNeedle = (x, y, alpha = 1) => {
      // Tiny bright dot + soft glow
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.globalCompositeOperation = "lighter";
      const g = ctx.createRadialGradient(x, y, 0, x, y, nameFs * 0.15);
      g.addColorStop(0, "rgba(255,255,255,0.9)");
      g.addColorStop(0.4, "rgba(255,240,210,0.45)");
      g.addColorStop(1, "rgba(255,200,120,0)");
      ctx.fillStyle = g;
      ctx.fillRect(x - nameFs * 0.15, y - nameFs * 0.15, nameFs * 0.3, nameFs * 0.3);
      ctx.fillStyle = "rgba(255,255,255,1)";
      ctx.beginPath();
      ctx.arc(x, y, 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // ===== Render helpers =====
    const drawDivider = (a) => {
      if (a <= 0) return;
      ctx.fillStyle = `rgba(${DIM_RGB},${a})`;
      ctx.fillRect(0, divY, W, 1);
    };
    const drawTagline = (a) => {
      if (a <= 0) return;
      ctx.font = `500 ${tagFs}px ${monoStack}`;
      try { ctx.letterSpacing = "2.5px"; } catch (_) {}
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `rgba(${MUTED_RGB},${a})`;
      ctx.fillText(TAGLINE, Math.round(W / 2), tagY);
    };

    // Per-letter alpha based on thread progress
    const letterAlphaAt = (pathIdx, pathFrac) => {
      const alphas = new Array(fullName.length).fill(0);
      for (let i = 0; i < fullName.length; i++) {
        const r = letterRanges[i];
        if (!r) continue;
        if (pathIdx > r.end) {
          alphas[i] = 1;
        } else if (pathIdx < r.start) {
          alphas[i] = 0;
        } else {
          const span = Math.max(1, r.end - r.start);
          const p = (pathIdx - r.start + pathFrac) / span;
          alphas[i] = clamp(p, 0, 1);
        }
      }
      return alphas;
    };

    const drawLetters = (alphas) => {
      ctx.save();
      ctx.font = `900 ${nameFs}px ${sansStack}`;
      try { ctx.letterSpacing = "-1.5px"; } catch (_) {}
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      for (let i = 0; i < fullName.length; i++) {
        if (alphas[i] <= 0.01) continue;
        ctx.globalAlpha = alphas[i];
        ctx.fillStyle = fullName[i] === "." ? ORANGE : WHITE;
        ctx.fillText(fullName[i], targetX[i], cy);
      }
      ctx.globalAlpha = 1;
      ctx.restore();
    };

    // ===== Main loop =====
    const START = performance.now();
    let raf;
    let finished = false;
    let bgTriggered = false;

    const draw = (now) => {
      const t = (now - START) / 1000;
      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);

      // Divider + tagline
      let divA = 0, tagA = 0;
      if (t < T_HOLD_END) {
        divA = clamp((t - T_THREAD_DUR) / 0.4, 0, 1);
        tagA = clamp((t - T_THREAD_DUR - 0.15) / 0.45, 0, 1);
      } else {
        const ep = (t - T_HOLD_END) / (T_EXIT_END - T_HOLD_END);
        divA = Math.max(0, 1 - ep * 1.4);
        tagA = Math.max(0, 1 - ep * 1.6);
      }
      drawDivider(divA);
      drawTagline(tagA);

      if (t < T_THREAD_DUR) {
        // WEAVE: needle traces letters in one continuous path
        const p = easeInOutCubic(t / T_THREAD_DUR);
        const needle = needleAt(p);
        const alphas = letterAlphaAt(needle.idx, needle.frac);
        // Letters underneath
        drawLetters(alphas);
        // Thread on top
        drawThread(needle.idx, needle.frac, 1);
        // Needle tip
        drawNeedle(needle.x, needle.y, 1);
      } else if (t < T_HOLD_END) {
        // HOLD: full letters, thread settled into stitches (subtle, just bright dots at endpoints)
        const settleP = clamp((t - T_THREAD_DUR) / 0.4, 0, 1);
        // Letters at full alpha
        const allLit = new Array(fullName.length).fill(1);
        drawLetters(allLit);
        // Thread quickly fades — letters take over
        const threadFade = 1 - settleP;
        if (threadFade > 0.02) {
          drawThread(path.length - 2, 1, threadFade);
        }
      } else {
        // EXIT: thread pulls back. Needle retreats; thread vanishes behind it; letters fade with thread
        const ep = clamp((t - T_HOLD_END) / (T_EXIT_END - T_HOLD_END), 0, 1);
        const reverseP = 1 - easeInOutCubic(ep);
        const needle = needleAt(reverseP);
        const alphas = letterAlphaAt(needle.idx, needle.frac);
        drawLetters(alphas);
        drawThread(needle.idx, needle.frac, 1);
        // Needle tip retreating
        drawNeedle(needle.x, needle.y, 1);
      }

      if (!bgTriggered && t >= T_EXIT_END) {
        bgTriggered = true;
        setBgOff(true);
      }

      if (t >= T_EXIT_END + 0.3) {
        if (!finished) {
          finished = true;
          setFade(true);
          setTimeout(() => {
            setDone(true);
            if (onFinishRef.current) onFinishRef.current();
          }, 450);
          return;
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (done) return null;
  return (
    <Wrap $bgOff={bgOff} $bgMs={BG_MS} $fade={fade}>
      <Canvas ref={canvasRef} />
    </Wrap>
  );
};

export default ThreadCurtain;
