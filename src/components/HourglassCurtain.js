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

const HourglassCurtain = ({ onFinish }) => {
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

    // Sample target pixels (sand grain positions)
    const data = letterCanvas.getContext("2d").getImageData(0, 0, W * dpr, H * dpr).data;
    const STRIDE = Math.max(3, Math.round(nameFs * 0.045));
    const Wpx = Math.floor(W * dpr);
    const Hpx = Math.floor(H * dpr);
    const pixels = [];
    for (let y = 0; y < H; y += STRIDE) {
      for (let x = 0; x < W; x += STRIDE) {
        const px = Math.floor(x * dpr);
        const py = Math.floor(y * dpr);
        if (px >= Wpx || py >= Hpx) continue;
        const idx = (py * Wpx + px) * 4;
        const r = data[idx], g = data[idx + 1], b = data[idx + 2], a = data[idx + 3];
        if (a > 120) {
          const isPeriod = r > 200 && g < 200 && b < 100;
          const pal = isPeriod ? PERIOD_TONES : SAND_TONES;
          const tone = pal[(Math.random() * pal.length) | 0];
          const tj = [
            clamp((tone[0] + ((Math.random() - 0.5) * 14)) | 0, 0, 255),
            clamp((tone[1] + ((Math.random() - 0.5) * 14)) | 0, 0, 255),
            clamp((tone[2] + ((Math.random() - 0.5) * 14)) | 0, 0, 255),
          ];
          pixels.push({
            origX: x, origY: y,
            x, y,
            isPeriod,
            color: `rgb(${tj[0]},${tj[1]},${tj[2]})`,
            size: 1 + Math.random() * 0.9,
            // physics
            vx: 0, vy: 0,
            released: false,
            // small per-grain in-fill jitter for organic arrival
            fillJitter: (Math.random() - 0.5) * 0.06,
          });
        }
      }
    }

    // ===== Timing =====
    const T_STREAM_END = 0.55;
    const T_FILL_DUR = 2.8;
    const T_FILL_END = T_STREAM_END + T_FILL_DUR;
    const T_POLISH_END = T_FILL_END + 0.30;
    const T_HOLD_END = T_POLISH_END + 1.5;
    const T_EXIT_END = T_HOLD_END + 2.0;
    const EXIT_DRAIN_DUR = (T_EXIT_END - T_HOLD_END) * 0.65;

    // Sort by Y descending (bottom pixels first — fill from bottom up)
    const fillOrder = [...pixels].sort((a, b) => b.origY - a.origY);
    fillOrder.forEach((p, i) => {
      // Mostly index-based with small jitter so same-y level fills in random order
      const baseT = (i / fillOrder.length) * T_FILL_DUR;
      p.fillT = clamp(baseT + p.fillJitter * T_FILL_DUR, 0, T_FILL_DUR) + T_STREAM_END;
    });

    // Exit drain order: top first (sand drains from top of pile)
    const exitOrder = [...pixels].sort((a, b) => a.origY - b.origY);
    exitOrder.forEach((p, i) => {
      p.releaseT = (i / exitOrder.length) * EXIT_DRAIN_DUR + (Math.random() - 0.5) * 0.05;
    });

    // ===== Stream rendering =====
    const cxStream = W / 2;
    const drawStream = (tipY) => {
      if (tipY <= 0) return;
      const streamW = nameFs * 0.045;
      const grad = ctx.createLinearGradient(cxStream - streamW * 3, 0, cxStream + streamW * 3, 0);
      grad.addColorStop(0.0, "rgba(170,150,110,0)");
      grad.addColorStop(0.4, "rgba(220,200,160,0.6)");
      grad.addColorStop(0.5, "rgba(255,240,200,1)");
      grad.addColorStop(0.6, "rgba(220,200,160,0.6)");
      grad.addColorStop(1.0, "rgba(170,150,110,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(cxStream - streamW * 3, 0, streamW * 6, tipY);
      // Bright leading drop at stream tip
      const dropR = nameFs * 0.08;
      const dg = ctx.createRadialGradient(cxStream, tipY, 0, cxStream, tipY, dropR);
      dg.addColorStop(0, "rgba(255,240,200,1)");
      dg.addColorStop(0.6, "rgba(220,195,140,0.5)");
      dg.addColorStop(1, "rgba(180,150,90,0)");
      ctx.fillStyle = dg;
      ctx.fillRect(cxStream - dropR, tipY - dropR, dropR * 2, dropR * 2);
    };

    // Streaming flow into letter band — branches spread from stream tip outward
    // (subtle bright fan suggesting sand spreading to fill molds)
    const drawSpreadFan = (alpha) => {
      if (alpha <= 0.02) return;
      const fanCy = cy + nameFs * 0.55;
      const fanW = totalW * 0.6;
      const grad = ctx.createLinearGradient(cxStream, fanCy - nameFs * 0.1, cxStream, fanCy + nameFs * 0.3);
      grad.addColorStop(0, `rgba(255,235,180,${alpha * 0.7})`);
      grad.addColorStop(1, "rgba(200,170,120,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(cxStream, fanCy - nameFs * 0.1);
      ctx.lineTo(cxStream + fanW, fanCy + nameFs * 0.3);
      ctx.lineTo(cxStream - fanW, fanCy + nameFs * 0.3);
      ctx.closePath();
      ctx.fill();
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

    const draw = (now) => {
      const t = (now - START) / 1000;
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);

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

      if (t < T_POLISH_END) {
        // STREAM tip y-position
        const streamP = clamp(t / T_STREAM_END, 0, 1);
        const tipY = streamP < 1
          ? lerp(0, cy + nameFs * 0.55, easeInCubic(streamP))
          : cy + nameFs * 0.55;
        drawStream(tipY);

        // Spread fan visible during fill
        if (t > T_STREAM_END * 0.7) {
          const fanA = clamp((t - T_STREAM_END * 0.7) / 0.4, 0, 1) * (1 - clamp((t - T_FILL_END) / 0.3, 0, 1));
          drawSpreadFan(fanA);
        }

        // Render pixels that have been filled
        for (const p of pixels) {
          if (t >= p.fillT) {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.origX, p.origY, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Polish: crisp letterCanvas crossfades in
        if (t > T_FILL_END) {
          const p = clamp((t - T_FILL_END) / (T_POLISH_END - T_FILL_END), 0, 1);
          ctx.save();
          ctx.globalAlpha = easeOutCubic(p);
          ctx.drawImage(letterCanvas, 0, 0, W, H);
          ctx.restore();
        }
      } else if (t < T_HOLD_END) {
        // HOLD: clean letters
        ctx.drawImage(letterCanvas, 0, 0, W, H);
      } else {
        // EXIT: drain top-first. Each pixel released → falls down under gravity.
        const exitLocal = t - T_HOLD_END;

        // letterCanvas fades quickly to reveal pixels
        const lcFade = clamp(exitLocal / 0.25, 0, 1);
        if (lcFade < 1) {
          ctx.save();
          ctx.globalAlpha = 1 - lcFade;
          ctx.drawImage(letterCanvas, 0, 0, W, H);
          ctx.restore();
        }

        // Per-pixel: render at origin until released, then fall
        for (const p of pixels) {
          if (!p.released && exitLocal >= p.releaseT) {
            p.released = true;
            p.x = p.origX;
            p.y = p.origY;
            p.vx = (Math.random() - 0.5) * 28;
            p.vy = 30 + Math.random() * 60;
          }
          if (p.released) {
            p.vy += 800 * dt;
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            if (p.y > H + 20) continue;
            const ageFade = Math.max(0, 1 - (exitLocal - p.releaseT) / 1.5);
            ctx.globalAlpha = ageFade;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Not yet released — still settled
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.origX, p.origY, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.globalAlpha = 1;
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

export default HourglassCurtain;
