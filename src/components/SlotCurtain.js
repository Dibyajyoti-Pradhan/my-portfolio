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
const DIM_RGB = "38,38,38";
const MUTED_RGB = "107,111,118";
const REEL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const PERIOD_CHARS = ".,;:!?·*";

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, p) => a + (b - a) * p;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeOutBack = (t) => {
  const c1 = 1.70158, c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

const SlotCurtain = ({ onFinish }) => {
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

    // Per-letter targets (same as other variants for layout consistency)
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

    // Slot bezel bounds (clip zone per reel: cy ± rowH/2)
    const rowH = nameFs * 1.05;

    // ===== Reel state =====
    // Cruise (all spinning) then lock left→right
    const CRUISE_END = 1.2; // until this, all reels free spin
    const LOCK_STAGGER = 0.18;
    const DECEL_DUR = 0.55;
    const LOCK_BOUNCE_DUR = 0.35;

    const reels = [];
    for (let i = 0; i < fullName.length; i++) {
      const chars = fullName[i] === "." ? PERIOD_CHARS : REEL_CHARS;
      const targetIdx = chars.indexOf(fullName[i]);
      const cruiseSpeed = 22 + Math.random() * 6; // chars / sec during spin
      const startScroll = Math.random() * chars.length;
      const lockTime = CRUISE_END + i * LOCK_STAGGER + DECEL_DUR;
      // Compute scroll at end of cruise (decel start)
      const decelStartT = lockTime - DECEL_DUR;
      const cruiseScroll = startScroll + cruiseSpeed * decelStartT;
      // Find finalScroll: smallest value > cruiseScroll where (finalScroll mod len) == targetIdx
      const len = chars.length;
      const cruiseFloor = Math.floor(cruiseScroll);
      const cruiseMod = ((cruiseFloor % len) + len) % len;
      let extra = (targetIdx - cruiseMod + len) % len;
      if (extra < len * 0.6) extra += len; // ensure at least ~60% of one full cycle of deceleration travel
      // INTEGER finalScroll so frac=0 → target char centers exactly at cy
      const finalScroll = cruiseFloor + extra;
      reels.push({
        chars,
        len,
        targetIdx,
        targetChar: fullName[i],
        targetXi: targetX[i],
        cruiseSpeed,
        startScroll,
        decelStartT,
        cruiseScrollAtDecel: cruiseScroll,
        lockTime,
        finalScroll,
        isPeriod: fullName[i] === ".",
      });
    }

    const lastLockTime = reels[reels.length - 1].lockTime + LOCK_BOUNCE_DUR;
    const T_HOLD_END = lastLockTime + 1.6;

    // ===== Exit: spin again, dissolve =====
    const EXIT_SPIN_DUR = 1.4; // re-spin
    const EXIT_FADE_DUR = 0.9;
    const T_EXIT_END = T_HOLD_END + EXIT_SPIN_DUR + EXIT_FADE_DUR;

    const exitReels = reels.map((r) => ({
      ...r,
      exitStartScroll: r.finalScroll,
      exitSpeed: 18 + Math.random() * 10, // accelerating
    }));

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

    // Render a reel at scroll position. spinAmt 0..1 = how much "motion blur" feel.
    // squash = sy scale (for lock bounce)
    const drawReel = (reel, scroll, x, opts) => {
      const { color, spinAmt = 0, squashY = 1, alpha = 1 } = opts;
      const chars = reel.chars;
      const len = reel.len;
      const idxFloor = Math.floor(scroll);
      const frac = scroll - idxFloor;
      // Vertical offset: middle char is at cy - frac*rowH, next at cy - frac*rowH + rowH, prev at -rowH
      const centerY = cy - frac * rowH;
      ctx.save();
      ctx.font = `900 ${nameFs}px ${sansStack}`;
      try { ctx.letterSpacing = "-1.5px"; } catch (_) {}
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      // Render 3 rows (prev / current / next) — alpha by distance from cy
      for (let row = -1; row <= 1; row++) {
        const ch = chars[((idxFloor + row) % len + len) % len];
        const drawY = centerY + row * rowH;
        // Distance from cy in row units (0 = center, 1 = full row off)
        const dist = Math.abs(drawY - cy) / rowH;
        // Visibility: 1 at center, fades to 0 at dist=0.5
        const vis = clamp(1 - dist * 2, 0, 1);
        // During spin, blur effect: tone everything down
        const blurDim = 1 - spinAmt * 0.45;
        const a = alpha * vis * blurDim;
        if (a <= 0.02) continue;
        ctx.fillStyle = color.replace(/,1\)$/, `,${a})`).replace(/, 1\)$/, `,${a})`);
        // squash Y around center
        ctx.save();
        ctx.translate(x, cy);
        ctx.scale(1, squashY);
        ctx.translate(0, drawY - cy);
        ctx.fillText(ch, 0, 0);
        ctx.restore();
      }
      ctx.restore();
    };

    // Reel scroll at time t
    const reelScroll = (r, t) => {
      if (t < r.decelStartT) {
        return r.startScroll + r.cruiseSpeed * t;
      }
      if (t < r.lockTime) {
        const p = (t - r.decelStartT) / DECEL_DUR;
        return lerp(r.cruiseScrollAtDecel, r.finalScroll, easeOutCubic(p));
      }
      return r.finalScroll;
    };

    // Lock bounce squash for a reel
    const lockSquash = (r, t) => {
      if (t < r.lockTime) return 1;
      const dt = t - r.lockTime;
      if (dt >= LOCK_BOUNCE_DUR) return 1;
      const p = dt / LOCK_BOUNCE_DUR;
      // 0 → 0.78 → 1.12 → 1.0 (easeOutBack)
      if (p < 0.3) {
        const q = p / 0.3;
        return lerp(1, 0.78, q);
      }
      const q = (p - 0.3) / 0.7;
      return lerp(0.78, 1, easeOutBack(q));
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
      let divA = clamp(t / 0.5, 0, 1);
      let tagA = 0;
      if (t < T_HOLD_END) {
        if (t > lastLockTime) tagA = clamp((t - lastLockTime) / 0.6, 0, 1);
      } else {
        const ep = (t - T_HOLD_END) / (T_EXIT_END - T_HOLD_END);
        divA = Math.max(0, 1 - ep * 1.3);
        tagA = Math.max(0, 1 - ep * 1.5);
      }
      drawDivider(divA);
      drawTagline(tagA);

      // Reels
      for (let i = 0; i < reels.length; i++) {
        const r = reels[i];
        const color = r.isPeriod ? "rgba(255,122,26,1)" : "rgba(255,255,255,1)";

        if (t < T_HOLD_END) {
          const scroll = reelScroll(r, t);
          // spinAmt: high when cruising, drops during decel to 0 at lock
          let spinAmt = 0;
          if (t < r.decelStartT) spinAmt = 1;
          else if (t < r.lockTime) spinAmt = 1 - (t - r.decelStartT) / DECEL_DUR;
          const squash = lockSquash(r, t);
          drawReel(r, scroll, r.targetXi, { color, spinAmt, squashY: squash, alpha: 1 });
        } else {
          // Exit: spin up again, then fade out
          const localT = t - T_HOLD_END;
          if (localT < EXIT_SPIN_DUR) {
            // Speed ramps up from 0 to exitSpeed
            const sp = localT * localT * exitReels[i].exitSpeed;
            const scroll = exitReels[i].exitStartScroll + sp;
            const spinAmt = clamp(localT / 0.4, 0, 1);
            drawReel(r, scroll, r.targetXi, { color, spinAmt, squashY: 1, alpha: 1 });
          } else {
            // Fade out while still spinning fast
            const fp = (localT - EXIT_SPIN_DUR) / EXIT_FADE_DUR;
            const alpha = Math.max(0, 1 - fp);
            if (alpha > 0) {
              const sp = EXIT_SPIN_DUR * EXIT_SPIN_DUR * exitReels[i].exitSpeed
                + (localT - EXIT_SPIN_DUR) * EXIT_SPIN_DUR * exitReels[i].exitSpeed * 2;
              const scroll = exitReels[i].exitStartScroll + sp;
              drawReel(r, scroll, r.targetXi, { color, spinAmt: 1, squashY: 1, alpha });
            }
          }
        }
      }

      // Bg fade late in exit
      if (!bgTriggered && t > T_HOLD_END + EXIT_SPIN_DUR * 0.6) {
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

export default SlotCurtain;
