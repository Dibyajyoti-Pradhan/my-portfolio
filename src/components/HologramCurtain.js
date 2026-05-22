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

const HologramCurtain = ({ onFinish }) => {
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
    let cursor = startX;
    for (let i = 0; i < fullName.length; i++) {
      const w = ctx.measureText(fullName[i]).width;
      targetX.push(cursor + w / 2);
      cursor += w;
    }

    // ===== Build pre-rendered letter canvases =====
    const makeLetterCanvas = (fillColorForLetters, fillColorForPeriod) => {
      const c = document.createElement("canvas");
      c.width = W * dpr;
      c.height = H * dpr;
      const cx = c.getContext("2d");
      cx.scale(dpr, dpr);
      cx.font = `900 ${nameFs}px ${sansStack}`;
      try { cx.letterSpacing = "-1.5px"; } catch (_) {}
      cx.textBaseline = "middle";
      cx.textAlign = "center";
      for (let i = 0; i < fullName.length; i++) {
        cx.fillStyle = fullName[i] === "." ? fillColorForPeriod : fillColorForLetters;
        cx.fillText(fullName[i], targetX[i], cy);
      }
      return c;
    };

    // R/G/B tinted canvases (period included tinted too — appears white when summed)
    const letterR = makeLetterCanvas("rgb(255,0,0)", "rgb(255,0,0)");
    const letterG = makeLetterCanvas("rgb(0,255,0)", "rgb(0,255,0)");
    const letterB = makeLetterCanvas("rgb(0,0,255)", "rgb(0,0,255)");
    const letterFinal = makeLetterCanvas(WHITE, ORANGE);

    // Pre-blurred cyan glow canvas for hologram halo
    const letterGlow = document.createElement("canvas");
    letterGlow.width = W * dpr;
    letterGlow.height = H * dpr;
    {
      const gctx = letterGlow.getContext("2d");
      gctx.scale(dpr, dpr);
      // Draw cyan version of letters, then blur
      const cyan = makeLetterCanvas("rgb(140,220,255)", "rgb(255,170,80)");
      try { gctx.filter = "blur(" + Math.round(nameFs * 0.18) + "px)"; } catch (_) {}
      gctx.drawImage(cyan, 0, 0, W, H);
      try { gctx.filter = "none"; } catch (_) {}
    }

    // CRT scanline overlay
    const scanlineOverlay = document.createElement("canvas");
    scanlineOverlay.width = W * dpr;
    scanlineOverlay.height = H * dpr;
    {
      const sctx = scanlineOverlay.getContext("2d");
      sctx.scale(dpr, dpr);
      sctx.fillStyle = "rgba(0,0,0,0.32)";
      const step = 3;
      for (let y = 0; y < H; y += step) sctx.fillRect(0, y, W, 1);
    }

    // ===== Timing =====
    const T_SWEEP1_END = 1.10;
    const T_SWEEP2_END = 1.80;
    const T_SWEEP3_END = 2.55;
    const T_STABILIZE_END = 3.00;
    const T_HOLD_END = 4.40;
    const T_GLITCH_END = 5.40;
    const T_LOST_END = 6.30;

    // ===== Floating dust particles (ambient hologram atmosphere) =====
    const dust = [];
    const DUST_COUNT = Math.round((W * H) / 22000);
    for (let i = 0; i < DUST_COUNT; i++) {
      dust.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vy: -(2 + Math.random() * 6),
        vx: (Math.random() - 0.5) * 1.2,
        size: 1 + Math.random() * 1.5,
        twPhase: Math.random() * Math.PI * 2,
        twSpeed: 1 + Math.random() * 2.5,
        warm: Math.random() < 0.15,
      });
    }
    const updateDust = (dt) => {
      for (const d of dust) {
        d.x += d.vx * dt * 18;
        d.y += d.vy * dt * 18;
        if (d.y < -10) { d.y = H + 10; d.x = Math.random() * W; }
        if (d.x < -10) d.x = W + 10;
        if (d.x > W + 10) d.x = -10;
      }
    };
    const drawDust = (now, alpha = 1) => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const d of dust) {
        const tw = (Math.sin(now * 0.001 * d.twSpeed + d.twPhase) + 1) * 0.5;
        const a = (0.20 + tw * 0.55) * alpha;
        ctx.globalAlpha = a;
        ctx.fillStyle = d.warm ? "rgba(255,200,150,1)" : "rgba(160,230,255,1)";
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // ===== Projection beams from bottom-center =====
    const drawProjectionBeams = (now, alpha) => {
      if (alpha <= 0) return;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const ox = W / 2;
      const oy = H + nameFs * 0.6;
      // Source glow at projector point
      const srcGrad = ctx.createRadialGradient(ox, oy, 0, ox, oy, nameFs * 1.5);
      srcGrad.addColorStop(0, `rgba(180,235,255,${0.5 * alpha})`);
      srcGrad.addColorStop(1, "rgba(140,220,255,0)");
      ctx.fillStyle = srcGrad;
      ctx.fillRect(0, oy - nameFs * 1.5, W, nameFs * 3);
      // Fan of faint beam lines
      const beams = 7;
      const half = (W * 0.18);
      for (let i = 0; i < beams; i++) {
        const targetX = ox - half + (half * 2) * (i / (beams - 1));
        const pulse = 0.4 + 0.6 * (Math.sin(now * 0.001 * 1.3 + i * 0.7) * 0.5 + 0.5);
        const a = 0.08 * alpha * pulse;
        const grad = ctx.createLinearGradient(ox, oy, targetX, cy);
        grad.addColorStop(0, `rgba(180,235,255,${a * 1.5})`);
        grad.addColorStop(0.7, `rgba(140,220,255,${a})`);
        grad.addColorStop(1, "rgba(140,220,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(ox, oy);
        ctx.lineTo(targetX, cy - nameFs * 0.1);
        ctx.stroke();
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // 3D wobble — letters tilt/sway like a floating projection
    const applyHoloWobble = (now, intensity) => {
      const t = now * 0.001;
      const skewX = Math.sin(t * 0.8) * 0.025 * intensity;
      const skewY = Math.cos(t * 0.6) * 0.012 * intensity;
      ctx.translate(W / 2, cy);
      ctx.transform(1, skewY, skewX, 1, 0, 0);
      ctx.translate(-W / 2, -cy);
    };

    // Glow halo render
    const drawGlow = (alpha) => {
      if (alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(letterGlow, 0, 0, W, H);
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // ===== Helpers =====
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

    // Chromatic-aberration letter render with clip rect [yTop, yBottom]
    const drawChroma = (shift, yTop, yBottom, alpha = 1) => {
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, yTop, W, yBottom - yTop);
      ctx.clip();
      ctx.globalAlpha = alpha;
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(letterR, -shift, 0, W, H);
      ctx.drawImage(letterG, 0, 0, W, H);
      ctx.drawImage(letterB, shift, 0, W, H);
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    const drawFinal = (alpha) => {
      if (alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.drawImage(letterFinal, 0, 0, W, H);
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    const drawSweepScanline = (y, alpha, intensity = 1) => {
      if (alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      // Outer glow band (cyan)
      const bandH = nameFs * (0.85 + intensity * 0.3);
      const grad = ctx.createLinearGradient(0, y - bandH, 0, y + bandH);
      grad.addColorStop(0,   "rgba(120,210,255,0)");
      grad.addColorStop(0.4, "rgba(140,220,255," + (0.18 * intensity) + ")");
      grad.addColorStop(0.5, "rgba(200,240,255," + (0.55 * intensity) + ")");
      grad.addColorStop(0.6, "rgba(140,220,255," + (0.18 * intensity) + ")");
      grad.addColorStop(1,   "rgba(120,210,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, y - bandH, W, bandH * 2);
      // Inner bright core
      const coreH = nameFs * 0.08;
      const grad2 = ctx.createLinearGradient(0, y - coreH, 0, y + coreH);
      grad2.addColorStop(0, "rgba(220,250,255,0)");
      grad2.addColorStop(0.5, "rgba(255,255,255,1)");
      grad2.addColorStop(1, "rgba(220,250,255,0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, y - coreH, W, coreH * 2);
      // Sharp 1px center line
      ctx.fillStyle = "rgba(240,253,255,0.95)";
      ctx.fillRect(0, y - 0.5, W, 1);
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // Vertical falloff brightness band at scanline — letters pop where line crosses
    const drawScanBoost = (y, intensity) => {
      if (intensity <= 0) return;
      ctx.save();
      const bandH = nameFs * 0.6;
      ctx.globalCompositeOperation = "lighter";
      ctx.beginPath();
      ctx.rect(0, y - bandH, W, bandH * 2);
      ctx.clip();
      ctx.globalAlpha = 0.35 * intensity;
      ctx.drawImage(letterFinal, 0, 0, W, H);
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    const drawCRTOverlay = (alpha) => {
      if (alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.drawImage(scanlineOverlay, 0, 0, W, H);
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // Random horizontal tear during glitch (shifts a slice)
    const tearSlices = []; // {y, h, dx, age}
    const TEAR_LIFE = 0.18;
    const spawnTear = () => {
      const y = Math.floor(Math.random() * H);
      const h = Math.floor(nameFs * (0.03 + Math.random() * 0.12));
      const dx = (Math.random() - 0.5) * nameFs * 0.7;
      tearSlices.push({ y, h, dx, age: 0 });
    };
    const drawTears = (dt) => {
      for (let i = tearSlices.length - 1; i >= 0; i--) {
        const t = tearSlices[i];
        t.age += dt;
        if (t.age > TEAR_LIFE) { tearSlices.splice(i, 1); continue; }
        // Re-draw a horizontal slice of letterFinal at offset
        ctx.save();
        ctx.globalAlpha = 0.85 * (1 - t.age / TEAR_LIFE);
        // Slice from letterFinal (well, source rectangle in dpr coords)
        ctx.drawImage(
          letterFinal,
          0, t.y * dpr, W * dpr, t.h * dpr,
          t.dx, t.y, W, t.h
        );
        ctx.restore();
        ctx.globalAlpha = 1;
      }
    };

    // ===== Main loop =====
    const START = performance.now();
    let raf;
    let finished = false;
    let bgTriggered = false;
    let lastTime = START;
    let lastTearSpawn = 0;

    const draw = (now) => {
      const t = (now - START) / 1000;
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);

      // Ambient projection beams (alpha varies by phase)
      let beamAlpha = 0;
      if (t < T_STABILIZE_END) beamAlpha = clamp(t / 0.6, 0, 1) * 1.0;
      else if (t < T_HOLD_END) beamAlpha = lerp(1, 0.55, (t - T_STABILIZE_END) / (T_HOLD_END - T_STABILIZE_END));
      else if (t < T_GLITCH_END) beamAlpha = lerp(0.55, 0.3, (t - T_HOLD_END) / (T_GLITCH_END - T_HOLD_END));
      else beamAlpha = lerp(0.3, 0, (t - T_GLITCH_END) / (T_LOST_END - T_GLITCH_END));
      drawProjectionBeams(now, beamAlpha);

      // Dust update + draw
      updateDust(dt);
      let dustAlpha = 0;
      if (t < T_HOLD_END) dustAlpha = clamp(t / 0.8, 0, 1);
      else if (t < T_LOST_END) dustAlpha = Math.max(0, 1 - (t - T_HOLD_END) / (T_LOST_END - T_HOLD_END));
      drawDust(now, dustAlpha);

      // Divider + tagline (visible during HOLD + early glitch)
      let divA = 0, tagA = 0;
      if (t < T_HOLD_END) {
        divA = clamp((t - T_STABILIZE_END) / 0.4, 0, 1);
        tagA = clamp((t - T_STABILIZE_END - 0.15) / 0.45, 0, 1);
      } else if (t < T_GLITCH_END) {
        const flicker = 0.6 + Math.random() * 0.4;
        divA = Math.max(0, 1 - (t - T_HOLD_END) / (T_GLITCH_END - T_HOLD_END));
        divA *= flicker;
        tagA = divA * 0.9;
      }
      drawDivider(divA);
      drawTagline(tagA);

      const yTop = cy - nameFs * 0.75;
      const yBot = cy + nameFs * 0.75;

      if (t < T_SWEEP1_END) {
        // SWEEP 1 UP — initial reveal (clip below scanline)
        const p = t / T_SWEEP1_END;
        const e = easeOutCubic(p);
        const scanY = lerp(yBot, yTop, e);
        const shift = lerp(10, 5, p);
        drawChroma(shift, scanY, H);
        const pulse = 0.85 + Math.sin(t * 28) * 0.15;
        drawSweepScanline(scanY, pulse, 1.0);
        drawScanBoost(scanY, 0.6);
      } else if (t < T_SWEEP2_END) {
        // SWEEP 2 DOWN — letters fully revealed (chroma), scanline passes over
        const p = (t - T_SWEEP1_END) / (T_SWEEP2_END - T_SWEEP1_END);
        const e = easeOutCubic(p);
        const scanY = lerp(yTop, yBot, e);
        const shift = lerp(5, 4, p);
        drawChroma(shift, 0, H);
        const pulse = 0.9 + Math.sin(t * 32) * 0.1;
        drawSweepScanline(scanY, pulse, 0.85);
        drawScanBoost(scanY, 0.55);
      } else if (t < T_SWEEP3_END) {
        // SWEEP 3 UP — final pass, chroma shrinking toward 0
        const p = (t - T_SWEEP2_END) / (T_SWEEP3_END - T_SWEEP2_END);
        const e = easeOutCubic(p);
        const scanY = lerp(yBot, yTop, e);
        const shift = lerp(4, 1, p);
        drawChroma(shift, 0, H, 1);
        // Final color bleeding in
        drawFinal(p * 0.4);
        const pulse = 0.85 + Math.sin(t * 30) * 0.15;
        drawSweepScanline(scanY, pulse * (1 - p * 0.2), 0.7);
        drawScanBoost(scanY, 0.45);
      } else if (t < T_STABILIZE_END) {
        // STABILIZE — chroma vanishes, final crisp text + scanline drifts off top
        const p = (t - T_SWEEP3_END) / (T_STABILIZE_END - T_SWEEP3_END);
        const shift = lerp(1, 0, p);
        drawChroma(shift, 0, H, 1 - p);
        drawFinal(lerp(0.4, 1, easeOutCubic(p)));
        // Scanline drifts off top
        const scanY = lerp(yTop, yTop - nameFs * 0.6, p);
        drawSweepScanline(scanY, (1 - p) * 0.8, 0.6);
      } else if (t < T_HOLD_END) {
        // HOLD: glow halo + wobble + occasional micro-flicker
        const hp = (t - T_STABILIZE_END);
        const microFlicker = Math.sin(hp * 1.7) > 0.97 ? 0.92 : 1.0;
        ctx.save();
        applyHoloWobble(now, 0.6);
        drawGlow(0.35 * microFlicker);
        drawFinal(microFlicker);
        ctx.restore();
      } else if (t < T_GLITCH_END) {
        // GLITCH: chromatic returns, flicker, tears
        const p = (t - T_HOLD_END) / (T_GLITCH_END - T_HOLD_END);
        const shift = lerp(0, 14, p);
        // Random flicker in alpha
        const flicker = 0.7 + Math.random() * 0.3;
        drawFinal(flicker * (1 - p * 0.5));
        // Chromatic overlay (additive)
        drawChroma(shift, 0, H, p * 0.7);
        // Spawn tears
        if (now - lastTearSpawn > 60 + Math.random() * 80) {
          spawnTear();
          if (Math.random() < 0.4) spawnTear();
          lastTearSpawn = now;
        }
        drawTears(dt);
      } else if (t < T_LOST_END) {
        // SIGNAL LOST: rapid flicker, heavy chromatic, fade
        const p = (t - T_GLITCH_END) / (T_LOST_END - T_GLITCH_END);
        const flicker = Math.random() < 0.3 ? 0 : 0.7;
        const shift = 14 + Math.random() * 18;
        const alpha = (1 - p) * flicker;
        drawChroma(shift, 0, H, alpha);
        if (now - lastTearSpawn > 30) {
          spawnTear();
          spawnTear();
          lastTearSpawn = now;
        }
        drawTears(dt);
      }

      // CRT scanline overlay (always subtle during entry/HOLD/glitch)
      let crtAlpha = 0;
      if (t < T_HOLD_END) crtAlpha = 0.65;
      else if (t < T_GLITCH_END) crtAlpha = lerp(0.65, 0.85, (t - T_HOLD_END) / (T_GLITCH_END - T_HOLD_END));
      else if (t < T_LOST_END) crtAlpha = lerp(0.85, 0.2, (t - T_GLITCH_END) / (T_LOST_END - T_GLITCH_END));
      drawCRTOverlay(crtAlpha);

      // Bg flips transparent late in signal-lost
      if (!bgTriggered && t > T_GLITCH_END + 0.2) {
        bgTriggered = true;
        setBgOff(true);
      }

      if (t >= T_LOST_END + 0.3) {
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

export default HologramCurtain;
