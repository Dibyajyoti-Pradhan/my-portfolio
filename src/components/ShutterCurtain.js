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

const ShutterCurtain = ({ onFinish }) => {
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

    // Pre-render content (letters + divider + tagline)
    const contentCanvas = document.createElement("canvas");
    contentCanvas.width = W * dpr;
    contentCanvas.height = H * dpr;
    {
      const cc = contentCanvas.getContext("2d");
      cc.scale(dpr, dpr);
      cc.font = `900 ${nameFs}px ${sansStack}`;
      try { cc.letterSpacing = "-1.5px"; } catch (_) {}
      cc.textBaseline = "middle";
      cc.textAlign = "center";
      for (let i = 0; i < fullName.length; i++) {
        cc.fillStyle = fullName[i] === "." ? ORANGE : WHITE;
        cc.fillText(fullName[i], targetX[i], cy);
      }
      cc.fillStyle = `rgba(${DIM_RGB},1)`;
      cc.fillRect(0, divY, W, 1);
      cc.font = `500 ${tagFs}px ${monoStack}`;
      try { cc.letterSpacing = "2.5px"; } catch (_) {}
      cc.textAlign = "center";
      cc.textBaseline = "middle";
      cc.fillStyle = `rgba(${MUTED_RGB},1)`;
      cc.fillText(TAGLINE, Math.round(W / 2), tagY);
    }

    // Timing
    const T_OPEN_END = 1.4;
    const T_HOLD_END = T_OPEN_END + 1.6;
    const T_CLOSE_END = T_HOLD_END + 1.4;

    const cx = W / 2;
    const ccy = H / 2;
    const maxR = Math.hypot(W, H) * 0.6;
    const BLADES = 6;

    const drawIris = (radius, twist) => {
      // Draw black cover with N-blade hole using evenodd fill
      ctx.fillStyle = "#000";
      ctx.beginPath();
      // Outer rectangle (cover the whole canvas)
      ctx.rect(0, 0, W, H);
      // Inner polygon (counter-orientation creates a hole)
      const off = twist;
      for (let i = BLADES - 1; i >= 0; i--) {
        const a = (i / BLADES) * Math.PI * 2 + off;
        const x = cx + Math.cos(a) * radius;
        const y = ccy + Math.sin(a) * radius;
        if (i === BLADES - 1) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill("evenodd");
      // Blade edges — thin highlight at iris perimeter
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < BLADES; i++) {
        const a = (i / BLADES) * Math.PI * 2 + off;
        const x = cx + Math.cos(a) * radius;
        const y = ccy + Math.sin(a) * radius;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    };

    const START = performance.now();
    let raf;
    let finished = false;
    let bgTriggered = false;

    const draw = (now) => {
      const t = (now - START) / 1000;
      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);

      // Draw content first (always there underneath)
      ctx.drawImage(contentCanvas, 0, 0, W, H);

      if (t < T_OPEN_END) {
        // Open: radius grows from 0 to maxR; twist rotates blade angles
        const p = t / T_OPEN_END;
        const e = easeInOutCubic(p);
        const r = lerp(0, maxR, e);
        const twist = lerp(-Math.PI / 8, 0, e);
        drawIris(r, twist);
      } else if (t < T_HOLD_END) {
        // Fully open — no iris visible (transparent canvas reveals content)
      } else if (t < T_CLOSE_END) {
        // Close: reverse
        const p = (t - T_HOLD_END) / (T_CLOSE_END - T_HOLD_END);
        const e = easeInOutCubic(p);
        const r = lerp(maxR, 0, e);
        const twist = lerp(0, Math.PI / 8, e);
        drawIris(r, twist);
      } else {
        // Fully closed
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, W, H);
      }

      if (!bgTriggered && t >= T_CLOSE_END) {
        bgTriggered = true;
        setBgOff(true);
      }

      if (t >= T_CLOSE_END + 0.3) {
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

export default ShutterCurtain;
