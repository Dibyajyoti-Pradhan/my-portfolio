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
const PERIOD_CH = ".";
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

const ToonCurtain = ({ onFinish }) => {
  const canvasRef = useRef(null);
  const [bgOff, setBgOff] = useState(false);
  const [fade, setFade] = useState(false);
  const [done, setDone] = useState(false);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;
  const BG_MS = 1200;

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
    let probe = ctx.measureText(NAME + PERIOD_CH).width || 1;
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
    const fullName = NAME + PERIOD_CH; // last char = period
    const totalW = ctx.measureText(fullName).width;
    const startX = (W - totalW) / 2;
    const targetX = [];
    let cursor = startX;
    for (let i = 0; i < fullName.length; i++) {
      const w = ctx.measureText(fullName[i]).width;
      targetX.push(cursor + w / 2);
      cursor += w;
    }
    const PERIOD_IDX = fullName.length - 1; // 10
    const LETTER_IDX = []; for (let i = 0; i < PERIOD_IDX; i++) LETTER_IDX.push(i);

    // ===== Timing =====
    const OFF_L = -nameFs;
    const SKY = -nameFs * 1.5;

    const PERIOD_ENTRY_DUR = 6.0;
    const periodPath = (t) => OFF_L + (targetX[PERIOD_IDX] - OFF_L) * easeOutCubic(clamp(t / PERIOD_ENTRY_DUR, 0, 1));
    // Time when period reaches each letter target during entry (approx, using inverse mapping)
    const reachTime = (tx) => {
      // Solve: OFF_L + (target - OFF_L) * easeOutCubic(t/dur) = tx
      // easeOutCubic ≈ 1-(1-q)^3; invert: q = 1 - cbrt(1 - frac)
      const frac = clamp((tx - OFF_L) / (targetX[PERIOD_IDX] - OFF_L), 0, 1);
      const q = 1 - Math.cbrt(1 - frac);
      return q * PERIOD_ENTRY_DUR;
    };

    const dropStart = LETTER_IDX.map((i) => reachTime(targetX[i]));
    const DROP_DUR = 1.1;

    const T_HOLD_START = PERIOD_ENTRY_DUR + 0.15;
    const T_HOLD_END = T_HOLD_START + 1.6;
    // Period's resting y — measure where the actual "." glyph dot center sits
    ctx.font = `900 ${nameFs}px ${sansStack}`;
    ctx.textBaseline = "middle";
    const dotM = ctx.measureText(".");
    const dotCenterOffset = (dotM.actualBoundingBoxDescent - dotM.actualBoundingBoxAscent) / 2;
    const restY = cy + dotCenterOffset;
    const dotRadius = Math.max(
      (dotM.actualBoundingBoxDescent + dotM.actualBoundingBoxAscent) / 2,
      nameFs * 0.08
    );
    // Letter top y for tap landings
    const iM = ctx.measureText("I");
    const letterTopY = cy - iM.actualBoundingBoxAscent;
    const tapY = letterTopY - dotRadius * 1.05;

    // Exit choreography: tap each letter top, right-to-left
    const tapOrder = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const HOP_DUR = 0.32;
    const TAP_PAUSE = 0.05;
    const PER_TAP = HOP_DUR + TAP_PAUSE;
    const FINAL_HOP_DUR = 1.8;
    const tapTimes = tapOrder.map((_, k) => T_HOLD_END + k * PER_TAP + HOP_DUR);
    const finalHopStart = T_HOLD_END + tapOrder.length * PER_TAP;

    const KNOCK_DUR = 1.4;
    const T_TOTAL = finalHopStart + FINAL_HOP_DUR + 0.3;

    // ===== Pose helpers =====
    const dropPose = (tx, localT) => {
      const p = clamp(localT / DROP_DUR, 0, 1);
      if (p < 0.55) {
        // free-fall, stretch
        const q = p / 0.55;
        return {
          x: tx,
          y: lerp(SKY, cy, easeInCubic(q)),
          sx: 0.82, sy: 1.18,
          rot: 0, skew: 0,
          alpha: clamp(q * 4, 0, 1),
        };
      }
      if (p < 0.75) {
        // impact squash
        const q = (p - 0.55) / 0.2;
        return {
          x: tx,
          y: cy + nameFs * 0.04 * Math.sin(q * Math.PI),
          sx: lerp(0.82, 1.4, q),
          sy: lerp(1.18, 0.62, q),
          rot: 0, skew: 0,
          alpha: 1,
        };
      }
      // spring overshoot to rest
      const q = (p - 0.75) / 0.25;
      return {
        x: tx,
        y: cy,
        sx: lerp(1.4, 1.0, easeOutBack(q)),
        sy: lerp(0.62, 1.0, easeOutBack(q)),
        rot: 0, skew: 0,
        alpha: 1,
      };
    };

    const idlePose = (tx, t, seed = 0) => {
      const breath = Math.sin(t * 1.4 + seed) * 1.0;
      const b2 = Math.sin(t * 1.4 + seed) * 0.006;
      return { x: tx, y: cy + breath, sx: 1 + b2, sy: 1 - b2, rot: 0, skew: 0, alpha: 1 };
    };

    // Tapped from top → vertical squash, then fall straight down tumbling
    const tapFallPose = (tx, localT, spinDir) => {
      const p = clamp(localT / KNOCK_DUR, 0, 1);
      if (p < 0.08) {
        // impact: compress vertically
        const q = p / 0.08;
        return {
          x: tx,
          y: cy + nameFs * 0.05 * q,
          sx: 1 + 0.28 * q,
          sy: 1 - 0.22 * q,
          rot: 0,
          skew: 0,
          alpha: 1,
        };
      }
      // fall + tumble
      const q = (p - 0.08) / 0.92;
      const ex = easeInCubic(q);
      const fallDist = (H * 0.9) * ex;
      const wobbleX = Math.sin(q * 4) * nameFs * 0.12;
      return {
        x: tx + wobbleX,
        y: cy + fallDist,
        sx: 1,
        sy: 1,
        rot: spinDir * q * Math.PI * 2.5,
        skew: 0,
        alpha: Math.max(0, 1 - Math.pow(q, 2.2)),
      };
    };

    const periodPose = (t) => {
      // Entry: rolls in along baseline, bouncing arcs damped to settle exactly at restY
      if (t < PERIOD_ENTRY_DUR) {
        const x = periodPath(t);
        const damp = 1 - easeInCubic(clamp(t / PERIOD_ENTRY_DUR, 0, 1));
        const bouncePhase = t * 1.6 * Math.PI * 2;
        const y = restY - Math.abs(Math.sin(bouncePhase)) * nameFs * 0.35 * damp;
        return { x, y, sx: 1, sy: 1, rot: 0, skew: 0, alpha: 1 };
      }
      // Tiny settle: micro damped wobble for 0.15s then rest
      if (t < T_HOLD_START) {
        const q = (t - PERIOD_ENTRY_DUR) / 0.15;
        const wob = Math.sin(q * Math.PI * 2) * nameFs * 0.025 * (1 - q);
        return { x: targetX[PERIOD_IDX], y: restY - Math.abs(wob), sx: 1, sy: 1, rot: 0, skew: 0, alpha: 1 };
      }
      if (t < T_HOLD_END) {
        return { x: targetX[PERIOD_IDX], y: restY, sx: 1, sy: 1, rot: 0, skew: 0, alpha: 1 };
      }
      // Exit: hop letter-to-letter (taps top), then big-arc exit off left
      const localT = t - T_HOLD_END;
      // Within tap sequence
      for (let k = 0; k < tapOrder.length; k++) {
        const segStart = k * PER_TAP;
        const segHopEnd = segStart + HOP_DUR;
        if (localT < segHopEnd) {
          // arc from previous landing to top of letter[tapOrder[k]]
          const fromX = k === 0 ? targetX[PERIOD_IDX] : targetX[tapOrder[k - 1]];
          const fromY = k === 0 ? restY : tapY;
          const toX = targetX[tapOrder[k]];
          const toY = tapY;
          const p = (localT - segStart) / HOP_DUR;
          const x = lerp(fromX, toX, p);
          const arcH = nameFs * 0.55;
          const y = lerp(fromY, toY, p) - Math.sin(p * Math.PI) * arcH;
          return { x, y, sx: 1, sy: 1, rot: 0, skew: 0, alpha: 1 };
        }
        const segTapEnd = segHopEnd + TAP_PAUSE;
        if (localT < segTapEnd) {
          // micro squash on top of letter
          return { x: targetX[tapOrder[k]], y: tapY + nameFs * 0.02, sx: 1.18, sy: 0.85, rot: 0, skew: 0, alpha: 1 };
        }
      }
      // After all tapped → wide-arc exit off left, starting from D's TOP (tapY)
      const flT = t - finalHopStart;
      if (flT < FINAL_HOP_DUR) {
        const startX = targetX[tapOrder[tapOrder.length - 1]];
        const p = clamp(flT / FINAL_HOP_DUR, 0, 1);
        const x = startX + (OFF_L - nameFs * 2 - startX) * easeInCubic(p);
        // Wide arcs starting from tapY (no fall to restY first)
        const bouncePhase = p * Math.PI * 2.4;
        const y = tapY - Math.abs(Math.sin(bouncePhase)) * nameFs * 0.75;
        const scl = 1 + Math.min(1, flT * 0.5) * 0.25;
        return { x, y, sx: scl, sy: scl, rot: 0, skew: 0, alpha: 1 };
      }
      return null;
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
      ctx.transform(1, 0, Math.tan(p.skew || 0), 1, 0, 0);
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

    const drawBall = (p) => {
      if (!p || p.alpha <= 0) return;
      const radius = dotRadius * (p.sx || 1);
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      // Soft glow only while airborne (scales with height above rest)
      const air = clamp((restY - p.y) / nameFs, 0, 1);
      if (air > 0.02) {
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 2.2);
        g.addColorStop(0, `rgba(255,180,80,${0.25 * air})`);
        g.addColorStop(1, "rgba(255,120,30,0)");
        ctx.fillStyle = g;
        ctx.fillRect(-radius * 3, -radius * 3, radius * 6, radius * 6);
      }
      // Ball
      ctx.fillStyle = ORANGE;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();
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

      // Divider always visible (fade in over first 0.6s; fade out late in exit)
      let divA = clamp(t / 0.6, 0, 1);
      let tagA = 0;
      if (t < T_HOLD_END) {
        if (t > T_HOLD_START) tagA = clamp((t - T_HOLD_START) / 0.8, 0, 1);
      } else {
        const exitTotalDur = (T_TOTAL - T_HOLD_END);
        const ep = (t - T_HOLD_END) / exitTotalDur;
        divA = Math.max(0, 1 - ep * 1.4);
        tagA = Math.max(0, 1 - ep * 1.6);
      }
      drawDivider(divA);
      drawTagline(tagA);

      // Letters (non-period)
      for (let idx = 0; idx < LETTER_IDX.length; idx++) {
        const i = LETTER_IDX[idx];
        let pose = null;
        const ds = dropStart[idx];
        const tapPos = tapOrder.indexOf(i);
        const ks = tapPos >= 0 ? tapTimes[tapPos] : Infinity;

        if (t < ds) {
          // hidden — not yet dropped
        } else if (t < ds + DROP_DUR) {
          pose = dropPose(targetX[i], t - ds);
        } else if (t < ks) {
          pose = idlePose(targetX[i], t, i * 0.5);
        } else if (t < ks + KNOCK_DUR) {
          pose = tapFallPose(targetX[i], t - ks, i % 2 === 0 ? 1 : -1);
        }
        if (pose) drawLetter(fullName[i], WHITE, pose);
      }

      // Period (always rendered as orange ball — visually equivalent to "." char)
      const pp = periodPose(t);
      if (pp) drawBall(pp);

      // Bg fade during exit
      if (!bgTriggered && t > T_HOLD_END + 0.4) {
        bgTriggered = true;
        setBgOff(true);
      }

      if (t >= T_TOTAL) {
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

export default ToonCurtain;
