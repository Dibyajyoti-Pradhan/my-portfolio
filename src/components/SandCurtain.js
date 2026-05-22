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

// Restrained warm sand palette (cream → tan → ochre). Period: warm orange tones.
const SAND_TONES = [
  [240, 228, 200],
  [225, 205, 170],
  [205, 180, 140],
  [180, 152, 108],
];
const PERIOD_TONES = [
  [255, 178, 88],
  [248, 150, 56],
];

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, p) => a + (b - a) * p;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeInCubic = (t) => t * t * t;

const SandCurtain = ({ onFinish }) => {
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
    let cursor = startX;
    for (let i = 0; i < fullName.length; i++) {
      const w = ctx.measureText(fullName[i]).width;
      targetX.push(cursor + w / 2);
      cursor += w;
    }

    // Pre-render letterCanvas (final crisp state for polish + HOLD)
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

    // ===== Sample target slots =====
    const data = letterCanvas.getContext("2d").getImageData(0, 0, W * dpr, H * dpr).data;
    const STRIDE = Math.max(3, Math.round(nameFs * 0.045));
    const PERIOD_STRIDE = Math.max(2, Math.floor(STRIDE * 0.55));
    const Wpx = Math.floor(W * dpr);
    const Hpx = Math.floor(H * dpr);
    const targets = [];
    const sampleAt = (x, y) => {
      const px = Math.floor(x * dpr);
      const py = Math.floor(y * dpr);
      if (px >= Wpx || py >= Hpx) return null;
      const idx = (py * Wpx + px) * 4;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2], a = data[idx + 3];
      if (a <= 120) return null;
      const isPeriod = r > 200 && g < 200 && b < 100;
      return { x, y, isPeriod };
    };
    for (let y = 0; y < H; y += STRIDE) {
      for (let x = 0; x < W; x += STRIDE) {
        const s = sampleAt(x, y);
        if (s) targets.push(s);
      }
    }
    // Extra-dense pass over period area so the orange dot reads weighty
    const periodCx = targetX[fullName.length - 1];
    const periodHalf = nameFs * 0.25;
    for (let y = cy - periodHalf; y <= cy + periodHalf; y += PERIOD_STRIDE) {
      for (let x = periodCx - periodHalf; x <= periodCx + periodHalf; x += PERIOD_STRIDE) {
        const s = sampleAt(x, y);
        if (s && s.isPeriod) targets.push(s);
      }
    }
    // Sort left → right — sand visibly fills from leading edge of wind
    targets.sort((a, b) => a.x - b.x);

    // ===== Timing =====
    const T_FLOW_END = 3.0;
    const T_POLISH_END = T_FLOW_END + 0.5;
    const T_HOLD_END = T_POLISH_END + 1.4;
    const T_EXIT_END = T_HOLD_END + 1.8;

    // ===== Grains =====
    const minX = targets.length ? targets[0].x : 0;
    const maxX = targets.length ? targets[targets.length - 1].x : W;
    const xSpan = Math.max(1, maxX - minX);
    const FLOW_FILL = T_FLOW_END * 0.78; // last grain spawns at 78% of flow

    const grains = targets.map((t) => {
      const rel = (t.x - minX) / xSpan; // 0..1
      const spawnT = rel * FLOW_FILL + (Math.random() - 0.5) * 0.18;
      const palette = t.isPeriod ? PERIOD_TONES : SAND_TONES;
      const tone = palette[(Math.random() * palette.length) | 0];
      // tiny per-grain tonal jitter
      const tj = [
        clamp((tone[0] + ((Math.random() - 0.5) * 14)) | 0, 0, 255),
        clamp((tone[1] + ((Math.random() - 0.5) * 14)) | 0, 0, 255),
        clamp((tone[2] + ((Math.random() - 0.5) * 14)) | 0, 0, 255),
      ];
      const spawnY = cy + (Math.random() - 0.5) * H * 0.35;
      return {
        target: t,
        spawnT: Math.max(0, spawnT),
        flightDur: 0.55 + Math.random() * 0.25,
        spawnX: -8 - Math.random() * 40,
        spawnY,
        size: t.isPeriod ? 1.1 + Math.random() * 1.0 : 0.9 + Math.random() * 1.1,
        tone: tj,
        settled: false,
        x: 0, y: 0,
        vx: 0, vy: 0,
        releaseDelay: Math.random() * 0.5,
      };
    });

    // ===== Ambient drift particles (always-on quiet atmosphere) =====
    const ambient = [];
    const AMB_N = Math.round((W * H) / 35000);
    for (let i = 0; i < AMB_N; i++) {
      const tone = SAND_TONES[(Math.random() * SAND_TONES.length) | 0];
      ambient.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: 14 + Math.random() * 28,
        size: 0.5 + Math.random() * 1.0,
        tone,
        alpha: 0.10 + Math.random() * 0.20,
      });
    }

    // ===== Wind streaks (thin horizontal drift) =====
    const streaks = [];
    for (let i = 0; i < 14; i++) {
      streaks.push({
        x: Math.random() * W,
        y: Math.random() * H,
        len: nameFs * (1.2 + Math.random() * 2.4),
        vx: 60 + Math.random() * 120,
        alpha: 0.03 + Math.random() * 0.05,
        layer: Math.random() < 0.35 ? 1 : 0,
      });
    }

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

    const updateAmbient = (dt) => {
      for (const a of ambient) {
        a.x += a.vx * dt;
        if (a.x > W + 6) { a.x = -6; a.y = Math.random() * H; }
      }
    };
    const drawAmbient = (alphaMul) => {
      for (const a of ambient) {
        const al = a.alpha * alphaMul;
        if (al <= 0.005) continue;
        const [r, g, b] = a.tone;
        ctx.fillStyle = `rgba(${r},${g},${b},${al})`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const updateStreaks = (dt) => {
      for (const s of streaks) {
        s.x += s.vx * dt;
        if (s.x > W + s.len) {
          s.x = -s.len;
          s.y = Math.random() * H;
          s.alpha = 0.03 + Math.random() * 0.05;
        }
      }
    };
    const drawStreaks = (alphaMul) => {
      ctx.lineCap = "round";
      for (const s of streaks) {
        const al = s.alpha * alphaMul;
        if (al <= 0.005) continue;
        const tone = s.layer === 1 ? "245,232,205" : "215,195,165";
        ctx.strokeStyle = `rgba(${tone},${al})`;
        ctx.lineWidth = s.layer === 1 ? 0.5 : 0.7;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.len, s.y);
        ctx.stroke();
      }
    };

    const drawGrain = (g, x, y, alpha, stretch) => {
      if (alpha <= 0.01) return;
      const [r, gn, b] = g.tone;
      ctx.fillStyle = `rgba(${r},${gn},${b},${alpha})`;
      if (stretch > 0.05) {
        ctx.beginPath();
        ctx.ellipse(x, y, g.size * (1 + stretch * 1.4), g.size * (1 - stretch * 0.25), 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(x, y, g.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Per-grain pose during FLOW
    const grainFlightPose = (g, t) => {
      const local = t - g.spawnT;
      if (local < 0) return null;
      if (g.settled) return { x: g.target.x, y: g.target.y, alpha: 1, stretch: 0 };
      const p = clamp(local / g.flightDur, 0, 1);
      const e = easeOutCubic(p);
      const x = lerp(g.spawnX, g.target.x, e);
      const arc = Math.sin(p * Math.PI) * nameFs * 0.08;
      const y = lerp(g.spawnY, g.target.y, e) - arc;
      const alpha = clamp(p * 4, 0, 1);
      const stretch = (1 - p) * 0.55;
      if (p >= 1) {
        g.settled = true;
        return { x: g.target.x, y: g.target.y, alpha: 1, stretch: 0 };
      }
      return { x, y, alpha, stretch };
    };

    // ===== Main loop =====
    const START = performance.now();
    let raf;
    let finished = false;
    let bgTriggered = false;
    let lastTime = START;
    let exitInit = false;

    const draw = (now) => {
      const t = (now - START) / 1000;
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);

      // Divider + tagline alpha
      let divA = 0, tagA = 0;
      if (t < T_HOLD_END) {
        divA = clamp((t - T_POLISH_END) / 0.4, 0, 1);
        tagA = clamp((t - T_POLISH_END - 0.15) / 0.45, 0, 1);
      } else {
        const ep = (t - T_HOLD_END) / (T_EXIT_END - T_HOLD_END);
        divA = Math.max(0, 1 - ep * 1.4);
        tagA = Math.max(0, 1 - ep * 1.6);
      }

      // Ambient + wind always present, intensity varies by phase
      // During exit: wind picks up before tapering off
      let windBoost = 1;
      if (t > T_HOLD_END) {
        const ep = (t - T_HOLD_END) / (T_EXIT_END - T_HOLD_END);
        windBoost = ep < 0.55 ? 1 + ep * 2.5 : Math.max(0, (1 + 0.55 * 2.5) * (1 - (ep - 0.55) / 0.45));
      }
      // Advance streaks/ambient faster when wind picks up
      updateAmbient(dt * (t > T_HOLD_END ? 1 + windBoost * 0.8 : 1));
      updateStreaks(dt * (t > T_HOLD_END ? 1 + windBoost * 1.2 : 1));
      let bgMul = clamp(t / 0.4, 0, 1);
      bgMul *= clamp(windBoost, 0, 3);
      drawStreaks(bgMul);
      drawAmbient(bgMul);

      drawDivider(divA);
      drawTagline(tagA);

      if (t < T_POLISH_END) {
        // FLOW: grains travel from off-left, accumulate L→R into letter positions
        for (const g of grains) {
          const pose = grainFlightPose(g, t);
          if (!pose) continue;
          drawGrain(g, pose.x, pose.y, pose.alpha, pose.stretch);
        }
        // Polish — crisp letterCanvas eases in over sand
        if (t > T_FLOW_END) {
          const p = clamp((t - T_FLOW_END) / (T_POLISH_END - T_FLOW_END), 0, 1);
          ctx.save();
          ctx.globalAlpha = easeOutCubic(p);
          ctx.drawImage(letterCanvas, 0, 0, W, H);
          ctx.restore();
        }
      } else if (t < T_HOLD_END) {
        // HOLD: pristine letters, quiet ambient
        ctx.drawImage(letterCanvas, 0, 0, W, H);
      } else {
        // EXIT: wind wave sweeps L→R, eroding letters and lifting grains in its path.
        const exitLocal = t - T_HOLD_END;
        const exitDur = T_EXIT_END - T_HOLD_END;
        const ep = clamp(exitLocal / exitDur, 0, 1);
        const waveSpan = W + nameFs * 3;
        const waveX = -nameFs * 1.5 + waveSpan * easeInCubic(ep);

        if (!exitInit) {
          for (const g of grains) {
            g.x = g.target.x;
            g.y = g.target.y;
            g.vx = 0; g.vy = 0;
            g.released = false;
            g.releaseAt = 0;
          }
          exitInit = true;
        }

        // letterCanvas — clipped to RIGHT of wind wave. As wave sweeps right, letters erode L→R.
        if (waveX < W) {
          ctx.save();
          ctx.beginPath();
          ctx.rect(waveX, 0, W - waveX + 10, H);
          ctx.clip();
          ctx.drawImage(letterCanvas, 0, 0, W, H);
          ctx.restore();
        }

        // Per-grain: shiver pre-release, then sweep right with wind on release
        for (const g of grains) {
          const isReleased = g.released || waveX >= g.target.x - nameFs * 0.08;
          if (!isReleased) {
            // Anticipation shiver — sand vibrates as wind approaches
            const dist = g.target.x - waveX;
            const proximity = Math.max(0, 1 - dist / (nameFs * 1.5));
            const shakeAmp = 0.6 + proximity * 1.8;
            const sx = g.target.x + Math.sin(exitLocal * 36 + g.target.x * 0.07) * shakeAmp;
            const sy = g.target.y + Math.cos(exitLocal * 41 + g.target.y * 0.07) * shakeAmp * 0.5;
            drawGrain(g, sx, sy, 1, 0);
            continue;
          }
          if (!g.released) {
            g.released = true;
            g.releaseAt = exitLocal;
            // Wind lifts sand UP and away — no fall, no gravity. Drift is buoyant.
            g.vx = 320 + Math.random() * 260;
            g.vy = -90 - Math.random() * 130;          // strong upward lift
            g.swirlPhase = Math.random() * Math.PI * 2;
            g.swirlRate = 3 + Math.random() * 3;
          }
          // Drag: both axes lose energy → grains float and dissipate
          g.vx *= 1 - 0.9 * dt;
          g.vy *= 1 - 0.6 * dt;
          g.x += g.vx * dt;
          g.y += g.vy * dt;
          // Turbulence: subtle sinusoidal jitter on both axes (air swirl)
          const swirl = Math.sin(exitLocal * g.swirlRate + g.swirlPhase);
          g.x += swirl * 0.4;
          g.y += Math.cos(exitLocal * g.swirlRate * 0.7 + g.swirlPhase) * 0.3;
          const age = exitLocal - g.releaseAt;
          const fade = Math.max(0, 1 - age / 1.0);
          const stretch = clamp(Math.hypot(g.vx, g.vy) / 480, 0, 0.85);
          drawGrain(g, g.x, g.y, fade, stretch);
        }

        // Wind gust streaks during exit — extra burst near wave position
        const gustAlpha = (1 - ep * 0.5) * 0.35;
        if (gustAlpha > 0.02) {
          ctx.save();
          ctx.lineCap = "round";
          ctx.strokeStyle = `rgba(225,210,180,${gustAlpha})`;
          ctx.lineWidth = 0.8;
          const gustCount = 18;
          for (let i = 0; i < gustCount; i++) {
            const gy = (i / gustCount) * H + Math.sin(exitLocal * 6 + i) * 8;
            const gxBase = waveX - 40 + (Math.sin(exitLocal * 9 + i * 1.7) * nameFs * 2);
            const glen = nameFs * (1.5 + Math.random() * 1.5);
            ctx.beginPath();
            ctx.moveTo(gxBase - glen, gy);
            ctx.lineTo(gxBase, gy);
            ctx.stroke();
          }
          ctx.restore();
        }
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

export default SandCurtain;
