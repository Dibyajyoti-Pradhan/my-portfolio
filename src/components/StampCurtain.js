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
const easeInCubic = (t) => t * t * t;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeOutBack = (t) => {
  const c1 = 1.70158, c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

const StampCurtain = ({ onFinish }) => {
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

    // Stamp dimensions — wider than name with margin
    const STAMP_W = totalW + nameFs * 2.0;
    const STAMP_H = nameFs * 2.2;
    const STAMP_HANDLE_H = nameFs * 1.4;
    const stampCx = W / 2;

    // ===== Timing =====
    const T_DESCEND_END = 0.55;
    const T_IMPACT_END = T_DESCEND_END + 0.15;
    const T_LIFT_END = T_IMPACT_END + 0.65;
    const T_HOLD_END = T_LIFT_END + 1.4;
    const T_EXIT_END = T_HOLD_END + 1.0;

    // ===== Ink splats (irregular bezier blobs + spray droplets) =====
    // Period x is the last targetX (".")
    const periodX = targetX[targetX.length - 1];
    const inkColorAt = (x) => {
      // Within ~0.6 * nameFs of period x → orange ink; else white
      const d = Math.abs(x - periodX);
      if (d < nameFs * 0.5) return "255,170,80";
      // Soft blend zone
      if (d < nameFs * 0.9) {
        const k = (d - nameFs * 0.5) / (nameFs * 0.4);
        // Interpolate between orange and white
        const r = Math.round(lerp(255, 255, k));
        const g = Math.round(lerp(170, 255, k));
        const b = Math.round(lerp(80, 255, k));
        return `${r},${g},${b}`;
      }
      return "255,255,255";
    };

    const splats = [];      // bigger blobs (bezier-distorted)
    const droplets = [];    // thin spray droplets
    const spawnSplats = () => {
      // Central larger pool — biggest blobs near impact center
      for (let i = 0; i < 6; i++) {
        const ang = Math.random() * Math.PI * 2;
        const dist = Math.random() * STAMP_W * 0.12;
        const sx = stampCx + Math.cos(ang) * dist;
        const sy = cy + Math.sin(ang) * dist * 0.4;
        // Bezier blob: 7-9 vertices around center with random radius
        const verts = 7 + (Math.random() * 3 | 0);
        const baseR = nameFs * (0.10 + Math.random() * 0.10);
        const pts = [];
        for (let v = 0; v < verts; v++) {
          const va = (v / verts) * Math.PI * 2;
          const vr = baseR * (0.55 + Math.random() * 0.9);
          pts.push({ a: va, r: vr });
        }
        splats.push({
          x: sx, y: sy, pts,
          color: inkColorAt(sx),
          alpha: 0.55 + Math.random() * 0.35,
        });
      }
      // Mid-distance satellite blobs
      for (let i = 0; i < 14; i++) {
        const ang = Math.random() * Math.PI * 2;
        const dist = nameFs * 0.4 + Math.random() * STAMP_W * 0.35;
        const sx = stampCx + Math.cos(ang) * dist;
        const sy = cy + Math.sin(ang) * dist * 0.5;
        const verts = 6 + (Math.random() * 3 | 0);
        const baseR = nameFs * (0.03 + Math.random() * 0.06);
        const pts = [];
        for (let v = 0; v < verts; v++) {
          const va = (v / verts) * Math.PI * 2;
          const vr = baseR * (0.5 + Math.random() * 1.1);
          pts.push({ a: va, r: vr });
        }
        splats.push({
          x: sx, y: sy, pts,
          color: inkColorAt(sx),
          alpha: 0.35 + Math.random() * 0.45,
        });
      }
      // Thin spray droplets — radiate outward
      for (let i = 0; i < 60; i++) {
        const ang = Math.random() * Math.PI * 2;
        // Far-flung droplets with bias toward horizontal
        const dist = nameFs * 0.5 + Math.random() * STAMP_W * 0.55;
        const sx = stampCx + Math.cos(ang) * dist;
        const sy = cy + Math.sin(ang) * dist * (0.35 + Math.random() * 0.4);
        droplets.push({
          x: sx, y: sy,
          r: 0.5 + Math.random() * 1.6,
          color: inkColorAt(sx),
          alpha: 0.35 + Math.random() * 0.45,
        });
      }
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
    // Letters appear like ink bleeding out radially from each letter's center.
    // `bleed`: 0..1 — 0 = nothing, 1 = fully formed.
    const drawLetters = (alpha, squashY, bleed = 1) => {
      if (alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.font = `900 ${nameFs}px ${sansStack}`;
      try { ctx.letterSpacing = "-1.5px"; } catch (_) {}
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.translate(stampCx, cy);
      ctx.scale(1, squashY);
      ctx.translate(-stampCx, -cy);
      const b = clamp(bleed, 0, 1);
      for (let i = 0; i < fullName.length; i++) {
        ctx.save();
        // Stagger bleed across letters (left to right) for organic feel
        const stagger = i / fullName.length;
        const lb = clamp((b - stagger * 0.25) / (1 - stagger * 0.25 + 0.001), 0, 1);
        if (lb <= 0) { ctx.restore(); continue; }
        const letterAlpha = Math.pow(lb, 0.6); // alpha ramp
        const letterScale = lerp(0.6, 1.0, easeOutCubic(lb));
        ctx.globalAlpha = alpha * letterAlpha;
        // Pivot at letter center for radial scale
        ctx.translate(targetX[i], cy);
        ctx.scale(letterScale, letterScale);
        ctx.translate(-targetX[i], -cy);
        ctx.fillStyle = fullName[i] === "." ? ORANGE : WHITE;
        ctx.fillText(fullName[i], targetX[i], cy);
        ctx.restore();
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // Build an irregular bezier blob path from precomputed vertex polar points.
    const blobPath = (cx2, cy2, pts) => {
      ctx.beginPath();
      const n = pts.length;
      // Cartesian points
      const xy = pts.map(p => ({ x: cx2 + Math.cos(p.a) * p.r, y: cy2 + Math.sin(p.a) * p.r }));
      // Use Catmull-Rom -> Bezier-ish smoothing
      ctx.moveTo((xy[n - 1].x + xy[0].x) / 2, (xy[n - 1].y + xy[0].y) / 2);
      for (let i = 0; i < n; i++) {
        const p0 = xy[i];
        const p1 = xy[(i + 1) % n];
        const mx = (p0.x + p1.x) / 2;
        const my = (p0.y + p1.y) / 2;
        ctx.quadraticCurveTo(p0.x, p0.y, mx, my);
      }
      ctx.closePath();
    };
    const drawSplats = (alphaMul) => {
      // Bezier blobs
      for (const s of splats) {
        const a = s.alpha * alphaMul;
        if (a <= 0.01) continue;
        ctx.fillStyle = `rgba(${s.color},${a})`;
        blobPath(s.x, s.y, s.pts);
        ctx.fill();
      }
      // Thin spray droplets
      for (const d of droplets) {
        const a = d.alpha * alphaMul;
        if (a <= 0.01) continue;
        ctx.fillStyle = `rgba(${d.color},${a})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // ===== Paper grain texture (drawn once into offscreen canvas, reused) =====
    const paperCanvas = document.createElement("canvas");
    paperCanvas.width = W;
    paperCanvas.height = H;
    {
      const pctx = paperCanvas.getContext("2d");
      const img = pctx.createImageData(W, H);
      const data = img.data;
      // Sparse low-alpha gray dots — cardstock-like noise
      // Plus a faint warm vignette
      const cxn = W / 2, cyn = H / 2;
      const maxR = Math.sqrt(W * W + H * H) / 2;
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const i = (y * W + x) * 4;
          // Sparse noise (only ~6% of pixels get a tiny speck)
          const r = Math.random();
          if (r < 0.06) {
            const v = 90 + Math.random() * 80 | 0;
            // Warm tint for paper feel
            data[i] = v + 8;
            data[i + 1] = v + 3;
            data[i + 2] = v - 5;
            data[i + 3] = 14 + Math.random() * 18;
          } else {
            // Very faint warm wash + subtle vignette
            const dx = x - cxn, dy = y - cyn;
            const dist = Math.sqrt(dx * dx + dy * dy) / maxR;
            data[i] = 60;
            data[i + 1] = 52;
            data[i + 2] = 44;
            data[i + 3] = Math.max(0, Math.round(8 * dist - 1));
          }
        }
      }
      pctx.putImageData(img, 0, 0);
    }
    const drawPaper = (alphaMul = 1) => {
      ctx.save();
      ctx.globalAlpha = alphaMul;
      ctx.drawImage(paperCanvas, 0, 0, W, H);
      ctx.restore();
    };

    // Deterministic pseudo-random for stamp detail (stable across frames)
    const srand = (seed) => {
      let s = seed | 0;
      return () => {
        s = (s * 1664525 + 1013904223) | 0;
        return ((s >>> 0) % 100000) / 100000;
      };
    };
    const stampRng = srand(7331);
    // Pre-compute chip notches on pad edges (top/bottom)
    const chips = [];
    {
      const r = srand(4242);
      const count = 14;
      for (let i = 0; i < count; i++) {
        chips.push({
          side: r() > 0.5 ? -1 : 1, // -1 top, 1 bottom
          xFrac: r(),                // 0..1 along pad width
          w: nameFs * (0.04 + r() * 0.10),
          depth: nameFs * (0.03 + r() * 0.07),
        });
      }
    }
    // Pre-compute handle ink stains
    const handleStains = [];
    {
      const r = srand(9182);
      for (let i = 0; i < 7; i++) {
        handleStains.push({
          xFrac: r(),
          yFrac: r(),
          rx: nameFs * (0.05 + r() * 0.12),
          ry: nameFs * (0.03 + r() * 0.08),
          rot: r() * Math.PI,
          a: 0.10 + r() * 0.25,
        });
      }
    }

    // Stamp sprite: handle (wood top) + pad (rubber bottom with text engraving)
    // tilt = radians; pos relative to pivot at center of pad face
    const drawStamp = (y, squashY = 1, shake = 0, tilt = 0) => {
      ctx.save();
      ctx.translate(stampCx + shake, y);
      if (tilt) ctx.rotate(tilt);
      ctx.scale(1, squashY);

      // Drop shadow on canvas (subtle, softer with proximity hint via squash)
      ctx.fillStyle = `rgba(0,0,0,${0.35 + 0.15 * squashY})`;
      ctx.fillRect(-STAMP_W / 2 + 6, STAMP_H / 2 + 4, STAMP_W, 10);

      const handleW = STAMP_W * 0.55;
      const handleTop = -STAMP_H / 2 - STAMP_HANDLE_H;

      // ---- Handle (wood) with grain ----
      const wGrad = ctx.createLinearGradient(-handleW / 2, 0, handleW / 2, 0);
      wGrad.addColorStop(0, "#4a3018");
      wGrad.addColorStop(0.15, "#7a5230");
      wGrad.addColorStop(0.5, "#a87445");
      wGrad.addColorStop(0.85, "#7a5230");
      wGrad.addColorStop(1, "#3e2614");
      ctx.fillStyle = wGrad;
      ctx.fillRect(-handleW / 2, handleTop, handleW, STAMP_HANDLE_H);

      // Wood grain streaks
      ctx.save();
      ctx.beginPath();
      ctx.rect(-handleW / 2, handleTop, handleW, STAMP_HANDLE_H);
      ctx.clip();
      const grainR = srand(1717);
      ctx.strokeStyle = "rgba(40,22,8,0.35)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 9; i++) {
        const yy = handleTop + STAMP_HANDLE_H * grainR();
        ctx.beginPath();
        ctx.moveTo(-handleW / 2, yy);
        ctx.bezierCurveTo(
          -handleW / 4, yy + (grainR() - 0.5) * 3,
          handleW / 4, yy + (grainR() - 0.5) * 3,
          handleW / 2, yy + (grainR() - 0.5) * 2
        );
        ctx.stroke();
      }
      // Ink stains on handle (years of use)
      for (const st of handleStains) {
        ctx.save();
        ctx.translate(-handleW / 2 + handleW * st.xFrac, handleTop + STAMP_HANDLE_H * st.yFrac);
        ctx.rotate(st.rot);
        ctx.fillStyle = `rgba(8,8,12,${st.a})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, st.rx, st.ry, 0, 0, Math.PI * 2);
        ctx.fill();
        // Tiny orange ink fleck
        if (st.xFrac > 0.6) {
          ctx.fillStyle = `rgba(255,122,26,${st.a * 0.6})`;
          ctx.beginPath();
          ctx.ellipse(st.rx * 0.4, -st.ry * 0.3, st.rx * 0.25, st.ry * 0.2, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      ctx.restore();

      // Handle top rounded cap highlight
      ctx.fillStyle = "rgba(255,225,180,0.18)";
      ctx.fillRect(-handleW / 2, handleTop, handleW, 3);
      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.fillRect(-handleW / 2, handleTop + STAMP_HANDLE_H - 2, handleW, 2);

      // Brand label on handle ("DP")
      const labelW = handleW * 0.42;
      const labelH = STAMP_HANDLE_H * 0.32;
      const labelX = -labelW / 2;
      const labelY = handleTop + STAMP_HANDLE_H * 0.32;
      const lblGrad = ctx.createLinearGradient(0, labelY, 0, labelY + labelH);
      lblGrad.addColorStop(0, "#f5ead0");
      lblGrad.addColorStop(1, "#d8c79a");
      ctx.fillStyle = lblGrad;
      ctx.fillRect(labelX, labelY, labelW, labelH);
      ctx.strokeStyle = "rgba(60,40,20,0.7)";
      ctx.lineWidth = 1;
      ctx.strokeRect(labelX + 0.5, labelY + 0.5, labelW - 1, labelH - 1);
      // Inner thin border
      ctx.strokeStyle = "rgba(60,40,20,0.4)";
      ctx.strokeRect(labelX + 3, labelY + 3, labelW - 6, labelH - 6);
      // "DP" monogram
      ctx.fillStyle = "#3a2410";
      ctx.font = `900 ${Math.round(labelH * 0.55)}px ${sansStack}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      try { ctx.letterSpacing = "1px"; } catch (_) {}
      ctx.fillText("DP", 0, labelY + labelH / 2 + 1);
      // Tiny ink smudge on label corner
      ctx.fillStyle = "rgba(20,10,5,0.25)";
      ctx.beginPath();
      ctx.ellipse(labelX + labelW - 4, labelY + 3, 3, 2, 0.3, 0, Math.PI * 2);
      ctx.fill();

      // ---- Connector (metal collar with screws) ----
      const connH = nameFs * 0.28;
      const connX = -STAMP_W / 2 + nameFs * 0.15;
      const connW = STAMP_W - nameFs * 0.3;
      const collarGrad = ctx.createLinearGradient(0, -STAMP_H / 2 - connH, 0, -STAMP_H / 2);
      collarGrad.addColorStop(0, "#5a5a62");
      collarGrad.addColorStop(0.45, "#9a9aa4");
      collarGrad.addColorStop(0.55, "#7a7a82");
      collarGrad.addColorStop(1, "#2c2c30");
      ctx.fillStyle = collarGrad;
      ctx.fillRect(connX, -STAMP_H / 2 - connH, connW, connH);
      // Thin metal highlight line
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      ctx.fillRect(connX, -STAMP_H / 2 - connH + 1, connW, 1);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(connX, -STAMP_H / 2 - 1, connW, 1);
      // Screw fasteners (4)
      const screwR = nameFs * 0.09;
      const screwY = -STAMP_H / 2 - connH / 2;
      const screwXs = [connX + screwR * 2, connX + connW * 0.35, connX + connW * 0.65, connX + connW - screwR * 2];
      for (const sx of screwXs) {
        // Screw body
        const sg = ctx.createRadialGradient(sx - screwR * 0.3, screwY - screwR * 0.3, screwR * 0.1, sx, screwY, screwR);
        sg.addColorStop(0, "#d8d8e0");
        sg.addColorStop(0.6, "#80808a");
        sg.addColorStop(1, "#2a2a30");
        ctx.fillStyle = sg;
        ctx.beginPath();
        ctx.arc(sx, screwY, screwR, 0, Math.PI * 2);
        ctx.fill();
        // Slot
        ctx.strokeStyle = "rgba(10,10,12,0.85)";
        ctx.lineWidth = Math.max(1, screwR * 0.25);
        ctx.beginPath();
        ctx.moveTo(sx - screwR * 0.7, screwY - screwR * 0.05);
        ctx.lineTo(sx + screwR * 0.7, screwY + screwR * 0.05);
        ctx.stroke();
      }

      // ---- Rubber pad (with chipped edges) ----
      const padGrad = ctx.createLinearGradient(0, -STAMP_H / 2, 0, STAMP_H / 2);
      padGrad.addColorStop(0, "#2a2a2c");
      padGrad.addColorStop(0.5, "#1a1a1c");
      padGrad.addColorStop(1, "#070708");
      ctx.fillStyle = padGrad;

      // Build pad path with chip notches along top and bottom edges
      const padL = -STAMP_W / 2, padR = STAMP_W / 2;
      const padT = -STAMP_H / 2, padB = STAMP_H / 2;
      ctx.beginPath();
      ctx.moveTo(padL, padT);
      // Top edge with chips (side = -1)
      const topChips = chips.filter(c => c.side === -1).sort((a, b) => a.xFrac - b.xFrac);
      for (const c of topChips) {
        const cx = padL + STAMP_W * c.xFrac;
        ctx.lineTo(cx - c.w / 2, padT);
        ctx.lineTo(cx, padT + c.depth);
        ctx.lineTo(cx + c.w / 2, padT);
      }
      ctx.lineTo(padR, padT);
      ctx.lineTo(padR, padB);
      // Bottom edge with chips (side = 1), traverse right-to-left
      const botChips = chips.filter(c => c.side === 1).sort((a, b) => b.xFrac - a.xFrac);
      for (const c of botChips) {
        const cx = padL + STAMP_W * c.xFrac;
        ctx.lineTo(cx + c.w / 2, padB);
        ctx.lineTo(cx, padB - c.depth);
        ctx.lineTo(cx - c.w / 2, padB);
      }
      ctx.lineTo(padL, padB);
      ctx.closePath();
      ctx.fill();

      // Worn rubber speckle (tiny lighter dots)
      ctx.save();
      ctx.beginPath();
      ctx.rect(padL, padT, STAMP_W, STAMP_H);
      ctx.clip();
      const spR = srand(2929);
      for (let i = 0; i < 24; i++) {
        const sx = padL + STAMP_W * spR();
        const sy = padT + STAMP_H * spR();
        const sr = 0.4 + spR() * 1.2;
        ctx.fillStyle = `rgba(${80 + spR() * 60 | 0},${80 + spR() * 60 | 0},${80 + spR() * 60 | 0},${0.18 + spR() * 0.25})`;
        ctx.beginPath();
        ctx.arc(sx, sy, sr, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Top highlight on pad
      ctx.fillStyle = "rgba(255,255,255,0.06)";
      ctx.fillRect(padL, padT, STAMP_W, 2);
      // Bottom face shadow (catches light off-axis)
      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.fillRect(padL, padB - 3, STAMP_W, 3);

      // (no engraved text on stamp face — plain rubber pad)
      ctx.restore();
    };

    // ===== Impact rings (concentric expanding compression rings) =====
    // Spawned once at impact start
    const rings = [];
    const spawnRings = (startTime) => {
      // 3 rings staggered slightly for layered ka-thunk feel
      rings.push({ t0: startTime, dur: 0.55, maxR: STAMP_W * 0.75, baseW: 3 });
      rings.push({ t0: startTime + 0.05, dur: 0.50, maxR: STAMP_W * 0.55, baseW: 2 });
      rings.push({ t0: startTime + 0.10, dur: 0.45, maxR: STAMP_W * 0.40, baseW: 2 });
    };
    const drawRings = (now) => {
      for (const r of rings) {
        const local = now - r.t0;
        if (local <= 0 || local >= r.dur) continue;
        const p = local / r.dur;
        const radius = r.maxR * easeOutCubic(p);
        const alpha = (1 - p) * 0.45;
        ctx.save();
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = Math.max(0.5, r.baseW * (1 - p * 0.5));
        ctx.beginPath();
        ctx.ellipse(stampCx, cy, radius, radius * 0.4, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    };

    // ===== Residual ink drips (drip back down from stamp face after lift) =====
    // Each drip: starting x, time spawned, accumulates fall length
    const drips = [];
    let dripsSpawned = false;
    const spawnDrips = (spawnTime) => {
      const r = srand(5151);
      // 5-8 small drips distributed along stamp face width, biased to where letters are
      const count = 6;
      for (let i = 0; i < count; i++) {
        const xJitter = (r() - 0.5) * STAMP_W * 0.75;
        const x = stampCx + xJitter;
        drips.push({
          x,
          t0: spawnTime + r() * 0.25,         // staggered spawn
          fallDur: 0.5 + r() * 0.45,
          fallDist: nameFs * (0.35 + r() * 0.55),
          radius: 1.2 + r() * 1.6,
          color: inkColorAt(x),
          alpha: 0.55 + r() * 0.3,
        });
      }
    };
    // Draw drips relative to the stamp's current Y position (drips hang from pad face)
    const drawDripsAttached = (now, stampPadBottomY) => {
      for (const d of drips) {
        const local = now - d.t0;
        if (local <= 0) continue;
        const p = clamp(local / d.fallDur, 0, 1);
        // Falls with gravity (squared progress)
        const yOff = d.fallDist * (p * p);
        const a = d.alpha * (1 - p * 0.35);
        if (a <= 0.02) continue;
        // Teardrop: small ellipse at tip, thin trail above
        ctx.fillStyle = `rgba(${d.color},${a})`;
        ctx.beginPath();
        ctx.ellipse(d.x, stampPadBottomY + yOff, d.radius, d.radius * 1.6, 0, 0, Math.PI * 2);
        ctx.fill();
        // Trail
        ctx.fillStyle = `rgba(${d.color},${a * 0.4})`;
        ctx.fillRect(d.x - 0.5, stampPadBottomY, 1, yOff);
      }
    };

    // ===== Main loop =====
    const START = performance.now();
    let raf;
    let finished = false;
    let bgTriggered = false;
    let splatsSpawned = false;
    let ringsSpawned = false;
    // Exit-phase splatter spray (when smudge happens, ink flies off)
    const exitSpray = [];
    let exitSpraySpawned = false;
    const spawnExitSpray = (dragDx, dragDy) => {
      const mag = Math.hypot(dragDx, dragDy) || 1;
      const ux = dragDx / mag, uy = dragDy / mag;
      for (let i = 0; i < 80; i++) {
        // Spray biased along drag direction with cone spread
        const ang = Math.atan2(uy, ux) + (Math.random() - 0.5) * 1.2;
        const speed = nameFs * (0.4 + Math.random() * 1.4);
        // Origin along letter row with jitter
        const ox = stampCx + (Math.random() - 0.5) * STAMP_W * 0.7;
        const oy = cy + (Math.random() - 0.5) * nameFs * 0.4;
        exitSpray.push({
          x: ox, y: oy,
          vx: Math.cos(ang) * speed,
          vy: Math.sin(ang) * speed - nameFs * 0.15, // slight upward bias
          r: 0.6 + Math.random() * 1.8,
          color: inkColorAt(ox),
          alpha: 0.55 + Math.random() * 0.35,
          life: 0.4 + Math.random() * 0.5,
          age0: 0, // set on first draw via dtBase
        });
      }
    };
    const drawExitSpray = (localT) => {
      // localT = seconds since spray spawn
      for (const p of exitSpray) {
        if (localT > p.life) continue;
        const k = localT / p.life;
        // Position with gravity
        const x = p.x + p.vx * localT;
        const y = p.y + p.vy * localT + 0.5 * nameFs * 6 * localT * localT;
        const a = p.alpha * (1 - k);
        if (a <= 0.02) continue;
        ctx.fillStyle = `rgba(${p.color},${a})`;
        ctx.beginPath();
        ctx.arc(x, y, p.r * (1 - k * 0.3), 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const draw = (now) => {
      const t = (now - START) / 1000;
      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);

      // ===== Camera shake (damped sine, triggered by impact + exit impact) =====
      // Compute shake offset for this frame based on which impact is active
      let camDx = 0, camDy = 0;
      // Primary impact shake (during impact window + decay tail)
      if (t >= T_DESCEND_END && t < T_IMPACT_END + 0.35) {
        const shakeLocal = t - T_DESCEND_END;
        const decay = Math.exp(-shakeLocal * 5);
        camDx = Math.sin(shakeLocal * Math.PI * 22) * nameFs * 0.12 * decay;
        camDy = Math.cos(shakeLocal * Math.PI * 28) * nameFs * 0.08 * decay;
      }
      // Exit impact shake (when second slam lands at p=0.35 of exit phase)
      if (t >= T_HOLD_END) {
        const exitLocal = t - T_HOLD_END;
        const exitDur = T_EXIT_END - T_HOLD_END;
        const exitP = exitLocal / exitDur;
        if (exitP >= 0.35 && exitP < 0.85) {
          const sl = (exitP - 0.35) * exitDur;
          const decay = Math.exp(-sl * 6);
          camDx += Math.sin(sl * Math.PI * 25) * nameFs * 0.14 * decay;
          camDy += Math.cos(sl * Math.PI * 30) * nameFs * 0.10 * decay;
        }
      }
      ctx.save();
      ctx.translate(camDx, camDy);

      // Paper grain texture (always present, faint) — drawn at base (unshaken visually fine)
      drawPaper(1);

      // Divider + tagline (appear after stamp lifts)
      let divA = 0, tagA = 0;
      if (t < T_HOLD_END) {
        divA = clamp((t - T_IMPACT_END) / 0.4, 0, 1);
        tagA = clamp((t - T_IMPACT_END - 0.1) / 0.45, 0, 1);
      } else {
        const ep = (t - T_HOLD_END) / (T_EXIT_END - T_HOLD_END);
        divA = Math.max(0, 1 - ep * 1.4);
        tagA = Math.max(0, 1 - ep * 1.6);
      }
      drawDivider(divA);
      drawTagline(tagA);

      if (t < T_DESCEND_END) {
        // Descend from above — gravity acceleration + wobble tilt
        const p = t / T_DESCEND_END;
        // Stronger near-end acceleration: pow(p, 2.4) feels like gravity
        const e = Math.pow(p, 2.4);
        const stampY = lerp(-STAMP_H / 2 - STAMP_HANDLE_H - 20, cy, e);
        // Wobble: damped sine, more pronounced early, settling near impact
        const wobble = Math.sin(p * Math.PI * 3.5) * (1 - p) * 0.06;
        // Anticipation tilt in final 12%: pre-rotate slightly opposite as if drawing back
        let antic = 0;
        if (p > 0.88) {
          const ap = (p - 0.88) / 0.12;
          antic = -ap * 0.045;
        }
        drawStamp(stampY, 1, 0, wobble + antic);
      } else if (t < T_IMPACT_END) {
        // Impact: hard squash on contact, multi-frame recoil bounce overshoots up + settles
        const p = (t - T_DESCEND_END) / (T_IMPACT_END - T_DESCEND_END);
        // Phase 1 (0..0.30): hard squash down (peak compression)
        // Phase 2 (0.30..1):  multi-bounce settle with damped oscillation
        let squashY = 1;
        let yOff = 0;
        if (p < 0.30) {
          const q = p / 0.30;
          // Squash: 1 → 0.62 (very compressed) using easeOutCubic feel
          squashY = lerp(1, 0.62, easeOutCubic(q));
          // Sink down a touch as it compresses
          yOff = lerp(0, nameFs * 0.05, q);
        } else {
          const q = (p - 0.30) / 0.70;
          // Damped oscillation back to 1
          const damp = Math.exp(-3.5 * q);
          squashY = 1 + (0.62 - 1) * damp * Math.cos(q * Math.PI * 3.2);
          // Subtle vertical recoil
          yOff = nameFs * 0.05 * damp * Math.cos(q * Math.PI * 3.2);
        }
        // Sharp camera shake (high-frequency, decays through impact)
        const shakeDecay = Math.exp(-p * 4);
        const shake = (Math.sin(p * Math.PI * 14) + Math.sin(p * Math.PI * 23) * 0.5) * nameFs * 0.05 * shakeDecay;
        if (!splatsSpawned) { spawnSplats(); splatsSpawned = true; }
        if (!ringsSpawned) { spawnRings(t); ringsSpawned = true; }
        // Splats start fading-in with impact
        drawSplats(clamp(p * 1.4, 0, 1));
        // Compression rings
        drawRings(t);
        // Letters begin to BLEED in from each letter's center
        const bleed = clamp(p * 1.3, 0, 1);
        drawLetters(1, 1, bleed);
        drawStamp(cy + yOff, squashY, shake, 0);
      } else if (t < T_LIFT_END) {
        // Stamp lifts up — slight wobble tilt as it pulls free
        const p = (t - T_IMPACT_END) / (T_LIFT_END - T_IMPACT_END);
        const e = easeOutBack(p);
        const stampY = lerp(cy, -STAMP_H / 2 - STAMP_HANDLE_H - 20, e);
        const liftTilt = Math.sin(p * Math.PI * 2.5) * (1 - p) * 0.05;
        if (!dripsSpawned) { spawnDrips(t); dripsSpawned = true; }
        // Splats fade slightly
        drawSplats(Math.max(0, 1 - p * 0.6));
        // Tail rings still expanding
        drawRings(t);
        // Letters fully visible
        drawLetters(1, 1, 1);
        // Residual ink drips drip down from stamp pad bottom (in stamp's local frame)
        // Pad bottom in stamp local = STAMP_H / 2; world y = stampY + STAMP_H / 2
        drawDripsAttached(t, stampY + STAMP_H / 2);
        drawStamp(stampY, 1, 0, liftTilt);
      } else if (t < T_HOLD_END) {
        // HOLD
        drawLetters(1, 1, 1);
        drawSplats(Math.max(0, 1 - (t - T_LIFT_END) / 0.8));
      } else {
        // EXIT: simple uniform fade-out of letters (no second slam, no smear, no stamp)
        const exitLocal = t - T_HOLD_END;
        const exitDur = T_EXIT_END - T_HOLD_END;
        const p = clamp(exitLocal / exitDur, 0, 1);
        const a = 1 - easeOutCubic(p);
        drawLetters(a, 1, 1);
      }

      // End camera-shake transform
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

export default StampCurtain;
