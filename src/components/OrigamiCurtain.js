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

const OrigamiCurtain = ({ onFinish }) => {
  const canvasRef = useRef(null);
  const [bgOff, setBgOff] = useState(false);
  const [fade, setFade] = useState(false);
  const [done, setDone] = useState(false);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;
  const BG_MS = 0;

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

    // Font auto-fit (~22% width)
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

    // Per-letter targets
    ctx.font = `900 ${nameFs}px ${sansStack}`;
    try { ctx.letterSpacing = "-1.5px"; } catch (_) {}
    const fullName = NAME + PERIOD;
    const totalW = ctx.measureText(fullName).width;
    const startX = (W - totalW) / 2;
    const targetX = [];
    let cursor = startX;
    for (let i = 0; i < fullName.length; i++) {
      const w = ctx.measureText(fullName[i]).width;
      targetX.push(cursor + w / 2);
      cursor += w;
    }

    // ===== Per-letter "papers" =====
    const STAGGER = 0.18;
    const FLUTTER_DUR = 1.2;
    const UNFOLD_DUR = 0.55;
    const PER_ENTRY = FLUTTER_DUR + UNFOLD_DUR;

    const papers = [];
    for (let i = 0; i < fullName.length; i++) {
      // Pick a random off-screen entry: alternate top / sides for variety
      const side = i % 4;
      let fromX, fromY;
      if (side === 0) { fromX = Math.random() * W; fromY = -nameFs * 2 - Math.random() * nameFs; }
      else if (side === 1) { fromX = -nameFs * 2; fromY = Math.random() * H * 0.6; }
      else if (side === 2) { fromX = W + nameFs * 2; fromY = Math.random() * H * 0.6; }
      else { fromX = Math.random() * W; fromY = H + nameFs * 2; }
      papers.push({
        char: fullName[i],
        color: fullName[i] === "." ? ORANGE : WHITE,
        fromX, fromY,
        startRot: (Math.random() - 0.5) * Math.PI * 1.4,
        spinRate: (Math.random() - 0.5) * 5,
        entryStart: i * STAGGER,
        seed: Math.random() * Math.PI * 2,
        // Exit-time random drift direction
        exitDX: (Math.random() - 0.5) * 1.8 * W,
        exitDY: -nameFs * 4 - Math.random() * nameFs * 4,
        exitRotRate: (Math.random() - 0.5) * Math.PI * 4,
      });
    }

    const entryAllDone = (fullName.length - 1) * STAGGER + PER_ENTRY;
    const T_HOLD_END = entryAllDone + 1.6;
    const EXIT_DUR = 1.6;
    const T_EXIT_END = T_HOLD_END + EXIT_DUR;

    // ===== Pose computations =====
    // Flutter: paper drifts from off-screen to target with wobble, rotation damps
    const flutterPose = (p, localT, target) => {
      const e = easeInOutCubic(p);
      const decay = 1 - p;
      // Final approach scale ~0.7, starts ~0.35
      const sx = lerp(0.32, 0.72, e);
      const sy = lerp(0.38, 0.72, e);
      // Position lerps with sine wobble (paper drift)
      const wob = Math.sin(localT * 4 + target.seed) * nameFs * 0.45 * decay;
      const wobY = Math.cos(localT * 3.2 + target.seed) * nameFs * 0.32 * decay;
      const x = lerp(target.fromX, target.x, e) + wob;
      const y = lerp(target.fromY, target.y, e) + wobY;
      // Rotation damps to 0, plus small jitter
      const rot = target.startRot * (1 - e) + Math.sin(localT * 5 + target.seed) * 0.25 * decay;
      const alpha = clamp(p * 4, 0, 1);
      return { x, y, sx, sy, rot, alpha };
    };

    // Unfold: paper at target. Two phases — collapse to thin sliver, then open.
    const unfoldPose = (p, target) => {
      let sx, sy;
      if (p < 0.35) {
        // Squeeze flat (paper viewed edge-on)
        const q = p / 0.35;
        sx = lerp(0.72, 0.06, easeInOutCubic(q));
        sy = lerp(0.72, 1.02, easeOutCubic(q));
      } else if (p < 0.78) {
        // Open from sliver to slight overshoot
        const q = (p - 0.35) / 0.43;
        sx = lerp(0.06, 1.08, easeOutCubic(q));
        sy = lerp(1.02, 0.96, easeOutCubic(q));
      } else {
        // Settle to 1x1
        const q = (p - 0.78) / 0.22;
        sx = lerp(1.08, 1.0, easeOutCubic(q));
        sy = lerp(0.96, 1.0, easeOutCubic(q));
      }
      return { x: target.x, y: target.y, sx, sy, rot: 0, alpha: 1 };
    };

    const idlePose = (target, t) => {
      const breath = Math.sin(t * 1.4 + target.seed) * 0.8;
      return { x: target.x, y: target.y + breath, sx: 1, sy: 1, rot: 0, alpha: 1 };
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

    const drawPaper = (char, color, p) => {
      if (!p || p.alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot || 0);
      ctx.scale(p.sx || 1, p.sy || 1);
      ctx.font = `900 ${nameFs}px ${sansStack}`;
      try { ctx.letterSpacing = "-1.5px"; } catch (_) {}
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = color;
      ctx.fillText(char, 0, 0);
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // Each paper resolved per frame
    // Add a fixed target.x/.y on each entry for shorthand:
    for (let i = 0; i < papers.length; i++) {
      papers[i].x = targetX[i];
      papers[i].y = cy;
    }

    // ===== Main loop =====
    const START = performance.now();
    let raf;
    let finished = false;
    let bgTriggered = false;

    // Static HOLD frame painter — used by exit curtain halves
    const drawHoldFrame = () => {
      // Divider
      ctx.fillStyle = `rgba(${DIM_RGB},1)`;
      ctx.fillRect(0, divY, W, 1);
      // Tagline
      ctx.font = `500 ${tagFs}px ${monoStack}`;
      try { ctx.letterSpacing = "2.5px"; } catch (_) {}
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `rgba(${MUTED_RGB},1)`;
      ctx.fillText(TAGLINE, Math.round(W / 2), tagY);
      // Letters at rest
      for (let i = 0; i < papers.length; i++) {
        drawPaper(papers[i].char, papers[i].color, {
          x: targetX[i], y: cy, sx: 1, sy: 1, rot: 0, alpha: 1,
        });
      }
    };

    const draw = (now) => {
      const t = (now - START) / 1000;
      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);

      if (t < T_HOLD_END) {
        // Entry + hold — transparent canvas, Wrap bg provides black
        let divA = clamp((t - entryAllDone + 0.5) / 0.8, 0, 1);
        let tagA = t > entryAllDone ? clamp((t - entryAllDone) / 0.6, 0, 1) : 0;
        drawDivider(divA);
        drawTagline(tagA);

        for (let i = 0; i < papers.length; i++) {
          const P = papers[i];
          const localT = t - P.entryStart;
          let pose = null;
          if (localT < 0) {
            // not yet entered
          } else if (localT < FLUTTER_DUR) {
            pose = flutterPose(localT / FLUTTER_DUR, localT, P);
          } else if (localT < FLUTTER_DUR + UNFOLD_DUR) {
            pose = unfoldPose((localT - FLUTTER_DUR) / UNFOLD_DUR, P);
          } else {
            pose = idlePose(P, t);
          }
          if (pose) drawPaper(P.char, P.color, pose);
        }
      } else {
        // Curtain exit: split at divY, top slides up, bottom slides down.
        // Wrap bg is transparent here — canvas paints the curtain halves itself.
        const ep = clamp((t - T_HOLD_END) / EXIT_DUR, 0, 1);
        const e = easeInOutCubic(ep);
        const upOffset = -H * 0.6 * e;
        const downOffset = H * 0.6 * e;

        // Top half
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, W, divY);
        ctx.clip();
        ctx.translate(0, upOffset);
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, W, divY);
        drawHoldFrame();
        ctx.restore();

        // Bottom half
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, divY, W, H - divY);
        ctx.clip();
        ctx.translate(0, downOffset);
        ctx.fillStyle = "#000";
        ctx.fillRect(0, divY, W, H - divY);
        drawHoldFrame();
        ctx.restore();
      }

      // Switch Wrap bg to transparent at the moment exit starts
      if (!bgTriggered && t >= T_HOLD_END) {
        bgTriggered = true;
        setBgOff(true);
      }

      if (t >= T_EXIT_END + 0.2) {
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

export default OrigamiCurtain;
