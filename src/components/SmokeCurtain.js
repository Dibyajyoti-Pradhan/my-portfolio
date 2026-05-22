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

const SmokeCurtain = ({ onFinish }) => {
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
    const PERIOD_IDX = fullName.length - 1;

    // Period dot rest geometry (match where "." would render)
    ctx.font = `900 ${nameFs}px ${sansStack}`;
    ctx.textBaseline = "middle";
    const dotM = ctx.measureText(".");
    const dotCenterOffset = (dotM.actualBoundingBoxDescent - dotM.actualBoundingBoxAscent) / 2;
    const restY = cy + dotCenterOffset;
    const dotRadius = Math.max(
      (dotM.actualBoundingBoxDescent + dotM.actualBoundingBoxAscent) / 2,
      nameFs * 0.08
    );

    // ===== Geometry for shake =====
    const centerX = W / 2;
    const maxAmp = (totalW / 2) + nameFs * 0.4;
    const distFromCenter = targetX.map((x) => Math.abs(x - centerX));

    // ===== Phases (seconds) =====
    const T_SMALL_SHAKE = 0.7;     // 0     → small shake at center
    const T_WIDEN_END  = 3.0;       // T_SMALL_SHAKE → widening oscillation
    const T_SETTLE_END = 3.7;       // T_WIDEN_END   → dot transitions to period spot, amp shrinks
    const T_HOLD_END   = T_SETTLE_END + 1.4;
    const T_EXIT_SHAKE = T_HOLD_END + 1.5;   // shake amplitude grows, lots of smoke
    const T_EXIT_END   = T_EXIT_SHAKE + 1.3;  // smoke disperses, bg appears
    const FADE_IN_DUR = 0.45;

    // Letter materialize times (linear ramp during widen)
    const widDur = T_WIDEN_END - T_SMALL_SHAKE;
    const materializeT = distFromCenter.map((d) => {
      if (d <= 5) return T_SMALL_SHAKE;
      const frac = clamp((d - 5) / (maxAmp - 5), 0, 1);
      return T_SMALL_SHAKE + frac * widDur;
    });

    // ===== Dot pose =====
    const dotPose = (t) => {
      if (t < T_SMALL_SHAKE) {
        const amp = 5;
        const x = centerX + Math.sin(t * 22) * amp;
        return { x, y: restY, vel: amp * 22 };
      }
      if (t < T_WIDEN_END) {
        const p = (t - T_SMALL_SHAKE) / widDur;
        const amp = lerp(5, maxAmp, p);
        const freqHz = lerp(5.5, 3.0, p); // slow as amp widens
        const omega = freqHz * Math.PI * 2;
        const phase = t * omega;
        const x = centerX + Math.sin(phase) * amp;
        const vx = Math.cos(phase) * amp * omega;
        return { x, y: restY, vel: Math.abs(vx) };
      }
      if (t < T_SETTLE_END) {
        // transition: amp shrinks, anchor moves to period spot
        const p = (t - T_WIDEN_END) / (T_SETTLE_END - T_WIDEN_END);
        const e = easeOutCubic(p);
        const amp = maxAmp * (1 - e);
        const anchor = lerp(centerX, targetX[PERIOD_IDX], e);
        const omega = 3.0 * Math.PI * 2;
        const x = anchor + Math.sin(t * omega) * amp;
        return { x, y: restY, vel: Math.abs(Math.cos(t * omega) * amp * omega) };
      }
      if (t < T_HOLD_END) {
        return { x: targetX[PERIOD_IDX], y: restY, vel: 0 };
      }
      if (t < T_EXIT_SHAKE) {
        // Exit shake — amp grows but dot only swings LEFT of its rest spot
        const p = (t - T_HOLD_END) / (T_EXIT_SHAKE - T_HOLD_END);
        const amp = lerp(0, totalW + nameFs, easeInOutCubic(p));
        const freqHz = lerp(5.5, 2.8, p);
        const omega = freqHz * Math.PI * 2;
        const phase = t * omega;
        // |sin| keeps offset non-negative → subtract → always left
        const offset = -Math.abs(Math.sin(phase)) * amp;
        const x = targetX[PERIOD_IDX] + offset;
        return { x, y: restY, vel: Math.abs(Math.cos(phase) * amp * omega) };
      }
      if (t < T_EXIT_END) {
        // Disperse — dot returns to rest, fades
        const p = (t - T_EXIT_SHAKE) / (T_EXIT_END - T_EXIT_SHAKE);
        const e = easeOutCubic(p);
        return { x: targetX[PERIOD_IDX], y: restY, vel: 0, alpha: 1 - e };
      }
      return null;
    };

    // ===== Smoke (multi-layer puffs + curl noise + tinted sprites) =====
    const SMOKE_LIFE = 3.2;
    const smoke = [];

    // Build a sprite with subtle internal structure (concentric soft rings)
    const makePuffSprite = (innerAlpha, midAlpha, hue) => {
      const c = document.createElement("canvas");
      c.width = c.height = 128;
      const sctx = c.getContext("2d");
      // Soft cloud body
      const grad = sctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0.0, `rgba(${hue},${innerAlpha})`);
      grad.addColorStop(0.25, `rgba(${hue},${midAlpha})`);
      grad.addColorStop(0.55, `rgba(${hue},${midAlpha * 0.45})`);
      grad.addColorStop(0.85, `rgba(${hue},${midAlpha * 0.12})`);
      grad.addColorStop(1.0, `rgba(${hue},0)`);
      sctx.fillStyle = grad;
      sctx.fillRect(0, 0, 128, 128);
      // Slight wisp asymmetry: subtract a small off-center darker spot
      sctx.globalCompositeOperation = "destination-out";
      const wisp = sctx.createRadialGradient(78, 70, 0, 78, 70, 22);
      wisp.addColorStop(0, "rgba(0,0,0,0.25)");
      wisp.addColorStop(1, "rgba(0,0,0,0)");
      sctx.fillStyle = wisp;
      sctx.fillRect(0, 0, 128, 128);
      return c;
    };

    // 3 sprite variants — light body, mid gray, soft warm wisp
    const sprites = [
      makePuffSprite(0.55, 0.32, "230,232,238"),   // cool light
      makePuffSprite(0.42, 0.22, "190,195,205"),   // mid gray
      makePuffSprite(0.62, 0.30, "250,235,215"),   // warm wisp
    ];

    const emitSmoke = (x, y, opts = {}) => {
      const { count = 1, sizeMul = 1, life = SMOKE_LIFE, vxBoost = 0, layer = "mix" } = opts;
      const total = layer === "mix" ? count * 3 : count;
      for (let i = 0; i < total; i++) {
        // Choose tier per particle: 0=body, 1=mid, 2=detail
        const tier = layer === "mix" ? (i % 3) : 0;
        const tierSize = tier === 0 ? 1.5 : tier === 1 ? 1.0 : 0.55;
        const tierLife = tier === 0 ? 1.25 : tier === 1 ? 1.0 : 0.8;
        const ang = Math.random() * Math.PI * 2;
        const r = Math.random() * nameFs * 0.16 * tierSize;
        smoke.push({
          x: x + Math.cos(ang) * r,
          y: y + Math.sin(ang) * r,
          vx: (Math.random() - 0.5) * nameFs * 0.45 + vxBoost * (tier === 0 ? 0.8 : 1.2),
          vy: -nameFs * (0.10 + Math.random() * 0.22) * (tier === 0 ? 0.7 : 1.1),
          age: 0,
          life: life * tierLife * (0.85 + Math.random() * 0.4),
          size: nameFs * (0.10 + Math.random() * 0.10) * sizeMul * tierSize,
          growRate: nameFs * (0.16 + Math.random() * 0.14) * (tier === 0 ? 1.4 : 0.9),
          rot: Math.random() * Math.PI * 2,
          rotSpd: (Math.random() - 0.5) * 0.7,
          spriteIdx: tier === 0 ? 1 : tier === 1 ? 0 : 2,
          curlPhase: Math.random() * Math.PI * 2,
        });
      }
    };

    // Curl-noise turbulence — particles drift in pseudo-vortex patterns
    const curlVel = (x, y, age, phase) => {
      const fx = Math.sin(y * 0.012 + age * 0.9 + phase) * nameFs * 0.35;
      const fy = Math.cos(x * 0.010 + age * 0.7 + phase * 0.7) * nameFs * 0.22;
      return [fx, fy];
    };

    const updateSmoke = (dt) => {
      for (let i = smoke.length - 1; i >= 0; i--) {
        const s = smoke[i];
        s.age += dt;
        const [cvx, cvy] = curlVel(s.x, s.y, s.age, s.curlPhase);
        // Buoyancy weakens with size (bigger = slower rise)
        const buoy = -nameFs * 0.18 / (1 + s.size / nameFs);
        s.vx += cvx * dt * 0.4;
        s.vy += (cvy * 0.3 + buoy) * dt;
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        s.vx *= 0.985;
        s.vy *= 0.99;
        s.size += s.growRate * dt;
        s.rot += s.rotSpd * dt;
        if (s.age > s.life) smoke.splice(i, 1);
      }
    };

    const drawSmoke = (globalMul = 1, shrink = 1) => {
      if (globalMul <= 0.005) return;
      ctx.save();
      for (const s of smoke) {
        const tNorm = s.age / s.life;
        const fadeIn = clamp(s.age / 0.18, 0, 1);
        const fadeOut = Math.pow(1 - tNorm, 1.4);
        const alpha = fadeIn * fadeOut * 0.85 * globalMul;
        if (alpha <= 0.005) continue;
        ctx.globalAlpha = alpha;
        const ds = s.size * shrink;
        const d = ds * 2;
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);
        ctx.drawImage(sprites[s.spriteIdx], -ds, -ds, d, d);
        ctx.restore();
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    const drawDot = (x, y, alpha = 1, scale = 1) => {
      const r = dotRadius * scale;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(x, y);
      const air = clamp((restY - y) / nameFs, 0, 1);
      if (air > 0.02) {
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 2.2);
        g.addColorStop(0, `rgba(255,180,80,${0.25 * air})`);
        g.addColorStop(1, "rgba(255,120,30,0)");
        ctx.fillStyle = g;
        ctx.fillRect(-r * 3, -r * 3, r * 6, r * 6);
      }
      ctx.fillStyle = ORANGE;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
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
        divA = clamp((t - T_SETTLE_END + 0.3) / 0.6, 0, 1);
        tagA = clamp((t - T_SETTLE_END) / 0.6, 0, 1);
      } else if (t < T_EXIT_SHAKE) {
        // Fade them during exit shake (smoke covers them)
        const p = (t - T_HOLD_END) / (T_EXIT_SHAKE - T_HOLD_END);
        divA = Math.max(0, 1 - p * 1.3);
        tagA = Math.max(0, 1 - p * 1.5);
      }
      drawDivider(divA);
      drawTagline(tagA);

      const pose = dotPose(t);

      // Emit smoke based on dot velocity / phase
      if (pose && t < T_HOLD_END) {
        const vNorm = clamp(pose.vel / (nameFs * 30), 0, 1);
        const baseRate = 35 + vNorm * 90; // puffs per sec
        const expected = baseRate * dt;
        let n = Math.floor(expected);
        if (Math.random() < expected - n) n++;
        for (let k = 0; k < n; k++) emitSmoke(pose.x, pose.y);
      } else if (pose && t < T_EXIT_SHAKE) {
        // Exit shake — heavier emission, billowy
        const vNorm = clamp(pose.vel / (nameFs * 30), 0, 1);
        const baseRate = 120 + vNorm * 180;
        const expected = baseRate * dt;
        let n = Math.floor(expected);
        if (Math.random() < expected - n) n++;
        for (let k = 0; k < n; k++) {
          emitSmoke(pose.x, pose.y, { sizeMul: 1.3, life: SMOKE_LIFE * 1.1 });
        }
      }
      updateSmoke(dt);

      // Force smoke cleanup during disperse — also shrink particles for natural fade
      let smokeMul = 1;
      let smokeShrink = 1;
      if (t > T_EXIT_SHAKE) {
        const p = clamp((t - T_EXIT_SHAKE) / (T_EXIT_END - T_EXIT_SHAKE), 0, 1);
        smokeMul = Math.pow(1 - p, 3);
        smokeShrink = lerp(1, 0.4, p);
      }
      // Hard purge once mul is effectively zero
      if (smokeMul < 0.01) smoke.length = 0;

      // Draw letters BEFORE smoke so smoke veils them
      for (let i = 0; i < fullName.length; i++) {
        if (i === PERIOD_IDX) continue; // period is the dot
        const ch = fullName[i];
        let alpha = 0, scale = 1, x = targetX[i], y = cy;

        if (t < T_HOLD_END) {
          const age = t - materializeT[i];
          if (age > 0) {
            const p = clamp(age / FADE_IN_DUR, 0, 1);
            const e = easeOutCubic(p);
            alpha = e;
            scale = lerp(1.25, 1, e);
            y = cy + (1 - e) * nameFs * 0.06;
          }
        } else if (t < T_EXIT_SHAKE) {
          // Fade out as smoke builds
          const p = (t - T_HOLD_END) / (T_EXIT_SHAKE - T_HOLD_END);
          alpha = Math.max(0, 1 - p * 1.4);
        }
        drawLetter(ch, WHITE, x, y, scale, alpha);
      }

      // Smoke veil over letters
      drawSmoke(smokeMul, smokeShrink);

      // Dot on top
      if (pose) drawDot(pose.x, pose.y, pose.alpha != null ? pose.alpha : 1);

      // Bg snaps transparent at peak smoke — portfolio is "behind" the cloud
      if (!bgTriggered && t >= T_EXIT_SHAKE) {
        bgTriggered = true;
        setBgOff(true);
      }

      if (t >= T_EXIT_END + 0.4) {
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

export default SmokeCurtain;
