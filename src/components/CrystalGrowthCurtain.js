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

const CrystalGrowthCurtain = ({ onFinish }) => {
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

    // Pre-render letterCanvas (crisp final state)
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
    const nodes = [];
    for (let y = 0; y < H; y += STRIDE) {
      for (let x = 0; x < W; x += STRIDE) {
        const px = Math.floor(x * dpr);
        const py = Math.floor(y * dpr);
        if (px >= Wpx || py >= Hpx) continue;
        const idx = (py * Wpx + px) * 4;
        const r = data[idx], g = data[idx + 1], b = data[idx + 2], a = data[idx + 3];
        if (a > 120) {
          const isPeriod = r > 200 && g < 200 && b < 100;
          nodes.push({ x, y, isPeriod });
        }
      }
    }

    // Seed at letter row center
    const seedX = W / 2;
    const seedY = cy;

    // ===== Build growth tree =====
    // 1) sort nodes by Euclidean distance from seed
    // 2) for each node, parent = nearest already-claimed node (or seed if first)
    // Use a coarse spatial grid for O(N) nearest-neighbor lookup
    for (const n of nodes) {
      const dx = n.x - seedX, dy = n.y - seedY;
      n.distFromSeed = Math.sqrt(dx * dx + dy * dy);
    }
    nodes.sort((a, b) => a.distFromSeed - b.distFromSeed);

    const GRID = Math.max(8, STRIDE * 3);
    const cols = Math.ceil(W / GRID) + 1;
    const rows = Math.ceil(H / GRID) + 1;
    const grid = []; // grid[c * rows + r] = [nodeIdx,...]

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      let bestIdx = -1;
      let bestD2 = Infinity;
      const c = Math.min(cols - 1, Math.max(0, Math.floor(n.x / GRID)));
      const r = Math.min(rows - 1, Math.max(0, Math.floor(n.y / GRID)));
      for (let cc = c - 2; cc <= c + 2; cc++) {
        for (let rr = r - 2; rr <= r + 2; rr++) {
          if (cc < 0 || cc >= cols || rr < 0 || rr >= rows) continue;
          const bucket = grid[cc * rows + rr];
          if (!bucket) continue;
          for (const j of bucket) {
            const m = nodes[j];
            const ddx = m.x - n.x, ddy = m.y - n.y;
            const d2 = ddx * ddx + ddy * ddy;
            if (d2 < bestD2) { bestD2 = d2; bestIdx = j; }
          }
        }
      }
      // If no nearby claimed neighbor, parent = seed
      if (bestIdx === -1) {
        n.parentX = seedX;
        n.parentY = seedY;
        n.parentIdx = -1;
        n.edgeLen = n.distFromSeed;
      } else {
        const p = nodes[bestIdx];
        n.parentX = p.x;
        n.parentY = p.y;
        n.parentIdx = bestIdx;
        n.edgeLen = Math.sqrt(bestD2);
      }
      // Place into grid for subsequent lookups
      if (!grid[c * rows + r]) grid[c * rows + r] = [];
      grid[c * rows + r].push(i);
    }

    // Claim time: mix of distance + angular sector + small randomness
    // Different angular sectors grow at slightly different rates → organic branching tendrils
    const T_GROW_DUR = 3.4;
    const maxDist = nodes[nodes.length - 1].distFromSeed || 1;
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const dFrac = n.distFromSeed / maxDist;
      const ang = Math.atan2(n.y - seedY, n.x - seedX);
      // 8 sectors with phase offsets — creates 8 "tendril" tendencies
      const sectorOffset = (Math.sin(ang * 4) * 0.5 + 0.5) * 0.18;
      const jitter = Math.random() * 0.06;
      n.claimT = clamp((dFrac * 0.78 + sectorOffset + jitter) * T_GROW_DUR, 0, T_GROW_DUR);
    }
    // Re-sort by claimT so loop early-exit is correct
    nodes.sort((a, b) => a.claimT - b.claimT);
    // Re-link parents using new order (rebuild grid + nearest lookup)
    const grid2 = [];
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      let bestIdx = -1, bestD2 = Infinity;
      const c = Math.min(cols - 1, Math.max(0, Math.floor(n.x / GRID)));
      const r = Math.min(rows - 1, Math.max(0, Math.floor(n.y / GRID)));
      for (let cc = c - 2; cc <= c + 2; cc++) {
        for (let rr = r - 2; rr <= r + 2; rr++) {
          if (cc < 0 || cc >= cols || rr < 0 || rr >= rows) continue;
          const bucket = grid2[cc * rows + rr];
          if (!bucket) continue;
          for (const j of bucket) {
            const m = nodes[j];
            const ddx = m.x - n.x, ddy = m.y - n.y;
            const d2 = ddx * ddx + ddy * ddy;
            if (d2 < bestD2) { bestD2 = d2; bestIdx = j; }
          }
        }
      }
      if (bestIdx === -1) {
        n.parentX = seedX; n.parentY = seedY; n.parentIdx = -1; n.edgeLen = n.distFromSeed;
      } else {
        const p = nodes[bestIdx];
        n.parentX = p.x; n.parentY = p.y; n.parentIdx = bestIdx; n.edgeLen = Math.sqrt(bestD2);
      }
      // Secondary edge — ~25% chance, second-nearest within range, creates lattice cycles
      n.hasSecondary = false;
      if (Math.random() < 0.25 && bestIdx !== -1) {
        let secondBest = -1, secondD2 = Infinity;
        for (let cc = c - 2; cc <= c + 2; cc++) {
          for (let rr = r - 2; rr <= r + 2; rr++) {
            if (cc < 0 || cc >= cols || rr < 0 || rr >= rows) continue;
            const bucket = grid2[cc * rows + rr];
            if (!bucket) continue;
            for (const j of bucket) {
              if (j === bestIdx) continue;
              const m = nodes[j];
              const ddx = m.x - n.x, ddy = m.y - n.y;
              const d2 = ddx * ddx + ddy * ddy;
              if (d2 < secondD2 && d2 < (STRIDE * 2.5) * (STRIDE * 2.5)) {
                secondD2 = d2; secondBest = j;
              }
            }
          }
        }
        if (secondBest !== -1) {
          n.secondaryX = nodes[secondBest].x;
          n.secondaryY = nodes[secondBest].y;
          n.hasSecondary = true;
        }
      }
      if (!grid2[c * rows + r]) grid2[c * rows + r] = [];
      grid2[c * rows + r].push(i);
    }

    // ===== Timing =====
    const T_GROW_END = T_GROW_DUR + 0.15;
    const T_HARDEN_END = T_GROW_END + 0.40;
    const T_HOLD_END = T_HARDEN_END + 1.5;
    const T_EXIT_END = T_HOLD_END + 1.7;

    // ===== Sparkle (small star burst at newly-claimed nodes) =====
    const sparkles = [];
    const tipGlows = []; // soft radial bursts at growing tips
    const spawnSparkle = (x, y) => {
      sparkles.push({ x, y, t0: 0, rot: Math.random() * Math.PI * 2 });
      tipGlows.push({ x, y, t0: 0 });
    };
    const drawTipGlows = (dt) => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = tipGlows.length - 1; i >= 0; i--) {
        const g = tipGlows[i];
        g.t0 += dt;
        if (g.t0 > 0.42) { tipGlows.splice(i, 1); continue; }
        const k = g.t0 / 0.42;
        const a = (1 - k) * 0.55;
        const r = nameFs * (0.08 + k * 0.32);
        const grad = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, r);
        grad.addColorStop(0, `rgba(255,255,255,${a})`);
        grad.addColorStop(0.5, `rgba(200,230,255,${a * 0.5})`);
        grad.addColorStop(1, "rgba(180,220,255,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(g.x - r, g.y - r, r * 2, r * 2);
      }
      ctx.restore();
    };

    // ===== Ambient frost particles drifting in background =====
    const frost = [];
    const FROST_N = Math.round((W * H) / 28000);
    for (let i = 0; i < FROST_N; i++) {
      frost.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 6,
        r: 0.5 + Math.random() * 0.9,
        twPhase: Math.random() * Math.PI * 2,
        twRate: 1 + Math.random() * 2,
      });
    }
    const updateFrost = (dt) => {
      for (const f of frost) {
        f.x += f.vx * dt;
        f.y += f.vy * dt;
        if (f.x < -5) f.x = W + 5;
        if (f.x > W + 5) f.x = -5;
        if (f.y < -5) f.y = H + 5;
        if (f.y > H + 5) f.y = -5;
      }
    };
    const drawFrost = (now, alpha) => {
      if (alpha <= 0.01) return;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const f of frost) {
        const tw = (Math.sin(now * 0.001 * f.twRate + f.twPhase) + 1) * 0.5;
        const a = alpha * (0.12 + tw * 0.4);
        ctx.globalAlpha = a;
        ctx.fillStyle = "rgba(220,235,250,1)";
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // Diamond-shaped crystal node renderer (facet feel vs plain dot)
    const drawCrystalNode = (x, y, size, alpha, isPeriod) => {
      const color = isPeriod ? "255,180,90" : "245,250,255";
      ctx.fillStyle = `rgba(${color},${alpha})`;
      // Rotated square / diamond shape
      ctx.beginPath();
      ctx.moveTo(x, y - size);
      ctx.lineTo(x + size * 0.75, y);
      ctx.lineTo(x, y + size);
      ctx.lineTo(x - size * 0.75, y);
      ctx.closePath();
      ctx.fill();
      // Inner highlight (top half)
      if (alpha > 0.7) {
        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.6})`;
        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.lineTo(x + size * 0.35, y - size * 0.15);
        ctx.lineTo(x - size * 0.35, y - size * 0.15);
        ctx.closePath();
        ctx.fill();
      }
    };

    // ===== Rendering helpers =====
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

    // Crystal seed at center (faint persistent glow)
    const drawSeed = (alpha) => {
      if (alpha <= 0.01) return;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = alpha;
      const g = ctx.createRadialGradient(seedX, seedY, 0, seedX, seedY, nameFs * 0.4);
      g.addColorStop(0, "rgba(255,255,255,0.45)");
      g.addColorStop(0.5, "rgba(200,230,255,0.20)");
      g.addColorStop(1, "rgba(150,200,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(seedX - nameFs * 0.4, seedY - nameFs * 0.4, nameFs * 0.8, nameFs * 0.8);
      ctx.fillStyle = "rgba(255,255,255,1)";
      ctx.beginPath();
      ctx.arc(seedX, seedY, 1.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // ===== Shatter shards (exit) =====
    // Cluster-based: 5 fracture epicenters with their own impulse vectors → shards in groups
    let shards = [];
    let cracks = []; // pre-shatter stress lines: {x1,y1,x2,y2,age}
    const buildShards = () => {
      // 5 fracture epicenters distributed across letter row
      const epis = [];
      for (let k = 0; k < 5; k++) {
        const tx = lerp(seedX - totalW * 0.5, seedX + totalW * 0.5, k / 4);
        const ty = cy + (Math.random() - 0.5) * nameFs * 0.4;
        const ang = Math.random() * Math.PI * 2;
        const force = 220 + Math.random() * 220;
        epis.push({ x: tx, y: ty, vx: Math.cos(ang) * force, vy: Math.sin(ang) * force });
      }
      shards = nodes.map((n) => {
        // Assign to nearest epicenter
        let bestIdx = 0, bestD2 = Infinity;
        for (let k = 0; k < epis.length; k++) {
          const ddx = n.x - epis[k].x, ddy = n.y - epis[k].y;
          const d2 = ddx * ddx + ddy * ddy;
          if (d2 < bestD2) { bestD2 = d2; bestIdx = k; }
        }
        const ep = epis[bestIdx];
        // Velocity = epicenter's vx + radial outward + random kick
        const dx = n.x - ep.x, dy = n.y - ep.y;
        const r = Math.sqrt(dx * dx + dy * dy) || 1;
        const radSp = 80 + Math.random() * 220;
        return {
          x: n.x, y: n.y,
          vx: ep.vx * 0.35 + (dx / r) * radSp + (Math.random() - 0.5) * 60,
          vy: ep.vy * 0.35 + (dy / r) * radSp + (Math.random() - 0.5) * 60,
          rot: Math.random() * Math.PI * 2,
          rotV: (Math.random() - 0.5) * 9,
          len: 2.2 + Math.random() * 4.0,
          color: n.isPeriod ? "255,170,80" : "245,250,255",
        };
      });
    };
    const spawnCracks = () => {
      // Few jagged stress cracks across the letter band
      const crackCount = 7;
      for (let k = 0; k < crackCount; k++) {
        const cx0 = seedX + (Math.random() - 0.5) * totalW;
        const cy0 = cy + (Math.random() - 0.5) * nameFs * 0.3;
        const ang = (Math.random() - 0.5) * 1.4;
        const cx1 = cx0 + Math.cos(ang) * nameFs * (2 + Math.random() * 1.5);
        const cy1 = cy0 + Math.sin(ang) * nameFs * (2 + Math.random() * 1.5);
        cracks.push({ x1: cx0, y1: cy0, x2: cx1, y2: cy1, age: 0 });
      }
    };

    // ===== Main loop =====
    const START = performance.now();
    let raf;
    let finished = false;
    let bgTriggered = false;
    let lastTime = START;
    let shardsBuilt = false;
    // Trail buffer: dim previous content slightly to leave fading crystal arcs
    let firstFrame = true;

    const draw = (now) => {
      const t = (now - START) / 1000;
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      // During growth: dim trail effect (slow fade) keeps crystal lines persistent.
      // During hold + exit: hard clear.
      if (t < T_GROW_END && !firstFrame) {
        // very slight dim — crystals stay bright
        ctx.fillStyle = "rgba(0,0,0,0.04)";
        ctx.fillRect(0, 0, W, H);
      } else {
        ctx.clearRect(0, 0, W, H);
      }
      firstFrame = false;

      // Ambient frost (always)
      updateFrost(dt);
      let frostAlpha = clamp(t / 0.6, 0, 1);
      if (t > T_HOLD_END) frostAlpha *= Math.max(0, 1 - (t - T_HOLD_END) / (T_EXIT_END - T_HOLD_END));
      drawFrost(now, frostAlpha);

      // Divider + tagline
      let divA = 0, tagA = 0;
      if (t < T_HOLD_END) {
        divA = clamp((t - T_HARDEN_END) / 0.35, 0, 1);
        tagA = clamp((t - T_HARDEN_END - 0.1) / 0.4, 0, 1);
      } else {
        const ep = (t - T_HOLD_END) / (T_EXIT_END - T_HOLD_END);
        divA = Math.max(0, 1 - ep * 1.4);
        tagA = Math.max(0, 1 - ep * 1.6);
      }
      drawDivider(divA);
      drawTagline(tagA);

      if (t < T_GROW_END) {
        // GROW: render edges + nodes that have been claimed
        // Newly claimed this frame → spawn sparkle
        // Pass 1: primary edges with 3-layer glow (wide halo → mid → bright core)
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.lineCap = "round";

        // First pass: wide halo for all claimed primary edges
        ctx.strokeStyle = "rgba(180,220,255,0.18)";
        ctx.lineWidth = Math.max(2, nameFs * 0.055);
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          if (t < n.claimT) break;
          if (!n.crystallized) {
            n.crystallized = true;
            n.claimWallT = t;
            spawnSparkle(n.x, n.y);
          }
          ctx.beginPath();
          ctx.moveTo(n.parentX, n.parentY);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
        // Second pass: mid band
        ctx.strokeStyle = "rgba(215,235,255,0.55)";
        ctx.lineWidth = Math.max(1.2, nameFs * 0.025);
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          if (t < n.claimT) break;
          ctx.beginPath();
          ctx.moveTo(n.parentX, n.parentY);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
        // Third pass: bright core
        ctx.strokeStyle = "rgba(255,255,255,0.95)";
        ctx.lineWidth = Math.max(0.6, nameFs * 0.010);
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          if (t < n.claimT) break;
          ctx.beginPath();
          ctx.moveTo(n.parentX, n.parentY);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
        // Secondary edges — thinner, simpler
        ctx.strokeStyle = "rgba(160,200,250,0.36)";
        ctx.lineWidth = Math.max(0.4, nameFs * 0.009);
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          if (t < n.claimT) break;
          if (n.hasSecondary) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n.secondaryX, n.secondaryY);
            ctx.stroke();
          }
        }

        // Diamond crystal nodes — pulse on recent claim
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          if (!n.crystallized) continue;
          const age = t - n.claimWallT;
          const recent = age < 0.5 ? (1 - age / 0.5) : 0;
          const baseSize = n.isPeriod ? 1.8 : 1.4;
          const size = baseSize + recent * 1.6;
          const a = 0.7 + recent * 0.3;
          drawCrystalNode(n.x, n.y, size, a, n.isPeriod);
        }
        ctx.restore();
        ctx.globalAlpha = 1;

        // Tip glows under nodes (drawn before sparkles for layering)
        drawTipGlows(dt);

        // Seed glow — fades as growth completes
        const seedAlpha = Math.max(0, 1 - t / T_GROW_END);
        drawSeed(0.6 + seedAlpha * 0.4);

        // Sparkles — 6-pointed star burst at newly-claimed crystal nodes
        for (let i = sparkles.length - 1; i >= 0; i--) {
          const s = sparkles[i];
          s.t0 += dt;
          if (s.t0 > 0.30) { sparkles.splice(i, 1); continue; }
          const sp = s.t0 / 0.30;
          const a = Math.pow(1 - sp, 1.4) * 0.95;
          const len = 4 + sp * 12;
          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          ctx.strokeStyle = `rgba(255,255,255,${a})`;
          ctx.lineWidth = 0.7;
          ctx.translate(s.x, s.y);
          ctx.rotate(s.rot);
          // 6 rays
          for (let k = 0; k < 3; k++) {
            const ang = (k / 3) * Math.PI;
            const cx2 = Math.cos(ang), sy2 = Math.sin(ang);
            ctx.beginPath();
            ctx.moveTo(-cx2 * len, -sy2 * len);
            ctx.lineTo(cx2 * len, sy2 * len);
            ctx.stroke();
          }
          // Tiny bright point
          ctx.fillStyle = `rgba(255,255,255,${a})`;
          ctx.beginPath();
          ctx.arc(0, 0, 1.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      } else if (t < T_HARDEN_END) {
        // HARDEN: crystal lattice fades into crisp letterCanvas + bloom flash
        const hp = clamp((t - T_GROW_END) / (T_HARDEN_END - T_GROW_END), 0, 1);
        const e = easeOutCubic(hp);

        // Bloom flash bell — soft full-area white pulse on crystallize moment
        const bloomA = Math.sin(hp * Math.PI) * 0.20;
        if (bloomA > 0.005) {
          ctx.save();
          ctx.fillStyle = `rgba(255,255,255,${bloomA})`;
          ctx.fillRect(0, 0, W, H);
          ctx.restore();
        }

        // Lattice fades out — keep 3-layer glow style
        ctx.save();
        ctx.globalAlpha = 1 - e;
        ctx.globalCompositeOperation = "lighter";
        ctx.lineCap = "round";
        // halo
        ctx.strokeStyle = "rgba(180,220,255,0.16)";
        ctx.lineWidth = Math.max(2, nameFs * 0.05);
        for (const n of nodes) {
          ctx.beginPath(); ctx.moveTo(n.parentX, n.parentY); ctx.lineTo(n.x, n.y); ctx.stroke();
        }
        // core
        ctx.strokeStyle = "rgba(255,255,255,0.9)";
        ctx.lineWidth = Math.max(0.6, nameFs * 0.012);
        for (const n of nodes) {
          ctx.beginPath(); ctx.moveTo(n.parentX, n.parentY); ctx.lineTo(n.x, n.y); ctx.stroke();
        }
        for (const n of nodes) {
          const baseSize = n.isPeriod ? 1.8 : 1.4;
          drawCrystalNode(n.x, n.y, baseSize, 0.9, n.isPeriod);
        }
        ctx.restore();
        // Crisp letterCanvas fades in
        ctx.save();
        ctx.globalAlpha = e;
        ctx.drawImage(letterCanvas, 0, 0, W, H);
        ctx.restore();
        ctx.globalAlpha = 1;
      } else if (t < T_HOLD_END) {
        // HOLD: clean text + subtle ambient shimmer overlay
        ctx.drawImage(letterCanvas, 0, 0, W, H);
        // Slow shimmer pulse on letters (very subtle additive lighter blip every ~3s)
        const hp = t - T_HARDEN_END;
        const shimmer = Math.max(0, Math.sin(hp * 2.1) - 0.92) * 6; // 0..0.48 occasionally
        if (shimmer > 0.01) {
          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          ctx.globalAlpha = shimmer * 0.25;
          ctx.drawImage(letterCanvas, 0, 0, W, H);
          ctx.restore();
        }
      } else {
        // SHATTER exit:
        //  0.0-0.30s: pre-shatter stress cracks appear across letters (white jagged lines)
        //  0.30s: WHITE FLASH bell + spawn shards
        //  0.30s-end: shards fly out in 5 clusters, letterCanvas fades, fade out
        const exitLocal = t - T_HOLD_END;
        const exitDur = T_EXIT_END - T_HOLD_END;
        const PRE_DUR = 0.30;
        if (exitLocal < PRE_DUR) {
          // Pre-shatter — letters still visible with cracks forming
          ctx.drawImage(letterCanvas, 0, 0, W, H);
          if (cracks.length === 0) spawnCracks();
          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          ctx.strokeStyle = `rgba(255,255,255,${clamp(exitLocal / 0.10, 0, 1) * 0.9})`;
          ctx.lineWidth = Math.max(0.7, nameFs * 0.018);
          ctx.lineCap = "round";
          for (const c of cracks) {
            ctx.beginPath();
            ctx.moveTo(c.x1, c.y1);
            ctx.lineTo(c.x2, c.y2);
            ctx.stroke();
          }
          ctx.restore();
        } else {
          if (!shardsBuilt) {
            buildShards();
            // Each shard gets prevX/prevY for trail
            for (const s of shards) { s.prevX = s.x; s.prevY = s.y; }
            // Spawn frost-dust burst from each fracture epicenter (one-shot)
            shardsBuilt = true;
          }
          const shatterLocal = exitLocal - PRE_DUR;
          const shatterDur = exitDur - PRE_DUR;

          // White flash bell at moment of shatter
          if (shatterLocal < 0.32) {
            const fp = shatterLocal / 0.32;
            const fa = Math.sin(fp * Math.PI) * 0.55;
            ctx.save();
            ctx.fillStyle = `rgba(255,255,255,${fa})`;
            ctx.fillRect(0, 0, W, H);
            ctx.restore();
          }

          // letterCanvas fades very quickly at shatter
          const lcFade = clamp(shatterLocal / 0.18, 0, 1);
          if (lcFade < 1) {
            ctx.save();
            ctx.globalAlpha = 1 - lcFade;
            ctx.drawImage(letterCanvas, 0, 0, W, H);
            ctx.restore();
          }

          const fadeMul = Math.max(0, 1 - shatterLocal / shatterDur);
          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          ctx.lineCap = "round";

          // First pass: trailing streaks (motion blur) — line from prevX/prevY to current
          ctx.strokeStyle = `rgba(220,235,255,${fadeMul * 0.35})`;
          ctx.lineWidth = Math.max(0.6, nameFs * 0.012);
          for (const s of shards) {
            ctx.beginPath();
            ctx.moveTo(s.prevX, s.prevY);
            ctx.lineTo(s.x, s.y);
            ctx.stroke();
          }

          // Update + draw shards (sharp line segments)
          ctx.lineWidth = 1.6;
          for (const s of shards) {
            s.prevX = s.x;
            s.prevY = s.y;
            s.vx *= 1 - 0.5 * dt;
            s.vy *= 1 - 0.5 * dt;
            s.x += s.vx * dt;
            s.y += s.vy * dt;
            s.rot += s.rotV * dt;
            ctx.strokeStyle = `rgba(${s.color},${fadeMul})`;
            ctx.save();
            ctx.translate(s.x, s.y);
            ctx.rotate(s.rot);
            ctx.beginPath();
            ctx.moveTo(-s.len, 0);
            ctx.lineTo(s.len, 0);
            ctx.stroke();
            ctx.restore();
          }
          ctx.restore();

          // Secondary fracture pulse — at shatterLocal=0.28s, second flash
          if (shatterLocal > 0.25 && shatterLocal < 0.55) {
            const sp = (shatterLocal - 0.25) / 0.30;
            const sa = Math.sin(sp * Math.PI) * 0.18;
            ctx.save();
            ctx.fillStyle = `rgba(255,255,255,${sa})`;
            ctx.fillRect(0, 0, W, H);
            ctx.restore();
          }
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

export default CrystalGrowthCurtain;
