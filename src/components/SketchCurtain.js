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
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const SketchCurtain = ({ onFinish }) => {
  const canvasRef = useRef(null);
  const [bgOff, setBgOff] = useState(false);
  const [fade, setFade] = useState(false);
  const [done, setDone] = useState(false);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;
  const BG_MS = 350;

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

    // Font auto-fit
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
    const PERIOD_IDX = fullName.length - 1;

    // ===== Pre-rendered letter canvas (all letters at their positions) =====
    const letterCanvas = document.createElement("canvas");
    letterCanvas.width = W * dpr;
    letterCanvas.height = H * dpr;
    {
      const lctx = letterCanvas.getContext("2d");
      lctx.scale(dpr, dpr);
      lctx.font = `900 ${nameFs}px ${sansStack}`;
      try { lctx.letterSpacing = "-1.5px"; } catch (_) {}
      lctx.textBaseline = "middle";
      lctx.textAlign = "center";
      for (let i = 0; i < fullName.length; i++) {
        lctx.fillStyle = fullName[i] === "." ? ORANGE : WHITE;
        lctx.fillText(fullName[i], targetX[i], cy);
      }
    }

    // ===== Mask canvas (pencil fills this → reveals letters) =====
    const maskCanvas = document.createElement("canvas");
    maskCanvas.width = W * dpr;
    maskCanvas.height = H * dpr;
    const maskCtx = maskCanvas.getContext("2d");
    maskCtx.scale(dpr, dpr);

    // Composite scratch (compose letter + mask each frame)
    const compCanvas = document.createElement("canvas");
    compCanvas.width = W * dpr;
    compCanvas.height = H * dpr;
    const compCtx = compCanvas.getContext("2d");
    compCtx.scale(dpr, dpr);

    // ===== Timing =====
    const SCRIBBLE_DUR = 0.50;
    const STAGGER = 0.50;
    const PERIOD_DUR = 0.30;
    const PENCIL_LIFT_DUR = 0.55;
    const lastLetterEnd = (PERIOD_IDX - 1) * STAGGER + SCRIBBLE_DUR; // last regular letter
    const periodEnd = PERIOD_IDX * STAGGER + PERIOD_DUR;
    const T_PENCIL_OFF = periodEnd + PENCIL_LIFT_DUR;
    const T_HOLD_END = T_PENCIL_OFF + 1.4;
    const ERASER_DUR = 1.7;
    const T_EXIT_END = T_HOLD_END + ERASER_DUR + 0.3;

    // ===== Letter stroke paths (normalized -0.5..0.5 around letter center, written in writing order) =====
    const LETTER_PATHS = {
      D: [
        [[-0.40, -0.50], [-0.40, 0.50]],
        [[-0.40, -0.50], [0.15, -0.50], [0.38, -0.28], [0.40, 0.0], [0.38, 0.28], [0.15, 0.50], [-0.40, 0.50]],
      ],
      I: [
        [[0, -0.50], [0, 0.50]],
      ],
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

    // Path stats cache: precompute stroke lengths per letter
    const pathStats = {};
    for (const ch in LETTER_PATHS) {
      const paths = LETTER_PATHS[ch];
      const lengths = [];
      let total = 0;
      for (const stroke of paths) {
        let len = 0;
        for (let k = 0; k < stroke.length - 1; k++) {
          len += Math.hypot(stroke[k + 1][0] - stroke[k][0], stroke[k + 1][1] - stroke[k][1]);
        }
        lengths.push(len);
        total += len;
      }
      pathStats[ch] = { lengths, total, paths };
    }

    // Returns normalized pencil pos (nx, ny in -0.5..0.5) at progress p (0..1) for given char
    const pencilOnChar = (ch, p) => {
      const st = pathStats[ch];
      if (!st) return { nx: 0, ny: 0, drawing: true };
      const liftFrac = 0.08; // each lift = 8% of total path length
      const numLifts = st.paths.length - 1;
      const totalEffective = st.total + numLifts * liftFrac * st.total;
      const targetLen = p * totalEffective;
      let consumed = 0;
      for (let s = 0; s < st.paths.length; s++) {
        const sLen = st.lengths[s];
        if (consumed + sLen >= targetLen) {
          const inStroke = targetLen - consumed;
          const stroke = st.paths[s];
          let walk = 0;
          for (let k = 0; k < stroke.length - 1; k++) {
            const segLen = Math.hypot(stroke[k + 1][0] - stroke[k][0], stroke[k + 1][1] - stroke[k][1]);
            if (walk + segLen >= inStroke) {
              const segP = segLen > 0 ? (inStroke - walk) / segLen : 0;
              return {
                nx: lerp(stroke[k][0], stroke[k + 1][0], segP),
                ny: lerp(stroke[k][1], stroke[k + 1][1], segP),
                drawing: true,
              };
            }
            walk += segLen;
          }
          const last = stroke[stroke.length - 1];
          return { nx: last[0], ny: last[1], drawing: true };
        }
        consumed += sLen;
        if (s < st.paths.length - 1) {
          const liftLen = liftFrac * st.total;
          if (consumed + liftLen >= targetLen) {
            const lp = (targetLen - consumed) / liftLen;
            const last = st.paths[s][st.paths[s].length - 1];
            const nextStart = st.paths[s + 1][0];
            const e = easeInOutCubic(lp);
            return {
              nx: lerp(last[0], nextStart[0], e),
              ny: lerp(last[1], nextStart[1], e),
              drawing: false,
            };
          }
          consumed += liftLen;
        }
      }
      const lastStroke = st.paths[st.paths.length - 1];
      const last = lastStroke[lastStroke.length - 1];
      return { nx: last[0], ny: last[1], drawing: true };
    };

    // ===== Pencil position over time =====
    const pencilXY = (t) => {
      for (let i = 0; i < PERIOD_IDX; i++) {
        const startT = i * STAGGER;
        if (t >= startT && t < startT + SCRIBBLE_DUR) {
          const p = (t - startT) / SCRIBBLE_DUR;
          const ch = fullName[i];
          const { nx, ny, drawing } = pencilOnChar(ch, p);
          const wobX = Math.sin((t - startT) * 28 + i) * (nameFs * 0.010);
          const wobY = Math.cos((t - startT) * 34 + i * 0.7) * (nameFs * 0.007);
          const x = targetX[i] + nx * charWidth[i] * 1.05 + wobX;
          const y = cy + ny * nameFs * 0.95 + wobY;
          return { x, y, letterIdx: i, drawing };
        }
      }
      // Period stab
      const periodStartT = PERIOD_IDX * STAGGER;
      if (t >= periodStartT && t < periodStartT + PERIOD_DUR) {
        const p = (t - periodStartT) / PERIOD_DUR;
        const cx = targetX[PERIOD_IDX];
        const baseY = cy + nameFs * 0.32;
        if (p < 0.55) {
          const e = easeInOutCubic(p / 0.55);
          return {
            x: lerp(cx - nameFs * 0.45, cx, e),
            y: lerp(cy - nameFs * 0.4, baseY - nameFs * 0.05, e),
            letterIdx: PERIOD_IDX, drawing: false,
          };
        }
        if (p < 0.80) {
          const q = (p - 0.55) / 0.25;
          const dip = Math.sin(q * Math.PI) * nameFs * 0.08;
          return { x: cx, y: baseY - nameFs * 0.04 + dip, letterIdx: PERIOD_IDX, drawing: true };
        }
        return { x: cx, y: baseY - nameFs * 0.04, letterIdx: PERIOD_IDX, drawing: false };
      }
      // Pencil lift away
      if (t >= periodEnd) {
        const localT = t - periodEnd;
        if (localT < PENCIL_LIFT_DUR) {
          const q = clamp(localT / PENCIL_LIFT_DUR, 0, 1);
          const e = easeInOutCubic(q);
          const lastX = targetX[PERIOD_IDX];
          const lastY = cy + nameFs * 0.28;
          return {
            x: lastX + nameFs * 1.5 * e,
            y: lastY - nameFs * 2.3 * e,
            letterIdx: -1, drawing: false,
            alpha: 1 - q,
          };
        }
      }
      return null;
    };

    // ===== Visible sketch strokes (gray pencil marks on main canvas) =====
    const strokes = [];
    const STROKE_LIFE = 0.85;

    // ===== Pencil sprite — fixed writing angle, shaded for depth =====
    // Tip is at (x, y). Body extends up-right at ~55° (natural writing angle).
    // `lifted` = pencil off page (between strokes); draws drop shadow + slight raise.
    const PENCIL_ANGLE = -Math.PI * 0.30;
    const drawPencil = (x, y, alpha = 1, lifted = false) => {
      const len = nameFs * 0.85;
      const halfW = nameFs * 0.055;
      const raise = lifted ? nameFs * 0.06 : 0;
      const shadowOff = nameFs * (lifted ? 0.06 : 0.02);

      // Drop shadow underneath
      ctx.save();
      ctx.globalAlpha = alpha * (lifted ? 0.22 : 0.18);
      ctx.translate(x + shadowOff * 0.5, y + shadowOff);
      ctx.rotate(PENCIL_ANGLE);
      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.ellipse(len * 0.45, halfW * 0.5, len * 0.45, halfW * 1.4, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(x, y - raise);
      ctx.rotate(PENCIL_ANGLE);

      // Graphite tip (small dark cone at origin extending negative-x)
      ctx.fillStyle = "#1a1a1a";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(len * 0.05, -halfW * 0.55);
      ctx.lineTo(len * 0.05, halfW * 0.55);
      ctx.closePath();
      ctx.fill();

      // Wood cone (tapering between tip and body)
      const woodLen = len * 0.10;
      const woodGrad = ctx.createLinearGradient(0, -halfW, 0, halfW);
      woodGrad.addColorStop(0, "#d4b78a");
      woodGrad.addColorStop(0.5, "#e8d5a8");
      woodGrad.addColorStop(1, "#a8895a");
      ctx.fillStyle = woodGrad;
      ctx.beginPath();
      ctx.moveTo(len * 0.05, -halfW * 0.55);
      ctx.lineTo(len * 0.05, halfW * 0.55);
      ctx.lineTo(len * 0.05 + woodLen, halfW);
      ctx.lineTo(len * 0.05 + woodLen, -halfW);
      ctx.closePath();
      ctx.fill();
      // Wood shading line
      ctx.strokeStyle = "rgba(0,0,0,0.25)";
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(len * 0.05, halfW * 0.55);
      ctx.lineTo(len * 0.05 + woodLen, halfW);
      ctx.stroke();

      // Body — yellow with vertical gradient (hex pencil shading)
      const bodyStart = len * 0.05 + woodLen;
      const bodyEnd = len * 0.80;
      const bodyLen = bodyEnd - bodyStart;
      const bodyGrad = ctx.createLinearGradient(0, -halfW, 0, halfW);
      bodyGrad.addColorStop(0.00, "#ffe18a");
      bodyGrad.addColorStop(0.22, "#fbc94a");
      bodyGrad.addColorStop(0.50, "#e8a82a");
      bodyGrad.addColorStop(0.78, "#a87a10");
      bodyGrad.addColorStop(1.00, "#6e5208");
      ctx.fillStyle = bodyGrad;
      ctx.fillRect(bodyStart, -halfW, bodyLen, halfW * 2);
      // Hex facet lines
      ctx.strokeStyle = "rgba(0,0,0,0.18)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(bodyStart, -halfW * 0.5);
      ctx.lineTo(bodyEnd, -halfW * 0.5);
      ctx.moveTo(bodyStart, halfW * 0.5);
      ctx.lineTo(bodyEnd, halfW * 0.5);
      ctx.stroke();
      // Top highlight
      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(bodyStart, -halfW * 0.78);
      ctx.lineTo(bodyEnd, -halfW * 0.78);
      ctx.stroke();

      // Metal ferrule
      const ferStart = bodyEnd;
      const ferLen = len * 0.08;
      const ferGrad = ctx.createLinearGradient(0, -halfW, 0, halfW);
      ferGrad.addColorStop(0, "#e0e0e0");
      ferGrad.addColorStop(0.3, "#ffffff");
      ferGrad.addColorStop(0.55, "#9a9a9a");
      ferGrad.addColorStop(1, "#5e5e5e");
      ctx.fillStyle = ferGrad;
      ctx.fillRect(ferStart, -halfW, ferLen, halfW * 2);
      // Bands
      ctx.fillStyle = "rgba(0,0,0,0.32)";
      ctx.fillRect(ferStart + ferLen * 0.20, -halfW, Math.max(1, len * 0.005), halfW * 2);
      ctx.fillRect(ferStart + ferLen * 0.70, -halfW, Math.max(1, len * 0.005), halfW * 2);

      // Eraser
      const eraStart = ferStart + ferLen;
      const eraLen = len - eraStart;
      const eraGrad = ctx.createLinearGradient(0, -halfW, 0, halfW);
      eraGrad.addColorStop(0, "#f5a0a0");
      eraGrad.addColorStop(0.5, "#e57373");
      eraGrad.addColorStop(1, "#9a4040");
      ctx.fillStyle = eraGrad;
      ctx.fillRect(eraStart, -halfW, eraLen, halfW * 2);

      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // Eraser
    const drawEraser = (x) => {
      const w = nameFs * 0.7;
      const h = nameFs * 0.55;
      ctx.save();
      ctx.translate(x, cy);
      ctx.fillStyle = "#f0a8a8";
      ctx.fillRect(-w / 2, -h / 2, w, h);
      ctx.fillStyle = "#d68585";
      ctx.fillRect(-w / 2, -h / 2, w, h * 0.15);
      ctx.fillStyle = "rgba(0,0,0,0.18)";
      ctx.fillRect(-w / 2, h * 0.40, w, h * 0.10);
      ctx.restore();
    };

    // Smudges left by eraser
    const smudges = [];
    const SMUDGE_LIFE = 0.9;

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

    // ===== Main loop =====
    const START = performance.now();
    let raf;
    let finished = false;
    let bgTriggered = false;
    let lastTime = START;
    let lastPencil = null;
    const eraserSpawned = new Array(fullName.length).fill(false);

    const draw = (now) => {
      const t = (now - START) / 1000;
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);

      // Divider + tagline alpha
      let divA = 0, tagA = 0;
      if (t < T_HOLD_END) {
        divA = clamp((t - lastLetterEnd) / 0.5, 0, 1);
        tagA = clamp((t - lastLetterEnd - 0.2) / 0.5, 0, 1);
      } else {
        const ep = (t - T_HOLD_END) / ERASER_DUR;
        divA = Math.max(0, 1 - ep * 1.4);
        tagA = Math.max(0, 1 - ep * 1.6);
      }
      drawDivider(divA);
      drawTagline(tagA);

      // Update pencil → write to maskCanvas (white wide stroke) + visible stroke
      if (t < T_HOLD_END) {
        const cur = pencilXY(t);
        if (cur && lastPencil && lastPencil.letterIdx === cur.letterIdx) {
          // Always write to mask — guarantees full letter coverage even across lift gaps
          maskCtx.save();
          maskCtx.lineCap = "round";
          maskCtx.lineJoin = "round";
          maskCtx.lineWidth = nameFs * 0.62;
          maskCtx.strokeStyle = "#fff";
          maskCtx.beginPath();
          maskCtx.moveTo(lastPencil.x, lastPencil.y);
          maskCtx.lineTo(cur.x, cur.y);
          maskCtx.stroke();
          maskCtx.restore();

          // Visible gray pencil mark only when actually drawing (not during lifts)
          if (cur.drawing && lastPencil.drawing) {
            strokes.push({ x1: lastPencil.x, y1: lastPencil.y, x2: cur.x, y2: cur.y, age: 0 });
          }
        }
        lastPencil = cur;

        // Age strokes
        for (let i = strokes.length - 1; i >= 0; i--) {
          strokes[i].age += dt;
          if (strokes[i].age > STROKE_LIFE) strokes.splice(i, 1);
        }

        // Draw visible sketch strokes (gray)
        ctx.save();
        ctx.lineCap = "round";
        ctx.lineWidth = Math.max(1.4, nameFs * 0.035);
        for (const s of strokes) {
          const tNorm = s.age / STROKE_LIFE;
          const a = Math.pow(1 - tNorm, 1.4) * 0.65;
          if (a <= 0.01) continue;
          ctx.strokeStyle = `rgba(180,184,196,${a})`;
          ctx.beginPath();
          ctx.moveTo(s.x1, s.y1);
          ctx.lineTo(s.x2, s.y2);
          ctx.stroke();
        }
        ctx.restore();

        // Compose: letter masked by mask → letter visible only where pencil drew
        compCtx.clearRect(0, 0, W, H);
        compCtx.drawImage(letterCanvas, 0, 0, W, H);
        compCtx.globalCompositeOperation = "destination-in";
        compCtx.drawImage(maskCanvas, 0, 0, W, H);
        compCtx.globalCompositeOperation = "source-over";
        ctx.drawImage(compCanvas, 0, 0, W, H);

        // Pencil sprite — fixed writing angle, lifts between strokes
        if (cur) {
          drawPencil(cur.x, cur.y, cur.alpha != null ? cur.alpha : 1, !cur.drawing);
        }
      } else {
        // Exit: clear strokes once
        if (strokes.length) strokes.length = 0;

        const exitLocal = t - T_HOLD_END;
        const eraserX = lerp(-nameFs, W + nameFs, clamp(exitLocal / ERASER_DUR, 0, 1));

        // Erase mask under eraser block (destination-out to subtract)
        const erW = nameFs * 0.72;
        const erH = nameFs * 1.2;
        maskCtx.save();
        maskCtx.globalCompositeOperation = "destination-out";
        maskCtx.fillStyle = "#000";
        maskCtx.fillRect(eraserX - erW / 2, cy - erH / 2, erW, erH);
        maskCtx.restore();

        // Spawn smudge once per letter as eraser passes
        for (let i = 0; i < fullName.length; i++) {
          if (!eraserSpawned[i] && eraserX > targetX[i]) {
            eraserSpawned[i] = true;
            smudges.push({ x: targetX[i], w: charWidth[i] * 1.1, age: 0 });
          }
        }
        for (let i = smudges.length - 1; i >= 0; i--) {
          smudges[i].age += dt;
          if (smudges[i].age > SMUDGE_LIFE) smudges.splice(i, 1);
        }

        // Compose remaining letter through mask
        compCtx.clearRect(0, 0, W, H);
        compCtx.drawImage(letterCanvas, 0, 0, W, H);
        compCtx.globalCompositeOperation = "destination-in";
        compCtx.drawImage(maskCanvas, 0, 0, W, H);
        compCtx.globalCompositeOperation = "source-over";
        ctx.drawImage(compCanvas, 0, 0, W, H);

        // Smudge marks
        const smudgeMul = exitLocal < ERASER_DUR ? 1 : Math.max(0, 1 - (exitLocal - ERASER_DUR) / 0.4);
        for (const s of smudges) {
          const tNorm = s.age / SMUDGE_LIFE;
          const a = (1 - tNorm) * 0.32 * smudgeMul;
          if (a <= 0.005) continue;
          ctx.fillStyle = `rgba(155,160,170,${a})`;
          ctx.fillRect(s.x - s.w / 2, cy - nameFs * 0.5, s.w, nameFs);
        }

        // Eraser sprite
        if (eraserX < W + nameFs * 2) drawEraser(eraserX);
      }

      if (!bgTriggered && t > T_HOLD_END + ERASER_DUR - 0.15) {
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

export default SketchCurtain;
