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

const LightningCurtain = ({ onFinish }) => {
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

    // ===== Timing =====
    const STRIKE_STAGGER = 0.18;
    const STRIKE_FLASH = 0.10;
    const STRIKE_BOLT_LIFE = 0.18;
    const lastStrikeT = (fullName.length - 1) * STRIKE_STAGGER + STRIKE_FLASH;
    const T_HOLD_END = lastStrikeT + 1.4;
    const T_BIG_FLASH_END = T_HOLD_END + 0.6;
    const T_EXIT_END = T_BIG_FLASH_END + 0.6;

    // ===== Fractal bolt generator (midpoint displacement + recursive forks) =====
    // Produces a jagged main path with branches that taper in width with depth.
    const buildFractalBolt = (sx, sy, ex, ey, opts = {}) => {
      const {
        depth = 4,
        displace = nameFs * 0.55,
        decay = 0.52,
        branchChance = 0.42,
        maxDepthForBranches = 3,
      } = opts;

      // Recursive midpoint displacement → returns array of [x,y] points
      const subdivide = (ax, ay, bx, by, d, disp) => {
        if (d <= 0) return [[ax, ay], [bx, by]];
        const mx = (ax + bx) / 2;
        const my = (ay + by) / 2;
        // Perpendicular unit vector for displacement
        const dx = bx - ax;
        const dy = by - ay;
        const len = Math.hypot(dx, dy) || 1;
        const px = -dy / len;
        const py = dx / len;
        const off = (Math.random() - 0.5) * 2 * disp;
        const nx = mx + px * off;
        const ny = my + py * off;
        const left = subdivide(ax, ay, nx, ny, d - 1, disp * decay);
        const right = subdivide(nx, ny, bx, by, d - 1, disp * decay);
        // drop the joining duplicate
        return left.concat(right.slice(1));
      };

      const points = subdivide(sx, sy, ex, ey, depth, displace);

      // Branches — recurse on a randomly chosen segment, shorter & narrower
      const branches = [];
      const tryBranch = (poly, d, widthScale) => {
        if (d <= 0 || poly.length < 3) return;
        for (let i = 1; i < poly.length - 1; i++) {
          if (Math.random() < branchChance / d) {
            const [ox, oy] = poly[i];
            // Angle off the parent's local direction
            const [px, py] = poly[i - 1];
            const [nx, ny] = poly[i + 1];
            const tx2 = nx - px;
            const ty2 = ny - py;
            const tlen = Math.hypot(tx2, ty2) || 1;
            // Perpendicular-ish acute fork (±25–55°)
            const side = Math.random() < 0.5 ? -1 : 1;
            const ang = (25 + Math.random() * 30) * Math.PI / 180 * side;
            const cs = Math.cos(ang), sn = Math.sin(ang);
            const rx = (tx2 * cs - ty2 * sn) / tlen;
            const ry = (tx2 * sn + ty2 * cs) / tlen;
            const blen = (nameFs * (0.5 + Math.random() * 0.9)) * (widthScale + 0.3);
            const ex2 = ox + rx * blen + (Math.random() - 0.5) * nameFs * 0.15;
            const ey2 = oy + ry * blen + (Math.random() - 0.5) * nameFs * 0.15;
            const bPoly = subdivide(ox, oy, ex2, ey2, Math.max(1, d - 1), displace * 0.4);
            branches.push({ points: bPoly, widthScale: widthScale * 0.6 });
            // Recurse one more shallow fork
            tryBranch(bPoly, d - 1, widthScale * 0.6);
          }
        }
      };
      tryBranch(points, maxDepthForBranches, 1);
      return { points, branches };
    };

    // Generate a fresh bolt for letter `i` at strike time — variety per strike.
    const makeStrikeBolt = (i, opts = {}) => {
      const tx = targetX[i];
      const targetY = cy - nameFs * 0.45;
      const startBolt = tx + (Math.random() - 0.5) * nameFs * 1.1;
      const startY = -10;
      const jitterDepth = 3 + Math.floor(Math.random() * 2); // 3..4
      const disp = nameFs * (0.45 + Math.random() * 0.35);
      return buildFractalBolt(startBolt, startY, tx, targetY, {
        depth: jitterDepth,
        displace: disp,
        decay: 0.48 + Math.random() * 0.1,
        branchChance: 0.35 + Math.random() * 0.2,
        maxDepthForBranches: 3,
        ...opts,
      });
    };

    // Per-letter strike metadata. Bolt instances are (re)generated per strike below.
    const strikes = targetX.map((tx, i) => ({
      strikeT: i * STRIKE_STAGGER,
      bolt: null,
      lastSeed: -1,
    }));

    // ===== Storm atmosphere systems =====

    // Pseudo-Perlin: layered cosine noise — cheap, smooth, deterministic per-run.
    const noiseSeeds = [
      [0.7, 1.3, 0.5], [1.9, 0.4, 2.1], [3.1, 2.7, 1.4], [0.5, 3.3, 4.0],
    ];
    const stormNoise = (x, y) => {
      let v = 0;
      for (let i = 0; i < noiseSeeds.length; i++) {
        const [a, b, c] = noiseSeeds[i];
        v += Math.cos(x * a + y * b + c) * (0.6 / (i + 1));
      }
      return v; // ~[-1.2, 1.2]
    };

    // Pre-baked cloud silhouette: cached gradient layers across the top band.
    const cloudBandH = Math.max(120, Math.round(H * 0.42));
    const cloudPoints = [];
    for (let x = 0; x <= W; x += Math.max(8, Math.round(W / 90))) {
      const n1 = stormNoise(x * 0.006, 0.0) * 0.55;
      const n2 = stormNoise(x * 0.018, 1.7) * 0.30;
      const top = Math.max(0, cloudBandH * (0.55 + n1 + n2 * 0.5));
      cloudPoints.push([x, top]);
    }

    const drawStormBg = (t) => {
      // Grayscale gradient — never flat black, but no blue tint
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, "rgba(20,20,20,1)");
      g.addColorStop(0.55, "rgba(8,8,8,1)");
      g.addColorStop(1, "rgba(0,0,0,1)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      // Drifting cloud silhouettes — dark gray
      ctx.save();
      const drift = (t * 6) % W;
      for (let pass = 0; pass < 2; pass++) {
        ctx.globalAlpha = pass === 0 ? 0.55 : 0.32;
        const off = pass === 0 ? -drift : drift * 0.6;
        const yLift = pass === 0 ? 0 : 18;
        const grad = ctx.createLinearGradient(0, 0, 0, cloudBandH);
        grad.addColorStop(0, "rgba(34,34,34,1)");
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(-10, -10);
        for (let i = 0; i < cloudPoints.length; i++) {
          const [x, y] = cloudPoints[i];
          ctx.lineTo(x + off, y + yLift);
        }
        ctx.lineTo(W + 10, -10);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    };

    // Distant lightning flashes — soft offscreen glows on left/right edges.
    // Scheduled randomly before main sequence; harmless on top during HOLD too.
    const distantFlashes = [];
    {
      const last = (fullName.length - 1) * STRIKE_STAGGER + STRIKE_FLASH;
      // Seed ~4-6 distant flashes spaced across the intro + hold window
      const total = 4 + Math.floor(Math.random() * 3);
      for (let i = 0; i < total; i++) {
        distantFlashes.push({
          t: -0.4 + Math.random() * (last + 1.0),
          side: Math.random() < 0.5 ? "L" : "R",
          dur: 0.25 + Math.random() * 0.35,
          intensity: 0.10 + Math.random() * 0.18,
          y: H * (0.05 + Math.random() * 0.4),
        });
      }
    }
    const drawDistantFlashes = (t) => {
      for (let i = 0; i < distantFlashes.length; i++) {
        const f = distantFlashes[i];
        const u = (t - f.t) / f.dur;
        if (u <= 0 || u >= 1) continue;
        // Quick rise, slower decay (like real horizon flash)
        const env = u < 0.18 ? u / 0.18 : Math.max(0, 1 - (u - 0.18) / 0.82);
        const cx = f.side === "L" ? -40 : W + 40;
        const radius = Math.max(180, W * 0.35);
        const g = ctx.createRadialGradient(cx, f.y, 10, cx, f.y, radius);
        const a = env * f.intensity;
        g.addColorStop(0, `rgba(255,255,255,${a})`);
        g.addColorStop(0.4, `rgba(100,150,220,${a * 0.5})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }
    };

    // Rain — two parallax layers, drift with slight wind angle that varies over time.
    const makeRain = (count, speed, len, alpha) => {
      const arr = [];
      for (let i = 0; i < count; i++) {
        arr.push({
          x: Math.random() * (W + 200) - 100,
          y: Math.random() * H,
          speed: speed * (0.8 + Math.random() * 0.5),
          len: len * (0.7 + Math.random() * 0.6),
          alpha: alpha * (0.5 + Math.random() * 0.7),
        });
      }
      return arr;
    };
    // Density scales with viewport; deliberately sparse for elegance, not deluge.
    const rainFar = makeRain(Math.round((W * H) / 22000), 280, 14, 0.18);
    const rainNear = makeRain(Math.round((W * H) / 38000), 520, 22, 0.32);

    const drawRain = (t, dt, intensity) => {
      if (intensity <= 0) return;
      // Wind angle wobble — small variation, not vertical
      const wind = Math.sin(t * 0.4) * 0.18 + 0.22; // tan(angle from vertical)
      ctx.save();
      ctx.lineCap = "round";
      const passes = [rainFar, rainNear];
      for (let p = 0; p < passes.length; p++) {
        const drops = passes[p];
        const widthScale = p === 0 ? 0.9 : 1.3;
        ctx.lineWidth = widthScale;
        for (let i = 0; i < drops.length; i++) {
          const d = drops[i];
          d.y += d.speed * dt;
          d.x += d.speed * dt * wind;
          if (d.y > H + 40) { d.y = -20 - Math.random() * 80; d.x = Math.random() * (W + 200) - 100; }
          if (d.x > W + 60) d.x = -40;
          ctx.strokeStyle = `rgba(220,220,220,${d.alpha * intensity})`;
          ctx.beginPath();
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(d.x - d.len * wind, d.y - d.len);
          ctx.stroke();
        }
      }
      ctx.restore();
    };

    // ===== Render helpers =====
    const strokePoly = (poly) => {
      ctx.beginPath();
      for (let i = 0; i < poly.length; i++) {
        const p = poly[i];
        if (i === 0) ctx.moveTo(p[0], p[1]); else ctx.lineTo(p[0], p[1]);
      }
      ctx.stroke();
    };

    // 3-layer bolt: wide cyan halo → mid white-blue → narrow pure-white core.
    // `widthScale` is multiplied through every layer so branches taper naturally.
    const drawPolyTriLayer = (poly, alpha, widthScale = 1) => {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      // Wide outer cyan glow
      ctx.globalAlpha = alpha * 0.45;
      ctx.strokeStyle = "rgba(255,255,255,1)";
      ctx.lineWidth = Math.max(1.8, nameFs * 0.11 * widthScale);
      strokePoly(poly);
      // Middle white-blue band
      ctx.globalAlpha = alpha * 0.85;
      ctx.strokeStyle = "rgba(245,245,245,1)";
      ctx.lineWidth = Math.max(1.2, nameFs * 0.045 * widthScale);
      strokePoly(poly);
      // Bright pure-white core
      ctx.globalAlpha = Math.min(1, alpha * 1.1);
      ctx.strokeStyle = "rgba(255,255,255,1)";
      ctx.lineWidth = Math.max(1, nameFs * 0.018 * widthScale);
      strokePoly(poly);
    };

    const drawBolt = (bolt, alpha) => {
      if (alpha <= 0 || !bolt) return;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      drawPolyTriLayer(bolt.points, alpha, 1);
      // Branches: width-tapered by recursion depth
      for (const br of bolt.branches) {
        drawPolyTriLayer(br.points, alpha * 0.75, br.widthScale || 0.55);
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    const drawFullFlash = (alpha) => {
      if (alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, W, H);
      ctx.restore();
      ctx.globalAlpha = 1;
    };

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
    const drawLetter = (char, color, x, alpha) => {
      if (alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.font = `900 ${nameFs}px ${sansStack}`;
      try { ctx.letterSpacing = "-1.5px"; } catch (_) {}
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = color;
      ctx.fillText(char, x, cy);
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // ===== Letter glow burst + spark particles =====
    // Radial halo bursts that bloom outward on strike. Pre-spawned at strike-entry.
    const haloBursts = []; // { x, y, t0, dur, maxR, color }
    const addHaloBurst = (x, y, opts = {}) => {
      haloBursts.push({
        x, y,
        t0: opts.t0,
        dur: opts.dur || 0.45,
        maxR: opts.maxR || nameFs * 1.6,
        color: opts.color || "rgba(255,255,255,1)",
      });
    };
    const drawHaloBursts = (t) => {
      for (let i = haloBursts.length - 1; i >= 0; i--) {
        const h = haloBursts[i];
        const u = (t - h.t0) / h.dur;
        if (u >= 1 || u < 0) { if (u >= 1) haloBursts.splice(i, 1); continue; }
        // Burst envelope: snap rise, eased decay
        const env = u < 0.12 ? (u / 0.12) : Math.max(0, 1 - (u - 0.12) / 0.88);
        const r = h.maxR * (0.25 + u * 1.0);
        const g = ctx.createRadialGradient(h.x, h.y, 0, h.x, h.y, r);
        const a = env * 0.85;
        // Bright core, fading to transparent edge
        const cm = h.color.replace(/[\d.]+\)$/, `${a})`);
        const cm2 = h.color.replace(/[\d.]+\)$/, `${a * 0.4})`);
        g.addColorStop(0, cm);
        g.addColorStop(0.35, cm2);
        g.addColorStop(1, h.color.replace(/[\d.]+\)$/, "0)"));
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = g;
        ctx.fillRect(h.x - r, h.y - r, r * 2, r * 2);
        ctx.restore();
      }
    };

    // Spark particles — bright pixels that fly off impact points with gravity + drag.
    const sparks = []; // { x, y, vx, vy, life, age, hue }
    const spawnSparks = (x, y, count, opts = {}) => {
      const { speedMin = 60, speedMax = 240, hue = "rgba(255,235,200,1)" } = opts;
      for (let i = 0; i < count; i++) {
        const ang = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.4; // mostly upward fan
        const sp = speedMin + Math.random() * (speedMax - speedMin);
        sparks.push({
          x, y,
          vx: Math.cos(ang) * sp,
          vy: Math.sin(ang) * sp,
          life: 0.45 + Math.random() * 0.5,
          age: 0,
          hue,
        });
      }
    };
    const updateAndDrawSparks = (dt) => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i];
        p.age += dt;
        if (p.age >= p.life) { sparks.splice(i, 1); continue; }
        // Physics: gravity + air drag
        p.vy += 380 * dt;
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        const u = p.age / p.life;
        const a = (1 - u) * 0.9;
        // Streak: short tail along velocity vector
        const tlx = p.x - p.vx * 0.012;
        const tly = p.y - p.vy * 0.012;
        ctx.strokeStyle = p.hue.replace(/[\d.]+\)$/, `${a})`);
        ctx.lineWidth = 1.4;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tlx, tly);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        // Bright head
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fillRect(p.x - 0.8, p.y - 0.8, 1.8, 1.8);
      }
      ctx.restore();
    };

    // Chain lightning between letters — short jagged arcs strung end to end at exit.
    const buildChainSegment = (ax, ay, bx, by, depth = 3) => {
      const subdivide = (a, b, c, d, dep, disp) => {
        if (dep <= 0) return [[a, b], [c, d]];
        const mx = (a + c) / 2, my = (b + d) / 2;
        const dx = c - a, dy = d - b;
        const len = Math.hypot(dx, dy) || 1;
        const px = -dy / len, py = dx / len;
        const off = (Math.random() - 0.5) * 2 * disp;
        const nx = mx + px * off, ny = my + py * off;
        const left = subdivide(a, b, nx, ny, dep - 1, disp * 0.55);
        const right = subdivide(nx, ny, c, d, dep - 1, disp * 0.55);
        return left.concat(right.slice(1));
      };
      return subdivide(ax, ay, bx, by, depth, Math.hypot(bx - ax, by - ay) * 0.18);
    };

    // ===== Main loop =====
    const START = performance.now();
    let raf;
    let finished = false;
    let bgTriggered = false;
    let lastTs = START;

    // Camera shake state — kicked on each strike, decays as damped sine.
    const shakes = []; // { t0, dur, amp }
    const addShake = (now, amp, dur) => shakes.push({ t0: now, dur, amp });
    const sampleShake = (t) => {
      let sx = 0, sy = 0;
      for (let i = shakes.length - 1; i >= 0; i--) {
        const s = shakes[i];
        const u = (t - s.t0) / s.dur;
        if (u >= 1 || u < 0) { shakes.splice(i, 1); continue; }
        const decay = Math.exp(-u * 4.2);
        // Two-axis damped sines, slightly out of phase for jolt feel
        sx += Math.sin(u * Math.PI * 18) * s.amp * decay;
        sy += Math.cos(u * Math.PI * 22 + 1.1) * s.amp * decay * 0.7;
      }
      return [sx, sy];
    };

    const draw = (now) => {
      const t = (now - START) / 1000;
      const dt = Math.min(0.06, (now - lastTs) / 1000);
      lastTs = now;
      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);

      // Apply camera shake transform for this frame
      const [shx, shy] = sampleShake(t);
      ctx.save();
      ctx.translate(shx, shy);

      // Storm world (subtle gradient + drifting cloud silhouettes)
      drawStormBg(t);

      // Distant offscreen lightning glows (silent — never reach the canvas core)
      drawDistantFlashes(t);

      // Rain — intensity ramps over time, peaks at exit
      let rainIntensity = 0.55;
      if (t < 0.3) rainIntensity = clamp(t / 0.3, 0, 1) * 0.55;
      if (t >= T_HOLD_END) {
        const ep2 = clamp((t - T_HOLD_END) / (T_EXIT_END - T_HOLD_END), 0, 1);
        rainIntensity = 0.55 + ep2 * 0.55;
      }
      drawRain(t, dt, rainIntensity);

      // Pre-strike anticipation pulses — small approaching glow above each letter
      for (let i = 0; i < strikes.length; i++) {
        const s = strikes[i];
        const lead = s.strikeT - t; // seconds until strike
        if (lead > 0 && lead < 0.22) {
          const u = 1 - lead / 0.22; // 0→1 as we approach the strike
          const tx = targetX[i];
          const yApproach = lerp(-20, cy - nameFs * 0.55, u);
          const r = lerp(nameFs * 0.05, nameFs * 0.45, u);
          const a = (u * u) * 0.45;
          const g = ctx.createRadialGradient(tx, yApproach, 0, tx, yApproach, r);
          g.addColorStop(0, `rgba(255,255,255,${a})`);
          g.addColorStop(1, "rgba(0,0,0,0)");
          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          ctx.fillStyle = g;
          ctx.fillRect(0, 0, W, H);
          ctx.restore();
        }
      }

      // Divider + tagline fade in after last strike
      let divA = 0, tagA = 0;
      if (t < T_HOLD_END) {
        divA = clamp((t - lastStrikeT) / 0.5, 0, 1);
        tagA = clamp((t - lastStrikeT - 0.15) / 0.5, 0, 1);
      } else {
        const ep = (t - T_HOLD_END) / (T_EXIT_END - T_HOLD_END);
        divA = Math.max(0, 1 - ep * 1.4);
        tagA = Math.max(0, 1 - ep * 1.6);
      }
      drawDivider(divA);
      drawTagline(tagA);

      // Letters — alpha = 1 once first lit by lightning, holds, fades at exit
      for (let i = 0; i < fullName.length; i++) {
        const ch = fullName[i];
        const color = ch === "." ? ORANGE : WHITE;
        const strikeAt = i * STRIKE_STAGGER + STRIKE_FLASH * 0.5;
        let a = 0;
        if (t >= strikeAt) {
          a = clamp((t - strikeAt) / 0.12, 0, 1);
        }
        if (t > T_HOLD_END) {
          // Big flash window: letters very bright (held). After flash, fade out.
          if (t >= T_BIG_FLASH_END) {
            a *= Math.max(0, 1 - (t - T_BIG_FLASH_END) / (T_EXIT_END - T_BIG_FLASH_END));
          }
        }
        drawLetter(ch, color, targetX[i], a);
      }

      // Strikes — regenerate fractal bolt at strike entry; mid-air flicker through life
      for (let i = 0; i < strikes.length; i++) {
        const s = strikes[i];
        const localT = t - s.strikeT;
        if (localT < 0) continue;

        // Re-roll the fractal bolt once per strike entry (variety per replay)
        if (s.lastSeed !== i || s.bolt == null) {
          s.bolt = makeStrikeBolt(i);
          s.lastSeed = i;
          // Kick screen shake on first frame after strike entry
          addShake(t, Math.max(2, nameFs * 0.045), 0.42);
          // Spawn radial glow burst at the impact point
          const tx = targetX[i];
          const ty = cy;
          const ch = fullName[i];
          addHaloBurst(tx, ty - nameFs * 0.1, {
            t0: t,
            dur: 0.55,
            maxR: nameFs * 1.8,
            color: ch === "." ? "rgba(255,170,90,1)" : "rgba(255,255,255,1)",
          });
          // Sparks fly off impact (warm for period, cool for letters)
          spawnSparks(tx, ty - nameFs * 0.15, 14 + Math.floor(Math.random() * 8), {
            speedMin: 70, speedMax: 320,
            hue: ch === "." ? "rgba(255,180,80,1)" : "rgba(255,255,255,1)",
          });
        }

        if (localT < STRIKE_BOLT_LIFE) {
          const lp = localT / STRIKE_BOLT_LIFE;
          // Multi-flicker: gated square + envelope
          const flick = Math.sin(lp * Math.PI * 6) > 0 ? 1 : 0.3;
          const fade = (1 - lp) * flick;
          drawBolt(s.bolt, fade);
        }
        if (localT < STRIKE_FLASH) {
          const fp = localT / STRIKE_FLASH;
          const fa = Math.sin(fp * Math.PI) * 0.18;
          drawFullFlash(fa);
        }
      }

      // Letter brief overshoot — rendered on top of letters for that "burn bright" pop
      for (let i = 0; i < fullName.length; i++) {
        const ch = fullName[i];
        const strikeAt = i * STRIKE_STAGGER + STRIKE_FLASH * 0.5;
        const dtl = t - strikeAt;
        if (dtl >= 0 && dtl < 0.28) {
          const u = dtl / 0.28;
          const overshoot = (1 - u) * 0.55; // 0..0.55 alpha bump
          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          ctx.globalAlpha = overshoot;
          ctx.font = `900 ${nameFs}px ${sansStack}`;
          try { ctx.letterSpacing = "-1.5px"; } catch (_) {}
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = ch === "." ? "rgba(255,200,140,1)" : "rgba(255,255,255,1)";
          ctx.fillText(ch, targetX[i], cy);
          ctx.restore();
          ctx.globalAlpha = 1;
        }
      }

      // Halo bursts + spark particles (drawn above letters for impact)
      drawHaloBursts(t);
      updateAndDrawSparks(dt);

      // Exit: big synchronized re-strike + chain lightning + whiteout
      if (t >= T_HOLD_END && t < T_BIG_FLASH_END) {
        const p = (t - T_HOLD_END) / (T_BIG_FLASH_END - T_HOLD_END);
        // Regenerate exit bolts once for a fresh look
        if (!draw._exitBolts) {
          draw._exitBolts = targetX.map((_, i) => makeStrikeBolt(i, { displace: nameFs * 0.9, depth: 4 }));
          // Big finale shake
          addShake(t, Math.max(6, nameFs * 0.11), 0.7);
          // Halo bursts on every letter, sparks shower
          for (let i = 0; i < targetX.length; i++) {
            const ch = fullName[i];
            addHaloBurst(targetX[i], cy - nameFs * 0.05, {
              t0: t, dur: 0.55, maxR: nameFs * 2.4,
              color: ch === "." ? "rgba(255,170,90,1)" : "rgba(255,255,255,1)",
            });
            spawnSparks(targetX[i], cy - nameFs * 0.1, 22, {
              speedMin: 120, speedMax: 460,
              hue: ch === "." ? "rgba(255,200,120,1)" : "rgba(255,255,255,1)",
            });
          }
        }

        // Chain lightning: arcs between successive letter positions
        // Rebuild every frame for crackle/animated feel
        const chainAlpha = Math.sin(p * Math.PI) * (Math.sin(p * Math.PI * 14) > -0.2 ? 1 : 0.4);
        if (chainAlpha > 0.02) {
          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          for (let i = 0; i < targetX.length - 1; i++) {
            const ax = targetX[i], ay = cy + (Math.random() - 0.5) * nameFs * 0.15;
            const bx = targetX[i + 1], by = cy + (Math.random() - 0.5) * nameFs * 0.15;
            const arc = buildChainSegment(ax, ay, bx, by, 3);
            drawPolyTriLayer(arc, chainAlpha * 0.85, 0.55);
          }
          ctx.restore();
        }

        for (let i = 0; i < draw._exitBolts.length; i++) {
          const fade = (1 - p) * (Math.sin(p * Math.PI * 8) > 0 ? 1 : 0.4);
          drawBolt(draw._exitBolts[i], fade * 0.95);
        }
        // Bell-shaped giant flash + brief peak whiteout window
        drawFullFlash(Math.sin(p * Math.PI) * 0.55);
        if (p > 0.35 && p < 0.6) {
          // High-frequency flicker on top of the flash
          const fl = (Math.sin(p * Math.PI * 38) > 0 ? 1 : 0.2);
          drawFullFlash(0.45 * fl * (1 - Math.abs(p - 0.5) * 4));
        }
      }

      // Restore from camera-shake translate before flagging exit
      ctx.restore();

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

export default LightningCurtain;
