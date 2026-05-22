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
const easeInCubic = (t) => t * t * t;
const easeOutBack = (t) => {
  const c1 = 1.70158, c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

const TetrisCurtain = ({ onFinish }) => {
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

    // Letter targets
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

    // ===== Timing =====
    const STAGGER = 0.20;
    const FALL_DUR = 0.95;
    const SETTLE_DUR = 0.35;
    const ROT_STEPS = 4; // 90° increments
    const SKY = -nameFs * 1.4;

    const lastLandT = (fullName.length - 1) * STAGGER + FALL_DUR;
    const allSettledT = lastLandT + SETTLE_DUR;
    const LINE_FLASH_DUR = 0.45;
    const T_HOLD_START = allSettledT + LINE_FLASH_DUR * 0.6;
    const T_HOLD_END = T_HOLD_START + 1.4;

    // Exit: line-clear cascade L→R
    const EXIT_STAGGER = 0.13;
    const CLEAR_DUR = 0.5;
    const T_EXIT_END = T_HOLD_END + (fullName.length - 1) * EXIT_STAGGER + CLEAR_DUR;

    // ===== Pose helpers =====
    const dropPose = (i, t) => {
      const local = t - i * STAGGER;
      if (local < 0) return null;
      if (local < FALL_DUR) {
        const p = local / FALL_DUR;
        // Gravity drop: easeInCubic for acceleration
        const y = lerp(SKY, cy, easeInCubic(p));
        // Rotation snaps in 90° steps for first 85% of fall, then eases to 0 in last 15%
        let rot;
        const settlePart = 0.85;
        if (p < settlePart) {
          const stepDur = FALL_DUR * settlePart / ROT_STEPS;
          const idx = Math.floor(local / stepDur);
          const frac = (local - idx * stepDur) / stepDur;
          const e = easeOutBack(frac);
          rot = (idx + e) * Math.PI / 2;
        } else {
          // Final approach: ease last rotation back to 0
          const baseRot = ROT_STEPS * Math.PI / 2; // 360° = 0 visually
          const q = (p - settlePart) / (1 - settlePart);
          rot = baseRot + (Math.PI * 2 - baseRot) * easeOutCubic(q); // settle to 2π = 0
        }
        return { x: targetX[i], y, rot, sx: 1, sy: 1, alpha: 1, settleT: -1 };
      }
      const settleLocal = local - FALL_DUR;
      if (settleLocal < SETTLE_DUR) {
        const q = settleLocal / SETTLE_DUR;
        const e = easeOutBack(q);
        return {
          x: targetX[i], y: cy, rot: 0,
          sx: lerp(1.35, 1, e),
          sy: lerp(0.62, 1, e),
          alpha: 1,
          settleT: settleLocal,
        };
      }
      return { x: targetX[i], y: cy, rot: 0, sx: 1, sy: 1, alpha: 1, settleT: SETTLE_DUR };
    };

    const exitPose = (i, t) => {
      const exitStart = T_HOLD_END + i * EXIT_STAGGER;
      const local = t - exitStart;
      if (local < 0) {
        return { x: targetX[i], y: cy, rot: 0, sx: 1, sy: 1, alpha: 1, clearT: -1 };
      }
      const p = clamp(local / CLEAR_DUR, 0, 1);
      // Quick scale-up + alpha drop (line clear flash)
      const e = easeOutCubic(p);
      return {
        x: targetX[i],
        y: cy,
        rot: 0,
        sx: lerp(1, 1.45, e),
        sy: lerp(1, 1.45, e),
        alpha: Math.max(0, 1 - e * 1.2),
        clearT: local,
      };
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

    const drawLetter = (char, color, p) => {
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

    // Per-letter landing flash (small bright square halo at impact)
    const drawLandFlash = (i, p) => {
      if (!p || p.settleT < 0 || p.settleT > 0.2) return;
      const q = p.settleT / 0.2;
      const a = (1 - q) * 0.7;
      const w = nameFs * 0.95;
      const h = nameFs * 0.18;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.fillStyle = "#fff";
      ctx.fillRect(targetX[i] - w / 2, cy + nameFs * 0.42, w, h);
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // Per-letter exit clear flash — white horizontal stripe
    const drawClearFlash = (i, p) => {
      if (!p || p.clearT < 0) return;
      const q = clamp(p.clearT / 0.18, 0, 1);
      if (q >= 1) return;
      const a = (1 - q) * 0.85;
      const w = nameFs * 1.1;
      const h = nameFs * 1.4;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.fillStyle = "#fff";
      ctx.fillRect(targetX[i] - w / 2, cy - h / 2, w, h);
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // Full-row line clear flash after all letters land (entry payoff)
    const drawFullLineFlash = (t) => {
      const startT = lastLandT + SETTLE_DUR * 0.4;
      if (t < startT) return;
      const local = t - startT;
      if (local > LINE_FLASH_DUR) return;
      const q = local / LINE_FLASH_DUR;
      const a = Math.sin(q * Math.PI) * 0.55;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.fillStyle = "#fff";
      const flashH = nameFs * 1.5;
      ctx.fillRect(0, cy - flashH / 2, W, flashH);
      ctx.restore();
      ctx.globalAlpha = 1;
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

      // Divider + tagline alpha
      let divA = 0, tagA = 0;
      if (t < T_HOLD_END) {
        divA = clamp((t - allSettledT - 0.1) / 0.5, 0, 1);
        tagA = clamp((t - allSettledT - 0.3) / 0.5, 0, 1);
      } else {
        const ep = (t - T_HOLD_END) / (T_EXIT_END - T_HOLD_END);
        divA = Math.max(0, 1 - ep * 1.4);
        tagA = Math.max(0, 1 - ep * 1.5);
      }
      drawDivider(divA);
      drawTagline(tagA);

      // Letters
      for (let i = 0; i < fullName.length; i++) {
        const ch = fullName[i];
        const color = ch === "." ? ORANGE : WHITE;
        let pose;
        if (t < T_HOLD_END) {
          pose = dropPose(i, t);
          if (pose) drawLandFlash(i, pose);
          if (pose) drawLetter(ch, color, pose);
        } else {
          pose = exitPose(i, t);
          drawClearFlash(i, pose);
          drawLetter(ch, color, pose);
        }
      }

      // Full line clear at end of entry
      if (t < T_HOLD_END) drawFullLineFlash(t);

      // Bg flips transparent after last letter clears
      if (!bgTriggered && t > T_EXIT_END - 0.3) {
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

export default TetrisCurtain;
