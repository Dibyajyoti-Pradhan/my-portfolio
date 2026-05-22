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

const GravityWellCurtain = ({ onFinish }) => {
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

    // Pre-render letterCanvas
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

    // Sample target positions
    const data = letterCanvas.getContext("2d").getImageData(0, 0, W * dpr, H * dpr).data;
    const STRIDE = Math.max(3, Math.round(nameFs * 0.05));
    const Wpx = Math.floor(W * dpr);
    const Hpx = Math.floor(H * dpr);
    const targets = [];
    for (let y = 0; y < H; y += STRIDE) {
      for (let x = 0; x < W; x += STRIDE) {
        const px = Math.floor(x * dpr);
        const py = Math.floor(y * dpr);
        if (px >= Wpx || py >= Hpx) continue;
        const idx = (py * Wpx + px) * 4;
        const r = data[idx], g = data[idx + 1], b = data[idx + 2], a = data[idx + 3];
        if (a > 120) {
          const isPeriod = r > 200 && g < 200 && b < 100;
          targets.push({ x, y, isPeriod });
        }
      }
    }

    // Central attractor at letter row, screen center
    const cxA = W / 2;
    const cyA = cy;
    // Tuned for ~2 orbits at r=200 over 2.5s
    const GM = nameFs * nameFs * 2200; // scales with viewport

    // ===== Particles =====
    // Each particle pre-assigned a target and an orbital state.
    const particles = targets.map((t) => {
      const r = nameFs * 1.2 + Math.random() * Math.min(W, H) * 0.4;
      const angle = Math.random() * Math.PI * 2;
      const px = cxA + Math.cos(angle) * r;
      const py = cyA + Math.sin(angle) * r;
      const vCirc = Math.sqrt(GM / r);
      // 30% chance retrograde direction for visual variety
      const dir = Math.random() < 0.30 ? -1 : 1;
      // Eccentricity factor 0.7–1.25 gives ellipses
      const ecc = 0.70 + Math.random() * 0.55;
      const v = vCirc * ecc;
      const vx = -Math.sin(angle) * v * dir;
      const vy = Math.cos(angle) * v * dir;
      return {
        x: px, y: py,
        vx, vy,
        targetX: t.x, targetY: t.y,
        isPeriod: t.isPeriod,
        size: 0.9 + Math.random() * 0.9,
        brightness: 0.55 + Math.random() * 0.45,
        lockX: 0, lockY: 0, locked: false,
      };
    });

    // ===== Timing =====
    const T_ORBIT_END = 2.6;
    const T_FREEZE_END = T_ORBIT_END + 0.55;
    const T_POLISH_END = T_FREEZE_END + 0.30;
    const T_HOLD_END = T_POLISH_END + 1.5;
    const T_EXIT_END = T_HOLD_END + 1.6;

    // Central well visual
    const drawWell = (alpha) => {
      if (alpha <= 0.01) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      // Outer glow
      const og = ctx.createRadialGradient(cxA, cyA, 0, cxA, cyA, nameFs * 1.0);
      og.addColorStop(0, "rgba(255,255,255,0.30)");
      og.addColorStop(0.4, "rgba(255,255,255,0.10)");
      og.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = og;
      ctx.fillRect(cxA - nameFs, cyA - nameFs, nameFs * 2, nameFs * 2);
      // Bright core
      const ig = ctx.createRadialGradient(cxA, cyA, 0, cxA, cyA, nameFs * 0.18);
      ig.addColorStop(0, "rgba(255,255,255,1)");
      ig.addColorStop(0.5, "rgba(255,255,255,0.4)");
      ig.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = ig;
      ctx.fillRect(cxA - nameFs * 0.18, cyA - nameFs * 0.18, nameFs * 0.36, nameFs * 0.36);
      // Sharp pixel core
      ctx.fillStyle = "rgba(255,255,255,1)";
      ctx.beginPath();
      ctx.arc(cxA, cyA, 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // Collapse flash at freeze moment
    const drawCollapseFlash = (p) => {
      if (p <= 0 || p >= 1) return;
      // Bell-shape: bright spike at p=0.5
      const a = Math.sin(p * Math.PI) * 0.85;
      const r = nameFs * (0.3 + p * 3);
      ctx.save();
      const g = ctx.createRadialGradient(cxA, cyA, 0, cxA, cyA, r);
      g.addColorStop(0, `rgba(255,255,255,${a})`);
      g.addColorStop(0.4, `rgba(255,255,255,${a * 0.4})`);
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(cxA - r, cyA - r, r * 2, r * 2);
      ctx.restore();
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

      // Trail effect during orbits (light black overlay each frame)
      // Clean clear during freeze/HOLD/early exit; trail back on for fly-off
      const trailMode = t < T_ORBIT_END || (t > T_HOLD_END);
      if (trailMode) {
        ctx.fillStyle = "rgba(0,0,0,0.18)";
        ctx.fillRect(0, 0, W, H);
      } else {
        ctx.clearRect(0, 0, W, H);
      }

      // Divider + tagline
      let divA = 0, tagA = 0;
      if (t < T_HOLD_END) {
        divA = clamp((t - T_POLISH_END) / 0.4, 0, 1);
        tagA = clamp((t - T_POLISH_END - 0.15) / 0.45, 0, 1);
      } else {
        const ep = (t - T_HOLD_END) / (T_EXIT_END - T_HOLD_END);
        divA = Math.max(0, 1 - ep * 1.4);
        tagA = Math.max(0, 1 - ep * 1.6);
      }
      drawDivider(divA);
      drawTagline(tagA);

      if (t < T_ORBIT_END) {
        // ORBIT: Newtonian gravity toward central attractor
        for (const p of particles) {
          const dx = p.x - cxA;
          const dy = p.y - cyA;
          const r2 = dx * dx + dy * dy + 64; // softening prevents singularity
          const r = Math.sqrt(r2);
          const Fmag = GM / (r2 * r); // GM/r³ → multiply by (dx,dy) for force vector
          p.vx -= Fmag * dx * dt;
          p.vy -= Fmag * dy * dt;
          p.x += p.vx * dt;
          p.y += p.vy * dt;
        }
        drawWell(0.6 + 0.4 * easeInCubic(t / T_ORBIT_END));
      } else if (t < T_FREEZE_END) {
        // FREEZE: snap from orbital position to letter target
        const fp = (t - T_ORBIT_END) / (T_FREEZE_END - T_ORBIT_END);
        const e = easeOutCubic(fp);
        for (const p of particles) {
          if (!p.locked) {
            p.lockX = p.x;
            p.lockY = p.y;
            p.locked = true;
          }
          p.x = lerp(p.lockX, p.targetX, e);
          p.y = lerp(p.lockY, p.targetY, e);
        }
        // Collapse flash bell
        drawCollapseFlash(fp);
        drawWell(1 - fp);
      } else if (t < T_HOLD_END) {
        // HOLD: particles at target, polish letterCanvas fades in over polish window
        for (const p of particles) {
          p.x = p.targetX;
          p.y = p.targetY;
        }
        const polishP = clamp((t - T_FREEZE_END) / (T_POLISH_END - T_FREEZE_END), 0, 1);
        // Particles fade during polish so letterCanvas takes over
        const partAlpha = 1 - easeOutCubic(polishP);
        if (partAlpha > 0.01) {
          for (const p of particles) {
            const color = p.isPeriod ? "255,170,80" : "255,255,255";
            ctx.fillStyle = `rgba(${color},${p.brightness * partAlpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        if (polishP > 0) {
          ctx.save();
          ctx.globalAlpha = easeOutCubic(polishP);
          ctx.drawImage(letterCanvas, 0, 0, W, H);
          ctx.restore();
        }
        // Return so we skip the particle draw below
        // (already drawn)
        if (!bgTriggered && t >= T_EXIT_END) {
          bgTriggered = true;
          setBgOff(true);
        }
        raf = requestAnimationFrame(draw);
        return;
      } else {
        // EXIT: gravity reverses — particles slingshot outward
        const exitLocal = t - T_HOLD_END;
        const exitDur = T_EXIT_END - T_HOLD_END;
        if (!exitInit) {
          // Initial outward kick from current position
          for (const p of particles) {
            p.x = p.targetX;
            p.y = p.targetY;
            const dx = p.x - cxA;
            const dy = p.y - cyA;
            const r = Math.sqrt(dx * dx + dy * dy) + 1;
            const ux = dx / r, uy = dy / r;
            const kick = 180 + Math.random() * 220;
            p.vx = ux * kick + (Math.random() - 0.5) * 50;
            p.vy = uy * kick + (Math.random() - 0.5) * 50;
          }
          exitInit = true;
        }
        // letterCanvas fades out
        const lcFade = clamp(exitLocal / 0.30, 0, 1);
        if (lcFade < 1) {
          ctx.save();
          ctx.globalAlpha = 1 - lcFade;
          ctx.drawImage(letterCanvas, 0, 0, W, H);
          ctx.restore();
        }
        // Anti-gravity physics
        const GM_OUT = GM * 1.4;
        const fadeMul = Math.max(0, 1 - exitLocal / exitDur);
        for (const p of particles) {
          const dx = p.x - cxA;
          const dy = p.y - cyA;
          const r2 = dx * dx + dy * dy + 64;
          const r = Math.sqrt(r2);
          const Fmag = GM_OUT / (r2 * r);
          p.vx += Fmag * dx * dt;
          p.vy += Fmag * dy * dt;
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          const color = p.isPeriod ? "255,170,80" : "255,255,255";
          ctx.fillStyle = `rgba(${color},${p.brightness * fadeMul})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        // skip generic particle draw at end
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
        return;
      }

      // Generic particle render (ORBIT + FREEZE phases reach here)
      for (const p of particles) {
        const color = p.isPeriod ? "255,170,80" : "255,255,255";
        ctx.fillStyle = `rgba(${color},${p.brightness})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
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

export default GravityWellCurtain;
