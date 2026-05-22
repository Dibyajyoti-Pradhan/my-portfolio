import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  background-color: rgba(0, 0, 0, ${({ $blasting }) => ($blasting ? 0 : 1)});
  transition: background-color ${({ $blastMs }) => $blastMs}ms cubic-bezier(0.4, 0, 0.2, 1),
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
const MUTED = "#6b6f76";
const DIM = "#262626";

const ParticleCurtain = ({ onFinish }) => {
  const canvasRef = useRef(null);
  const [fade, setFade] = useState(false);
  const [blasting, setBlasting] = useState(false);
  const [done, setDone] = useState(false);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;
  const T_BLAST = 4200;

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

    const textCanvas = document.createElement("canvas");
    textCanvas.width = W * dpr;
    textCanvas.height = H * dpr;
    const tctx = textCanvas.getContext("2d");
    tctx.scale(dpr, dpr);

    const sansStack = `-apple-system, "Inter", "Helvetica Neue", Arial, sans-serif`;
    const monoStack = `"SF Mono", "JetBrains Mono", Menlo, Consolas, monospace`;

    let nameFs = Math.max(20, Math.round(H * 0.06));
    tctx.font = `900 ${nameFs}px ${sansStack}`;
    try { tctx.letterSpacing = "-1.5px"; } catch (_) {}
    const probe = tctx.measureText(NAME + PERIOD).width || 1;
    const wantW = W * 0.22;
    nameFs = Math.max(20, Math.round(nameFs * (wantW / probe)));
    tctx.font = `900 ${nameFs}px ${sansStack}`;
    try { tctx.letterSpacing = "-1.5px"; } catch (_) {}
    const totalW = tctx.measureText(NAME + PERIOD).width;
    const lettersW = tctx.measureText(NAME).width;

    let tagFs = Math.max(10, Math.round(H * 0.014));
    tctx.font = `500 ${tagFs}px ${monoStack}`;
    try { tctx.letterSpacing = "2.5px"; } catch (_) {}
    const tProbe = tctx.measureText(TAGLINE).width || 1;
    const tWant = Math.max(220, W * 0.22);
    tagFs = Math.max(10, Math.round(tagFs * (tWant / tProbe)));

    const gapNameDiv = Math.round(nameFs * 0.85);
    const gapDivTag = Math.round(tagFs * 3.5);
    const span = nameFs / 2 + gapNameDiv + gapDivTag + tagFs / 2;
    const blockTop = (H - span) / 2;
    const cy = Math.round(blockTop + nameFs / 2);
    const divY = cy + gapNameDiv;
    const tagY = divY + gapDivTag;

    tctx.font = `900 ${nameFs}px ${sansStack}`;
    try { tctx.letterSpacing = "-1.5px"; } catch (_) {}
    tctx.textBaseline = "middle";
    tctx.textAlign = "left";
    const nameX = (W - totalW) / 2;
    tctx.fillStyle = WHITE;
    tctx.fillText(NAME, nameX, cy);
    tctx.fillStyle = ORANGE;
    tctx.fillText(PERIOD, nameX + lettersW, cy);

    tctx.fillStyle = DIM;
    tctx.fillRect(0, divY, W, 1);

    tctx.font = `500 ${tagFs}px ${monoStack}`;
    try { tctx.letterSpacing = "2.5px"; } catch (_) {}
    tctx.textAlign = "center";
    tctx.fillStyle = MUTED;
    tctx.fillText(TAGLINE, Math.round(W / 2), tagY);

    const STEP = 2;
    const PSIZE = 2;
    const imgData = tctx.getImageData(0, 0, W * dpr, H * dpr).data;
    const seeds = [];
    for (let y = 0; y < H; y += STEP) {
      for (let x = 0; x < W; x += STEP) {
        const px = Math.floor(x * dpr);
        const py = Math.floor(y * dpr);
        const i = (py * Math.floor(W * dpr) + px) * 4;
        const r = imgData[i], g = imgData[i + 1], b = imgData[i + 2], a = imgData[i + 3];
        if (a < 60) continue;
        seeds.push({ x, y, r, g, b, a });
      }
    }

    const cxV = W / 2, cyV = H / 2;
    const particles = seeds.map((s) => ({
      fromX: Math.random() * W,
      fromY: Math.random() * H,
      toX: s.x,
      toY: s.y,
      x: 0, y: 0,
      vx: 0, vy: 0,
      r: s.r, g: s.g, b: s.b, a: s.a,
    }));

    const T_MORPH = 1850;
    const T_HOLD = 1100;
    const T_TOTAL = T_MORPH + T_HOLD + T_BLAST;

    let blastInit = false;
    let lastTime = performance.now();
    const START = lastTime;
    let raf;
    let finished = false;

    const initBlast = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.toX - cxV, dy = p.toY - cyV;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const ux = dx / dist, uy = dy / dist;
        const speed = 120 + Math.random() * 260;
        p.x = p.toX;
        p.y = p.toY;
        p.vx = ux * speed + (Math.random() - 0.5) * 80;
        p.vy = uy * speed + (Math.random() - 0.5) * 80;
      }
      blastInit = true;
    };

    const draw = (now) => {
      const t = now - START;
      const dt = Math.min(50, now - lastTime) / 1000;
      lastTime = now;

      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);

      if (t < T_MORPH) {
        const p = t / T_MORPH;
        const e = 1 - Math.pow(1 - p, 3);
        const fadeStart = 0.7;
        const partAlpha = p < fadeStart ? 1 : Math.max(0, 1 - (p - fadeStart) / (1 - fadeStart));
        for (let i = 0; i < particles.length; i++) {
          const pt = particles[i];
          const x = pt.fromX + (pt.toX - pt.fromX) * e;
          const y = pt.fromY + (pt.toY - pt.fromY) * e;
          ctx.fillStyle = `rgba(${pt.r},${pt.g},${pt.b},${(pt.a / 255) * partAlpha})`;
          ctx.fillRect(x, y, PSIZE, PSIZE);
        }
        if (p > fadeStart) {
          const xf = (p - fadeStart) / (1 - fadeStart);
          ctx.globalAlpha = xf;
          ctx.drawImage(textCanvas, 0, 0, W, H);
          ctx.globalAlpha = 1;
        }
      } else if (t < T_MORPH + T_HOLD) {
        ctx.drawImage(textCanvas, 0, 0, W, H);
      } else if (t < T_TOTAL) {
        if (!blastInit) { initBlast(); setBlasting(true); }
        const bp = (t - T_MORPH - T_HOLD) / T_BLAST;
        const life = Math.max(0, 1 - bp * 1.1);
        for (let i = 0; i < particles.length; i++) {
          const pt = particles[i];
          pt.x += pt.vx * dt;
          pt.y += pt.vy * dt;
          const a = (pt.a / 255) * life;
          if (a <= 0) continue;
          ctx.fillStyle = `rgba(${pt.r},${pt.g},${pt.b},${a})`;
          ctx.fillRect(pt.x, pt.y, PSIZE, PSIZE);
        }
      } else if (!finished) {
        finished = true;
        setFade(true);
        setTimeout(() => {
          setDone(true);
          if (onFinishRef.current) onFinishRef.current();
        }, 450);
        return;
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (done) return null;
  return (
    <Wrap $fade={fade} $blasting={blasting} $blastMs={T_BLAST}>
      <Canvas ref={canvasRef} />
    </Wrap>
  );
};

export default ParticleCurtain;
