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

const SkywriterCurtain = ({ onFinish }) => {
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

    // ===== Plane path =====
    const offLeft = -nameFs * 2;
    const offRight = W + nameFs * 2;
    const PLANE_DUR = 4.6;
    const planeXAt = (t) => offLeft + (offRight - offLeft) * easeOutCubic(clamp(t / PLANE_DUR, 0, 1));

    // Inverse for letter materialize timing
    const planeReachT = (x) => {
      const frac = clamp((x - offLeft) / (offRight - offLeft), 0, 1);
      const q = 1 - Math.cbrt(1 - frac);
      return q * PLANE_DUR;
    };
    const materializeT = targetX.map((x) => planeReachT(x));
    const FADE_IN_DUR = 0.45;
    const MATERIALIZE_LAST = materializeT[materializeT.length - 1] + FADE_IN_DUR;

    // Plane y: dips at each letter, rises between (writing rhythm)
    // Build a vertical-offset envelope sampled by x.
    const DIP = nameFs * 0.18; // dip below cy at each letter
    const RISE = -nameFs * 0.32; // rise above cy between letters
    const planeYAt = (t) => {
      const x = planeXAt(t);
      // Find which two letter targets x is between
      let i0 = 0;
      while (i0 < targetX.length - 1 && targetX[i0 + 1] < x) i0++;
      // Locate phase relative to letters
      let phase;
      if (x < targetX[0]) {
        // approaching first letter from off-left
        phase = clamp((x - offLeft) / (targetX[0] - offLeft), 0, 1);
        // start above, dip toward first letter
        return cy + RISE * (1 - phase) + DIP * phase;
      }
      if (x > targetX[targetX.length - 1]) {
        // past last letter — climbing out
        const phase2 = clamp((x - targetX[targetX.length - 1]) / (offRight - targetX[targetX.length - 1]), 0, 1);
        return cy + DIP * (1 - phase2) + RISE * phase2;
      }
      const segPhase = (x - targetX[i0]) / (targetX[i0 + 1] - targetX[i0]);
      // Cosine arc between two letter dips: y = DIP + (RISE - DIP) * (1 - cos(pi*segPhase))/2
      const arc = (1 - Math.cos(segPhase * Math.PI)) / 2; // 0→1→0 inverted... actually 0 at edges, 1 at mid
      return cy + lerp(DIP, RISE, arc);
    };

    // ===== Smoke particles =====
    const SMOKE_LIFE = 1.9;
    const SMOKE_EMIT_DT = 1 / 80;
    const smoke = [];
    let lastEmitT = -1;
    const burstFired = new Array(fullName.length).fill(false);

    const emitSmoke = (x, y, opts = {}) => {
      const { count = 1, vxBoost = 0, sizeMul = 1, life = SMOKE_LIFE } = opts;
      for (let i = 0; i < count; i++) {
        smoke.push({
          x: x + (Math.random() - 0.5) * nameFs * 0.08,
          y: y + (Math.random() - 0.5) * nameFs * 0.08,
          vx: (Math.random() - 0.5) * nameFs * 0.25 + vxBoost,
          vy: -nameFs * 0.5 + (Math.random() - 0.5) * nameFs * 0.3,
          age: 0,
          life,
          size: nameFs * (0.15 + Math.random() * 0.09) * sizeMul,
          growRate: nameFs * 0.45,
        });
      }
    };

    const updateSmoke = (dt, windPushX = 0) => {
      for (let i = smoke.length - 1; i >= 0; i--) {
        const s = smoke[i];
        s.age += dt;
        s.x += s.vx * dt + windPushX * dt;
        s.y += s.vy * dt;
        s.vy *= 0.985;
        s.vx *= 0.985;
        s.size += s.growRate * dt;
        if (s.age > s.life) smoke.splice(i, 1);
      }
    };

    const drawSmoke = () => {
      for (const s of smoke) {
        const tNorm = s.age / s.life;
        const alpha = (1 - tNorm) * 0.25;
        if (alpha <= 0.005) continue;
        ctx.fillStyle = `rgba(225,225,225,${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawPlane = (x, y, angle) => {
      const s = nameFs * 0.22;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      // Paper-plane body (light wing)
      ctx.fillStyle = "rgba(255,255,255,0.92)";
      ctx.beginPath();
      ctx.moveTo(s, 0);
      ctx.lineTo(-s * 0.85, -s * 0.55);
      ctx.lineTo(-s * 0.30, 0);
      ctx.lineTo(-s * 0.85, s * 0.55);
      ctx.closePath();
      ctx.fill();
      // Inner darker fold line
      ctx.strokeStyle = "rgba(0,0,0,0.18)";
      ctx.lineWidth = Math.max(1, s * 0.04);
      ctx.beginPath();
      ctx.moveTo(s, 0);
      ctx.lineTo(-s * 0.30, 0);
      ctx.stroke();
      // Orange nose tip
      ctx.fillStyle = ORANGE;
      ctx.beginPath();
      ctx.moveTo(s, 0);
      ctx.lineTo(s * 0.55, -s * 0.16);
      ctx.lineTo(s * 0.55, s * 0.16);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    // ===== Timeline =====
    const SMOKE_SETTLE_AFTER = 1.4; // wait after plane done for smoke to clear
    const T_HOLD_START = Math.max(MATERIALIZE_LAST, PLANE_DUR) + SMOKE_SETTLE_AFTER;
    const T_HOLD_END = T_HOLD_START + 1.4;
    const EXIT_DUR = 1.8;
    const T_EXIT_END = T_HOLD_END + EXIT_DUR;

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

    const drawLetter = (char, color, x, y, scale, alpha) => {
      if (alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.font = `900 ${nameFs}px ${sansStack}`;
      try { ctx.letterSpacing = "-1.5px"; } catch (_) {}
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = color;
      ctx.fillText(char, 0, 0);
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // ===== Main loop =====
    const START = performance.now();
    let raf;
    let finished = false;
    let bgTriggered = false;
    let lastTime = START;

    const draw = (now) => {
      const t = (now - START) / 1000;
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);

      // Divider + tagline alpha
      let divA = 0, tagA = 0;
      if (t < T_HOLD_END) {
        divA = clamp((t - MATERIALIZE_LAST) / 0.6, 0, 1);
        tagA = clamp((t - MATERIALIZE_LAST - 0.3) / 0.6, 0, 1);
      } else {
        const ep = (t - T_HOLD_END) / EXIT_DUR;
        divA = Math.max(0, 1 - ep * 1.5);
        tagA = Math.max(0, 1 - ep * 1.6);
      }
      drawDivider(divA);
      drawTagline(tagA);

      // ===== Smoke physics =====
      let windPush = 0;
      if (t < PLANE_DUR) {
        // Trail emission
        if (lastEmitT < 0) lastEmitT = t;
        while (lastEmitT + SMOKE_EMIT_DT < t) {
          lastEmitT += SMOKE_EMIT_DT;
          emitSmoke(planeXAt(lastEmitT), planeYAt(lastEmitT));
        }
        // Burst at each letter target as plane crosses
        const px = planeXAt(t);
        for (let i = 0; i < fullName.length; i++) {
          if (!burstFired[i] && px >= targetX[i]) {
            burstFired[i] = true;
            // Cluster of denser puffs around the letter
            for (let k = 0; k < 6; k++) {
              emitSmoke(targetX[i] + (Math.random() - 0.5) * nameFs * 0.5,
                        cy + (Math.random() - 0.5) * nameFs * 0.6,
                        { sizeMul: 1.3, life: SMOKE_LIFE * 1.1 });
            }
          }
        }
      } else if (t > T_HOLD_END) {
        const ep = (t - T_HOLD_END) / EXIT_DUR;
        windPush = nameFs * 13 * ep;
        if (Math.random() < 0.6) {
          const li = Math.floor(Math.random() * fullName.length);
          emitSmoke(targetX[li], cy + (Math.random() - 0.5) * nameFs * 0.6, {
            count: 3, vxBoost: nameFs * 4, sizeMul: 1.1, life: SMOKE_LIFE * 0.8,
          });
        }
      }
      updateSmoke(dt, windPush);
      drawSmoke();

      // ===== Letters =====
      for (let i = 0; i < fullName.length; i++) {
        const ch = fullName[i];
        const color = ch === "." ? ORANGE : WHITE;
        let alpha = 0;
        let x = targetX[i];
        let y = cy;
        let scale = 1;

        if (t < T_HOLD_END) {
          const age = t - materializeT[i];
          if (age > 0) {
            const p = clamp(age / FADE_IN_DUR, 0, 1);
            const e = easeOutCubic(p);
            alpha = e;
            scale = lerp(1.25, 1, e);
            // tiny y-settle from above smoke
            y = cy + (1 - e) * nameFs * 0.06;
          }
        } else {
          // Exit: drift right + fade out
          const ep = (t - T_HOLD_END) / EXIT_DUR;
          const drift = nameFs * 2.2 * easeInCubic(ep);
          x = targetX[i] + drift;
          y = cy + Math.sin(t * 9 + i) * 1.2;
          alpha = Math.max(0, 1 - ep * 1.3);
        }
        drawLetter(ch, color, x, y, scale, alpha);
      }

      // ===== Plane =====
      if (t < PLANE_DUR + 0.05) {
        const px = planeXAt(t);
        const py = planeYAt(t);
        // angle = velocity direction
        const dx = planeXAt(t + 0.02) - px;
        const dy = planeYAt(t + 0.02) - py;
        const angle = Math.atan2(dy, dx);
        drawPlane(px, py, angle);
      }

      // Bg flips transparent late in exit
      if (!bgTriggered && t > T_HOLD_END + EXIT_DUR * 0.45) {
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

export default SkywriterCurtain;
