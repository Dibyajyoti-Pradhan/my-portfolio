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

const MagneticCurtain = ({ onFinish }) => {
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

    // Pre-render letterCanvas + blurred glow halo
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

    const letterGlow = document.createElement("canvas");
    letterGlow.width = W * dpr;
    letterGlow.height = H * dpr;
    {
      const gctx = letterGlow.getContext("2d");
      gctx.scale(dpr, dpr);
      try { gctx.filter = `blur(${Math.round(nameFs * 0.14)}px)`; } catch (_) {}
      gctx.drawImage(letterCanvas, 0, 0, W, H);
      try { gctx.filter = "none"; } catch (_) {}
    }

    // Sample target pixels (every STRIDE px, where alpha > threshold)
    const sampleCtx = letterCanvas.getContext("2d");
    const data = sampleCtx.getImageData(0, 0, W * dpr, H * dpr).data;
    const STRIDE = Math.max(3, Math.round(nameFs * 0.035));
    const PERIOD_STRIDE = Math.max(1, Math.floor(STRIDE * 0.55)); // denser sampling for tiny period dot
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
      return { x, y, color: isPeriod ? "rgb(255,140,40)" : "rgb(235,238,245)", isPeriod };
    };
    for (let y = 0; y < H; y += STRIDE) {
      for (let x = 0; x < W; x += STRIDE) {
        const s = sampleAt(x, y);
        if (s) targets.push(s);
      }
    }
    // Extra-dense pass over period area (rightmost target letter)
    const periodCx = targetX[fullName.length - 1];
    const periodHalf = nameFs * 0.25;
    for (let y = cy - periodHalf; y <= cy + periodHalf; y += PERIOD_STRIDE) {
      for (let x = periodCx - periodHalf; x <= periodCx + periodHalf; x += PERIOD_STRIDE) {
        const s = sampleAt(x, y);
        if (s && s.isPeriod) targets.push(s);
      }
    }

    // ===== Magnet motion =====
    const T_MAGNET_DUR = 2.4;
    const T_SETTLE_END = T_MAGNET_DUR + 0.22;
    const T_POLISH_END = T_SETTLE_END + 0.28;
    const T_HOLD_END = T_POLISH_END + 1.5;
    const T_EXIT_END = T_HOLD_END + 1.8;
    // Magnet enters from further off-left for more dramatic arrival
    const MAGNET_FROM = -nameFs * 2.2;
    const MAGNET_TO = W + nameFs * 1.4;
    const magnetXAt = (t) => lerp(MAGNET_FROM, MAGNET_TO, easeInOutCubic(clamp(t / T_MAGNET_DUR, 0, 1)));

    // ===== Filings (spring-physics) =====
    // Tonal jitter — apply slight HSL offset per filing for organic palette
    const tintFiling = (base) => {
      // 3-way tonal split: cool / neutral / warm
      const k = Math.random();
      if (base === "rgb(255,140,40)") return base; // keep period orange uniform
      if (k < 0.30) return "rgb(220,228,240)"; // cooler
      if (k < 0.60) return "rgb(235,238,245)"; // neutral
      return "rgb(245,245,238)"; // slightly warmer
    };
    const filings = targets.map((t) => {
      const lenVar = 0.06 + Math.random() * 0.06; // bigger spread
      const thickVar = Math.max(1, nameFs * (0.010 + Math.random() * 0.007));
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.5) * 18,
        targetX: t.x, targetY: t.y,
        color: tintFiling(t.color),
        isPeriod: !!t.isPeriod,
        rot: Math.random() * Math.PI * 2,
        omega: 0, // angular velocity (rad/sec) — for inertia-based tumble
        len: nameFs * lenVar,
        thickness: thickVar,
        settled: false,
        settleT: 0,
        relVx: 0, relVy: 0,
        relRotV: 0,
      };
    });

    // Shortest-path angle lerp
    const lerpAngle = (a, b, t) => {
      let d = b - a;
      while (d > Math.PI) d -= 2 * Math.PI;
      while (d < -Math.PI) d += 2 * Math.PI;
      return a + d * t;
    };

    // Spatial grid for neighbor lookup (chain attraction)
    const GRID_CELL = Math.max(8, Math.round(nameFs * 0.18));
    const gridCols = Math.ceil(W / GRID_CELL) + 1;
    const gridRows = Math.ceil(H / GRID_CELL) + 1;
    const gridBuf = []; // gridBuf[c*gridRows + r] = array of filing indices

    const rebuildGrid = () => {
      gridBuf.length = gridCols * gridRows;
      for (let i = 0; i < filings.length; i++) {
        const f = filings[i];
        if (f.settled) continue;
        const c = Math.min(gridCols - 1, Math.max(0, Math.floor(f.x / GRID_CELL)));
        const r = Math.min(gridRows - 1, Math.max(0, Math.floor(f.y / GRID_CELL)));
        const idx = c * gridRows + r;
        if (!gridBuf[idx]) gridBuf[idx] = [];
        gridBuf[idx].push(i);
      }
    };

    // Physics step — magnet anchor + field-line alignment + neighbor clumping
    const stepFilings = (t, dt) => {
      const magX = magnetXAt(Math.min(t, T_MAGNET_DUR));
      const RANGE = nameFs * 2.4;
      rebuildGrid();
      const clumpR = GRID_CELL * 0.85;
      const clumpR2 = clumpR * clumpR;
      for (const f of filings) {
        if (f.settled) {
          f.settleT += dt;
          // Tiny magnetic vibration (decays)
          const vibAmp = Math.max(0, 0.6 - f.settleT * 1.4);
          f.x = f.targetX + (Math.random() - 0.5) * vibAmp;
          f.y = f.targetY + (Math.random() - 0.5) * vibAmp;
          continue;
        }
        const distMag = Math.abs(magX - f.targetX);
        const influence = Math.max(0, 1 - distMag / RANGE);

        if (influence < 0.05) {
          // Calm horizontal float — like dust on paper, drifting slightly toward magnet
          const dirHint = Math.sign(magX - f.x) || 0;
          f.vx += ((Math.random() - 0.45) * 12 + dirHint * 4) * dt;
          f.vy += (Math.random() - 0.5) * 10 * dt;
          f.vx *= 1 - 2.6 * dt;
          f.vy *= 1 - 2.6 * dt;
          // Pre-orient rotation slightly toward magnet bar (perpendicular to field hint)
          const angToMag = Math.atan2(cy - f.y, magX - f.x);
          f.rot = lerpAngle(f.rot, angToMag, 0.025);
          // Damp residual angular velocity
          f.omega *= 1 - 3 * dt;
        } else {
          // Anchor shifts from MAGNET (while approaching) → TARGET (after magnet passes)
          // — filings visibly pull toward the magnet bar mid-sweep, then deposit at target.
          const swept = magX >= f.targetX;
          // Pre-pass anchor: heavily toward magnet bar; lerps slightly toward target so filings don't all pile on the same x
          const anchorX = swept ? f.targetX : lerp(magX, f.targetX, 0.30);
          const anchorY = swept ? f.targetY : lerp(cy, f.targetY, 0.30);
          const sqInf = influence * influence;
          const springK = 60 + sqInf * 420;
          const damping = 10 + sqInf * 16;
          // Neighbor clumping — short-range attraction creates chains along field lines
          let clumpFx = 0, clumpFy = 0;
          const fc = Math.min(gridCols - 1, Math.max(0, Math.floor(f.x / GRID_CELL)));
          const fr = Math.min(gridRows - 1, Math.max(0, Math.floor(f.y / GRID_CELL)));
          for (let cc = fc - 1; cc <= fc + 1; cc++) {
            for (let rr = fr - 1; rr <= fr + 1; rr++) {
              if (cc < 0 || cc >= gridCols || rr < 0 || rr >= gridRows) continue;
              const bucket = gridBuf[cc * gridRows + rr];
              if (!bucket) continue;
              for (const ni of bucket) {
                const n = filings[ni];
                if (n === f) continue;
                const ndx = n.x - f.x;
                const ndy = n.y - f.y;
                const d2 = ndx * ndx + ndy * ndy;
                if (d2 < clumpR2 && d2 > 1) {
                  // Weak attraction, decays with distance
                  const inv = 1 / Math.max(4, Math.sqrt(d2));
                  clumpFx += ndx * inv * 18;
                  clumpFy += ndy * inv * 18;
                }
              }
            }
          }

          f.vx += ((anchorX - f.x) * springK + clumpFx * influence - f.vx * damping) * dt;
          f.vy += ((anchorY - f.y) * springK + clumpFy * influence - f.vy * damping) * dt;
          const dx = f.targetX - f.x;
          const dy = f.targetY - f.y;
          // Rotation: align to MAGNETIC FIELD-LINE TANGENT (perpendicular to radial from magnet)
          // Real iron-filing behavior — curves around the magnet pole
          const dxM = f.x - magX;
          const dyM = f.y - cy;
          const radialAng = Math.atan2(dyM, dxM);
          const fieldTangent = radialAng + Math.PI / 2;
          const speed = Math.hypot(f.vx, f.vy);
          // Angular dynamics: torque from field-line alignment + damping
          let targetAng = f.rot;
          if (influence > 0.25) {
            targetAng = fieldTangent;
          } else if (speed > 12) {
            targetAng = Math.atan2(f.vy, f.vx);
          }
          let aErr = targetAng - f.rot;
          while (aErr > Math.PI) aErr -= 2 * Math.PI;
          while (aErr < -Math.PI) aErr += 2 * Math.PI;
          const torqueK = 80 + influence * 200;
          const aDamp = 8 + influence * 6;
          f.omega += (aErr * torqueK - f.omega * aDamp) * dt;
          f.rot += f.omega * dt;
          // Snap when very close + very slow
          if (Math.abs(dx) < 0.7 && Math.abs(dy) < 0.7 && speed < 3 && Math.abs(f.omega) < 1.5) {
            f.x = f.targetX; f.y = f.targetY;
            f.vx = 0; f.vy = 0; f.rot = 0;
            f.omega = 0;
            f.settled = true;
            f.settleT = 0;
          }
        }
        f.x += f.vx * dt;
        f.y += f.vy * dt;
      }
    };

    const filingAlpha = (f, t) => {
      // Global fade-in over first 0.4s so scene doesn't pop in
      const intro = clamp(t / 0.4, 0, 1);
      if (f.settled) return intro;
      const dx = f.targetX - f.x, dy = f.targetY - f.y;
      const dist = Math.hypot(dx, dy);
      const proximity = clamp(1 - dist / (nameFs * 4), 0.45, 1);
      return intro * proximity;
    };

    // ===== Ambient dust motes (background atmosphere) =====
    const dust = [];
    const DUST_N = Math.round((W * H) / 28000);
    for (let i = 0; i < DUST_N; i++) {
      dust.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 8,
        vy: -3 - Math.random() * 6,
        r: 0.6 + Math.random() * 1.0,
        twP: Math.random() * Math.PI * 2,
        twS: 0.6 + Math.random() * 1.4,
      });
    }
    const updateDust = (dt) => {
      for (const d of dust) {
        d.x += d.vx * dt * 4;
        d.y += d.vy * dt * 4;
        if (d.y < -8) { d.y = H + 8; d.x = Math.random() * W; }
        if (d.x < -8) d.x = W + 8;
        if (d.x > W + 8) d.x = -8;
      }
    };
    const drawDust = (now, alpha) => {
      if (alpha <= 0.01) return;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const d of dust) {
        const tw = (Math.sin(now * 0.001 * d.twS + d.twP) + 1) * 0.5;
        const a = alpha * (0.10 + tw * 0.35);
        ctx.globalAlpha = a;
        ctx.fillStyle = "rgba(180,200,225,1)";
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // ===== Magnet visual =====
    const drawMagnetBar = (x, alpha, t, now) => {
      if (alpha <= 0) return;
      // Soft fade-in over first 0.18s
      alpha *= clamp(t / 0.18, 0, 1);
      const pulse = 0.85 + Math.sin(now * 0.012) * 0.15;
      // Vertical bob — bar magnet length suggestion
      const bobY = Math.sin(now * 0.004) * nameFs * 0.06;
      ctx.save();
      ctx.globalAlpha = alpha;
      const w = nameFs * 0.85;

      // Trailing glow (motion blur fake — secondary fainter copy slightly behind)
      ctx.globalCompositeOperation = "lighter";
      const trailX = x - nameFs * 0.25; // assume L→R motion; subtle even if direction flips
      const tGrad = ctx.createLinearGradient(trailX - w * 0.7, 0, trailX + w * 0.7, 0);
      tGrad.addColorStop(0, "rgba(140,185,225,0)");
      tGrad.addColorStop(0.5, `rgba(180,215,245,${0.10 * pulse})`);
      tGrad.addColorStop(1, "rgba(140,185,225,0)");
      ctx.fillStyle = tGrad;
      ctx.fillRect(trailX - w * 0.7, 0, w * 1.4, H);

      // Outer wide soft glow (additive)
      const grad = ctx.createLinearGradient(x - w, 0, x + w, 0);
      grad.addColorStop(0,    "rgba(140,185,225,0)");
      grad.addColorStop(0.42, `rgba(180,215,245,${0.26 * pulse})`);
      grad.addColorStop(0.5,  `rgba(235,250,255,${0.65 * pulse})`);
      grad.addColorStop(0.58, `rgba(180,215,245,${0.26 * pulse})`);
      grad.addColorStop(1,    "rgba(140,185,225,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(x - w, 0, w * 2, H);
      ctx.globalCompositeOperation = "source-over";

      // Concentrated bright bar at letter row
      const barH = nameFs * 2.3;
      const barCy = cy + bobY;
      const barGrad = ctx.createLinearGradient(0, barCy - barH / 2, 0, barCy + barH / 2);
      barGrad.addColorStop(0, "rgba(255,255,255,0)");
      barGrad.addColorStop(0.5, `rgba(255,255,255,${0.95 * pulse})`);
      barGrad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = barGrad;
      ctx.fillRect(x - 1.8, barCy - barH / 2, 3.6, barH);
      // Pole caps (top + bottom dots)
      ctx.fillStyle = `rgba(255,255,255,${0.95 * pulse})`;
      ctx.beginPath();
      ctx.arc(x, barCy - barH * 0.42, nameFs * 0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x, barCy + barH * 0.42, nameFs * 0.04, 0, Math.PI * 2);
      ctx.fill();
      // Hairline core
      ctx.fillStyle = `rgba(255,255,255,${0.85 * pulse})`;
      ctx.fillRect(x - 0.5, barCy - barH / 2, 1, barH);

      // Concentric field arcs — both halves with shimmer
      const arcAlpha = 0.22 + 0.10 * Math.sin(now * 0.008);
      ctx.strokeStyle = `rgba(190,220,250,${arcAlpha * pulse})`;
      ctx.lineWidth = 1;
      for (let r = 1; r <= 4; r++) {
        const rad = nameFs * 0.35 * r;
        const sweep = 0.18 + r * 0.04;
        ctx.beginPath();
        ctx.arc(x, barCy, rad, -Math.PI / 2 - sweep, -Math.PI / 2 + sweep);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, barCy, rad, Math.PI / 2 - sweep, Math.PI / 2 + sweep);
        ctx.stroke();
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // Faint attraction lines from magnet to in-flight filings
    const drawAttractionLines = (magX, alpha) => {
      if (alpha <= 0) return;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `rgba(170,205,240,${0.10 * alpha})`;
      ctx.lineWidth = 0.6;
      const range = nameFs * 1.8;
      ctx.beginPath();
      for (const f of filings) {
        if (f.settled) continue;
        const distMag = Math.abs(magX - f.targetX);
        if (distMag > range) continue;
        // Only the in-transit ones (moving)
        if (Math.hypot(f.vx, f.vy) < 25) continue;
        ctx.moveTo(magX, cy);
        ctx.lineTo(f.x, f.y);
      }
      ctx.stroke();
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

    const drawFiling = (f, t) => {
      const alpha = filingAlpha(f, t);
      if (alpha <= 0.01) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(f.x, f.y);
      ctx.rotate(f.rot);
      // Filing as a short rounded line stroke with subtle polar tone
      const half = f.len / 2;
      ctx.lineCap = "round";
      ctx.lineWidth = f.thickness;
      const grad = ctx.createLinearGradient(-half, 0, half, 0);
      grad.addColorStop(0.0, "rgba(70,80,95,1)");
      grad.addColorStop(0.5, f.color);
      grad.addColorStop(1.0, "rgba(240,245,255,0.9)");
      ctx.strokeStyle = grad;
      ctx.beginPath();
      ctx.moveTo(-half, 0);
      ctx.lineTo(half, 0);
      ctx.stroke();
      // Just-settled flash (brief glow)
      if (f.settled && f.settleT < 0.18) {
        const k = (1 - f.settleT / 0.18);
        ctx.globalAlpha = k * 0.5;
        ctx.fillStyle = "rgba(220,235,255,1)";
        ctx.beginPath();
        ctx.arc(0, 0, f.thickness * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // ===== Main loop =====
    const START = performance.now();
    let raf;
    let finished = false;
    let bgTriggered = false;
    let lastTime = START;
    let releaseInit = false;

    const draw = (now) => {
      const t = (now - START) / 1000;
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);

      // Ambient dust — present from start through HOLD, fades during exit
      updateDust(dt);
      let dustAlpha = clamp(t / 0.6, 0, 1);
      if (t >= T_HOLD_END) dustAlpha *= Math.max(0, 1 - (t - T_HOLD_END) / (T_EXIT_END - T_HOLD_END));
      drawDust(now, dustAlpha);

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
      drawDivider(divA);
      drawTagline(tagA);

      if (t < T_POLISH_END) {
        const magX = magnetXAt(Math.min(t, T_MAGNET_DUR));
        const magAlpha = t < T_MAGNET_DUR ? 1 : Math.max(0, 1 - (t - T_MAGNET_DUR) / 0.4);
        drawMagnetBar(magX, magAlpha, t, now);

        stepFilings(t, dt);
        drawAttractionLines(magX, magAlpha);
        for (let i = 0; i < filings.length; i++) drawFiling(filings[i], t);

        if (t > T_SETTLE_END) {
          const p = clamp((t - T_SETTLE_END) / (T_POLISH_END - T_SETTLE_END), 0, 1);
          const e = 1 - Math.pow(1 - p, 3);
          ctx.save();
          ctx.globalAlpha = e;
          ctx.drawImage(letterCanvas, 0, 0, W, H);
          ctx.restore();
          // Lock-wave: bright vertical band sweeps L→R across letters once
          const wp = clamp((t - T_SETTLE_END) / 0.35, 0, 1);
          if (wp < 1) {
            const wx = lerp(startX - nameFs * 0.3, startX + totalW + nameFs * 0.3, wp);
            const wWidth = nameFs * 0.45;
            const wAlpha = Math.sin(wp * Math.PI) * 0.55;
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            const wGrad = ctx.createLinearGradient(wx - wWidth, 0, wx + wWidth, 0);
            wGrad.addColorStop(0, "rgba(200,225,255,0)");
            wGrad.addColorStop(0.5, `rgba(240,250,255,${wAlpha})`);
            wGrad.addColorStop(1, "rgba(200,225,255,0)");
            ctx.fillStyle = wGrad;
            ctx.fillRect(wx - wWidth, cy - nameFs, wWidth * 2, nameFs * 2);
            ctx.restore();
          }
        }
      } else if (t < T_HOLD_END) {
        // HOLD: subtle bloom + crisp letter
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 0.30;
        ctx.drawImage(letterGlow, 0, 0, W, H);
        ctx.restore();
        ctx.drawImage(letterCanvas, 0, 0, W, H);
      } else {
        // EXIT: reverse magnet sweep releases filings in a wave L→R
        const exitLocal = t - T_HOLD_END;
        const exitDur = T_EXIT_END - T_HOLD_END;
        const sweepDur = exitDur * 0.65;

        if (!releaseInit) {
          const totalSpan = W + nameFs * 2;
          for (const f of filings) {
            f.x = f.targetX;
            f.y = f.targetY;
            f.vx = 0; f.vy = 0;
            // releaseT = when reverse sweep reaches filing's x
            const frac = clamp((f.targetX + nameFs) / totalSpan, 0, 1);
            // Inverse easeInOutCubic (binary search)
            let lo = 0, hi = 1;
            for (let k = 0; k < 12; k++) {
              const mid = (lo + hi) / 2;
              if (easeInOutCubic(mid) < frac) lo = mid; else hi = mid;
            }
            f.releaseT = ((lo + hi) / 2) * sweepDur;
            f.relRotV = (Math.random() - 0.5) * 7;
            f.releasedFlag = false;
          }
          releaseInit = true;
        }

        // Reverse magnet bar
        const exitMagX = lerp(-nameFs, W + nameFs, easeInOutCubic(clamp(exitLocal / sweepDur, 0, 1)));
        const exitMagAlpha = Math.max(0, 1 - exitLocal / (sweepDur + 0.25));
        drawMagnetBar(exitMagX, exitMagAlpha, 999, now);

        // Release wave — brief shimmer right at the sweep position
        if (exitLocal < sweepDur + 0.2) {
          const wAlpha = Math.max(0, 0.5 - exitLocal * 0.4);
          const wWidth = nameFs * 0.4;
          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          const wGrad = ctx.createLinearGradient(exitMagX - wWidth, 0, exitMagX + wWidth, 0);
          wGrad.addColorStop(0, "rgba(200,225,255,0)");
          wGrad.addColorStop(0.5, `rgba(240,250,255,${wAlpha})`);
          wGrad.addColorStop(1, "rgba(200,225,255,0)");
          ctx.fillStyle = wGrad;
          ctx.fillRect(exitMagX - wWidth, cy - nameFs * 1.2, wWidth * 2, nameFs * 2.4);
          ctx.restore();
        }

        // letterCanvas fades out as sweep begins
        const lcFade = clamp((exitLocal - 0.1) / 0.45, 0, 1);
        if (lcFade < 1) {
          ctx.save();
          ctx.globalAlpha = 1 - lcFade;
          ctx.drawImage(letterCanvas, 0, 0, W, H);
          ctx.restore();
        }

        // Per-filing: release in wave; pre-release vibrate; post-release physics
        for (const f of filings) {
          let alphaMul = 1;
          if (exitLocal < f.releaseT) {
            // Vibrate at target (magnet hasn't passed yet)
            f.x = f.targetX + (Math.random() - 0.5) * 0.4;
            f.y = f.targetY + (Math.random() - 0.5) * 0.4;
          } else {
            if (!f.releasedFlag) {
              f.releasedFlag = true;
              const ang = (Math.random() - 0.5) * Math.PI * 0.7;
              const spd = 90 + Math.random() * 210;
              f.vx = Math.cos(ang) * spd;
              f.vy = Math.sin(ang) * spd - 60;
            }
            f.vx *= 0.998;
            f.vy += 950 * dt;
            f.x += f.vx * dt;
            f.y += f.vy * dt;
            f.rot += f.relRotV * dt;
            const ageSinceRelease = exitLocal - f.releaseT;
            alphaMul = Math.max(0, 1 - ageSinceRelease / 0.85);
          }
          if (alphaMul <= 0) continue;
          ctx.save();
          ctx.globalAlpha = alphaMul;
          ctx.translate(f.x, f.y);
          ctx.rotate(f.rot);
          ctx.lineCap = "round";
          ctx.lineWidth = f.thickness;
          const half = f.len / 2;
          const grad = ctx.createLinearGradient(-half, 0, half, 0);
          grad.addColorStop(0.0, "rgba(70,80,95,1)");
          grad.addColorStop(0.5, f.color);
          grad.addColorStop(1.0, "rgba(240,245,255,0.9)");
          ctx.strokeStyle = grad;
          ctx.beginPath();
          ctx.moveTo(-half, 0);
          ctx.lineTo(half, 0);
          ctx.stroke();
          ctx.restore();
        }
        ctx.globalAlpha = 1;
      }

      // Keep bg solid black throughout exit — portfolio stays hidden until EXIT_END
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

export default MagneticCurtain;
