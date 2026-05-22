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
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const MercuryCurtain = ({ onFinish }) => {
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

    // ===== Pre-render mask canvases =====
    // lettersMask: just NAME letters (white shape)
    // periodMask: just period (white shape — color comes from gradient compose later)
    // finalCanvas: white letters + orange period (for HOLD contract crossfade)
    const makeMask = (drawFn) => {
      const c = document.createElement("canvas");
      c.width = W * dpr;
      c.height = H * dpr;
      const cx = c.getContext("2d");
      cx.scale(dpr, dpr);
      cx.font = `900 ${nameFs}px ${sansStack}`;
      try { cx.letterSpacing = "-1.5px"; } catch (_) {}
      cx.textBaseline = "middle";
      cx.textAlign = "center";
      drawFn(cx);
      return c;
    };
    const lettersMask = makeMask((cx) => {
      cx.fillStyle = "#fff";
      for (let i = 0; i < fullName.length - 1; i++) {
        cx.fillText(fullName[i], targetX[i], cy);
      }
    });
    const periodMask = makeMask((cx) => {
      cx.fillStyle = "#fff";
      cx.fillText(PERIOD, targetX[fullName.length - 1], cy);
    });
    const finalCanvas = makeMask((cx) => {
      for (let i = 0; i < fullName.length; i++) {
        cx.fillStyle = fullName[i] === "." ? ORANGE : WHITE;
        cx.fillText(fullName[i], targetX[i], cy);
      }
    });

    // Composition scratch canvas (size of viewport)
    const comp = document.createElement("canvas");
    comp.width = W * dpr;
    comp.height = H * dpr;
    const compCtx = comp.getContext("2d");
    compCtx.scale(dpr, dpr);

    // ===== Timing =====
    const T_STREAM_END = 0.65;
    const T_SPLASH_END = T_STREAM_END + 0.22;
    const T_SPREAD_END = T_SPLASH_END + 1.7;
    const T_SETTLE_END = T_SPREAD_END + 0.35;
    const T_HOLD_END = T_SETTLE_END + 1.5;
    const T_EXIT_END = T_HOLD_END + 1.7;

    const cxImpact = W / 2;
    const cyImpact = cy;
    const maxR = Math.hypot(W, H) * 0.65;

    // ===== Splash droplets (small chrome blobs after impact) =====
    let splashSpawned = false;
    const drops = [];
    const spawnSplash = () => {
      for (let i = 0; i < 14; i++) {
        const ang = (i / 14) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
        const speed = 220 + Math.random() * 280;
        drops.push({
          x: cxImpact,
          y: cyImpact,
          vx: Math.cos(ang) * speed,
          vy: Math.sin(ang) * speed - 60, // slight upward bias
          r: 2.5 + Math.random() * 3.5,
          life: 0,
        });
      }
    };
    const updateSplash = (dt) => {
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        d.life += dt;
        d.vy += 900 * dt;
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        if (d.life > 1.4 || d.y > H + 20) drops.splice(i, 1);
      }
    };
    const drawSplashDrops = (alphaMul = 1) => {
      for (const d of drops) {
        const fade = Math.max(0, 1 - d.life / 1.0) * alphaMul;
        if (fade <= 0.02) continue;
        ctx.save();
        // Chrome droplet — radial gradient (bright top, dark bottom)
        const g = ctx.createRadialGradient(d.x - d.r * 0.4, d.y - d.r * 0.4, 0, d.x, d.y, d.r * 1.2);
        g.addColorStop(0, `rgba(255,255,255,${fade})`);
        g.addColorStop(0.5, `rgba(190,200,215,${fade * 0.9})`);
        g.addColorStop(1, `rgba(60,65,75,${fade * 0.7})`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    };

    // ===== Build chrome gradients — brightened so letters read clearly on black bg =====
    const chromeLetters = (sheenX) => {
      const top = cy - nameFs * 0.55;
      const bot = cy + nameFs * 0.55;
      const g = compCtx.createLinearGradient(0, top, 0, bot);
      g.addColorStop(0.00, "#e6ebf2");
      g.addColorStop(0.20, "#ffffff");
      g.addColorStop(0.46, "#c4c9d2");
      g.addColorStop(0.60, "#8a8f9b");
      g.addColorStop(0.78, "#e0e3ea");
      g.addColorStop(1.00, "#7a7f8a");
      return g;
    };
    const chromePeriod = () => {
      const top = cy - nameFs * 0.3;
      const bot = cy + nameFs * 0.5;
      const g = compCtx.createLinearGradient(0, top, 0, bot);
      g.addColorStop(0.00, "#ffd49a");
      g.addColorStop(0.25, "#ffa55a");
      g.addColorStop(0.55, "#c25d10");
      g.addColorStop(0.80, "#ffb070");
      g.addColorStop(1.00, "#6a3814");
      return g;
    };

    // Render chrome-shaded mask onto main canvas (with optional sheen overlay)
    const renderChromeShaded = (mask, gradient, sheenX) => {
      compCtx.clearRect(0, 0, W, H);
      compCtx.drawImage(mask, 0, 0, W, H);
      compCtx.globalCompositeOperation = "source-in";
      compCtx.fillStyle = gradient;
      compCtx.fillRect(0, 0, W, H);
      if (sheenX !== undefined && sheenX !== null) {
        // Bright vertical sheen highlight, clipped to mask
        const sheenW = nameFs * 0.5;
        const sg = compCtx.createLinearGradient(sheenX - sheenW, 0, sheenX + sheenW, 0);
        sg.addColorStop(0, "rgba(255,255,255,0)");
        sg.addColorStop(0.5, "rgba(255,255,255,0.45)");
        sg.addColorStop(1, "rgba(255,255,255,0)");
        compCtx.fillStyle = sg;
        compCtx.fillRect(sheenX - sheenW, 0, sheenW * 2, H);
      }
      compCtx.globalCompositeOperation = "source-over";
      ctx.drawImage(comp, 0, 0, W, H);
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

    // STREAM: vertical mercury column pouring from top to current y position
    const drawStream = (t) => {
      const p = t / T_STREAM_END;
      const tipY = lerp(0, cyImpact, easeInCubic(p));
      const streamW = nameFs * 0.10;
      // Chrome stripe (vertical gradient for shading along width)
      const grad = ctx.createLinearGradient(cxImpact - streamW, 0, cxImpact + streamW, 0);
      grad.addColorStop(0.0, "rgba(80,90,105,0)");
      grad.addColorStop(0.35, "rgba(180,195,215,0.75)");
      grad.addColorStop(0.5, "rgba(255,255,255,1)");
      grad.addColorStop(0.65, "rgba(160,175,195,0.75)");
      grad.addColorStop(1.0, "rgba(60,70,85,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(cxImpact - streamW, 0, streamW * 2, tipY);
      // Bright leading-drop glow at stream tip
      const dropR = nameFs * 0.20;
      const dg = ctx.createRadialGradient(cxImpact, tipY, 0, cxImpact, tipY, dropR);
      dg.addColorStop(0, "rgba(255,255,255,1)");
      dg.addColorStop(0.55, "rgba(200,210,225,0.7)");
      dg.addColorStop(1, "rgba(160,175,195,0)");
      ctx.fillStyle = dg;
      ctx.fillRect(cxImpact - dropR, tipY - dropR, dropR * 2, dropR * 2);
    };

    // SPLASH: impact flash + droplets
    const drawSplashPhase = (t, dt) => {
      const splashLocal = t - T_STREAM_END;
      const sp = splashLocal / (T_SPLASH_END - T_STREAM_END);

      if (!splashSpawned) {
        spawnSplash();
        splashSpawned = true;
      }

      // Impact flash
      const flashR = nameFs * (1.0 + sp * 1.5);
      const flashA = (1 - sp) * 0.85;
      const fg = ctx.createRadialGradient(cxImpact, cyImpact, 0, cxImpact, cyImpact, flashR);
      fg.addColorStop(0, `rgba(255,255,255,${flashA})`);
      fg.addColorStop(0.4, `rgba(220,230,245,${flashA * 0.4})`);
      fg.addColorStop(1, "rgba(180,200,225,0)");
      ctx.fillStyle = fg;
      ctx.fillRect(cxImpact - flashR, cyImpact - flashR, flashR * 2, flashR * 2);

      // Expanding shock ring
      const ringR = flashR * 0.7;
      ctx.save();
      ctx.strokeStyle = `rgba(220,225,235,${(1 - sp) * 0.6})`;
      ctx.lineWidth = Math.max(1, nameFs * 0.015) * (1 - sp);
      ctx.beginPath();
      ctx.arc(cxImpact, cyImpact, ringR, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Mercury "puddle" forming under impact
      const puddleR = lerp(nameFs * 0.15, nameFs * 0.6, easeOutCubic(sp));
      const pg = ctx.createRadialGradient(cxImpact, cyImpact, 0, cxImpact, cyImpact, puddleR);
      pg.addColorStop(0, "rgba(255,255,255,1)");
      pg.addColorStop(0.6, "rgba(200,210,225,0.95)");
      pg.addColorStop(1, "rgba(140,150,165,0)");
      ctx.fillStyle = pg;
      ctx.fillRect(cxImpact - puddleR, cyImpact - puddleR, puddleR * 2, puddleR * 2);

      updateSplash(dt);
      drawSplashDrops(1);
    };

    // SPREAD: expanding circular reveal of chrome-letters from impact point
    const drawSpreadPhase = (t, dt) => {
      const sp = clamp((t - T_SPLASH_END) / (T_SPREAD_END - T_SPLASH_END), 0, 1);
      const e = easeOutCubic(sp);
      const radius = lerp(nameFs * 0.6, maxR, e);

      // Render chrome-letters first, then clip to expanding circle
      // (clip on main canvas affects subsequent draws)
      ctx.save();
      ctx.beginPath();
      ctx.arc(cxImpact, cyImpact, radius, 0, Math.PI * 2);
      ctx.clip();
      const sheenX = -nameFs + (W + nameFs * 2) * sp;
      renderChromeShaded(lettersMask, chromeLetters(sheenX), sheenX);
      renderChromeShaded(periodMask, chromePeriod(), null);
      ctx.restore();

      // Bright reveal-edge ring at growing radius
      ctx.save();
      ctx.strokeStyle = `rgba(255,255,255,${(1 - sp * 0.7) * 0.5})`;
      ctx.lineWidth = Math.max(1.2, nameFs * 0.018);
      ctx.beginPath();
      ctx.arc(cxImpact, cyImpact, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Splash droplets continue falling
      updateSplash(dt);
      drawSplashDrops(1 - sp * 0.8);
    };

    // SETTLE: chrome letters crossfading into crisp white letterCanvas (HOLD contract)
    const drawSettlePhase = (t) => {
      const sp = clamp((t - T_SPREAD_END) / (T_SETTLE_END - T_SPREAD_END), 0, 1);
      const sheenX = lerp(W * 1.0, W * 1.2, sp);
      // Chrome fades out, crisp fades in
      const chromeAlpha = 1 - easeOutCubic(sp);
      const crispAlpha = easeOutCubic(sp);
      if (chromeAlpha > 0.02) {
        ctx.save();
        ctx.globalAlpha = chromeAlpha;
        renderChromeShaded(lettersMask, chromeLetters(sheenX), sheenX);
        renderChromeShaded(periodMask, chromePeriod(), null);
        ctx.restore();
      }
      if (crispAlpha > 0.02) {
        ctx.save();
        ctx.globalAlpha = crispAlpha;
        ctx.drawImage(finalCanvas, 0, 0, W, H);
        ctx.restore();
      }
    };

    // HOLD: crisp white letters + orange period (matches contract). No chrome dark bands.
    const drawHoldPhase = (t) => {
      ctx.drawImage(finalCanvas, 0, 0, W, H);
    };

    // EXIT (reverse entry): letters retract to impact point → mercury column pulls up off-screen
    const T_RETRACT_END = T_HOLD_END + 0.45;
    const T_PULL_END = T_RETRACT_END + 0.85;
    const drawExitPhase = (t) => {
      const exitLocal = t - T_HOLD_END;
      if (t < T_RETRACT_END) {
        // RETRACT: clip circle shrinks — letters (crisp) collapse outside→in
        const rp = clamp((t - T_HOLD_END) / (T_RETRACT_END - T_HOLD_END), 0, 1);
        const e = easeInCubic(rp);
        const radius = lerp(maxR, nameFs * 0.35, e);
        ctx.save();
        ctx.beginPath();
        ctx.arc(cxImpact, cyImpact, radius, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(finalCanvas, 0, 0, W, H);
        ctx.restore();
        // Bright retraction edge ring at shrinking radius
        ctx.save();
        ctx.strokeStyle = `rgba(255,255,255,${(1 - rp * 0.5) * 0.55})`;
        ctx.lineWidth = Math.max(1.2, nameFs * 0.018);
        ctx.beginPath();
        ctx.arc(cxImpact, cyImpact, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
        // Mercury puddle becomes visible at impact as the clip shrinks (chrome blob)
        if (rp > 0.5) {
          const puddleP = (rp - 0.5) / 0.5;
          const pr = nameFs * (0.35 + puddleP * 0.1);
          const pg = ctx.createRadialGradient(cxImpact, cyImpact, 0, cxImpact, cyImpact, pr);
          pg.addColorStop(0, "rgba(255,255,255,1)");
          pg.addColorStop(0.5, "rgba(200,210,225,0.95)");
          pg.addColorStop(1, "rgba(120,130,145,0)");
          ctx.fillStyle = pg;
          ctx.fillRect(cxImpact - pr, cyImpact - pr, pr * 2, pr * 2);
        }
      } else if (t < T_PULL_END) {
        // PULL UP: mercury column rises from impact point up off the top edge.
        // Stream tail extends from impact upward; bottom-end of column withdraws as time progresses.
        const pp = clamp((t - T_RETRACT_END) / (T_PULL_END - T_RETRACT_END), 0, 1);
        const e = easeOutCubic(pp);
        // Tail-bottom y: starts at cyImpact, retracts upward beyond top
        const tailBottomY = lerp(cyImpact, -nameFs * 0.3, e);
        // Head: pulls up faster — already off-screen
        const headY = lerp(cyImpact - nameFs * 0.4, -H * 0.4, e);
        const streamW = nameFs * 0.10;
        const grad = ctx.createLinearGradient(cxImpact - streamW, 0, cxImpact + streamW, 0);
        grad.addColorStop(0.0, "rgba(80,90,105,0)");
        grad.addColorStop(0.35, "rgba(180,195,215,0.75)");
        grad.addColorStop(0.5, "rgba(255,255,255,1)");
        grad.addColorStop(0.65, "rgba(160,175,195,0.75)");
        grad.addColorStop(1.0, "rgba(60,70,85,0)");
        ctx.save();
        ctx.globalAlpha = 1 - pp * 0.2;
        ctx.fillStyle = grad;
        ctx.fillRect(cxImpact - streamW, headY, streamW * 2, tailBottomY - headY);
        ctx.restore();
        // Bright trailing drop at tail bottom (last bit of mercury pulling up)
        if (tailBottomY > -nameFs * 0.3) {
          const dropR = nameFs * 0.18 * (1 - pp * 0.6);
          const dg = ctx.createRadialGradient(cxImpact, tailBottomY, 0, cxImpact, tailBottomY, dropR);
          dg.addColorStop(0, "rgba(255,255,255,1)");
          dg.addColorStop(0.55, "rgba(200,210,225,0.7)");
          dg.addColorStop(1, "rgba(160,175,195,0)");
          ctx.fillStyle = dg;
          ctx.fillRect(cxImpact - dropR, tailBottomY - dropR, dropR * 2, dropR * 2);
        }
        // Surface tension: small remaining puddle below impact, shrinking
        const puddleAlpha = Math.max(0, 1 - pp * 1.4);
        if (puddleAlpha > 0.01) {
          const pr = nameFs * 0.35 * puddleAlpha;
          const pg = ctx.createRadialGradient(cxImpact, cyImpact, 0, cxImpact, cyImpact, pr);
          pg.addColorStop(0, `rgba(255,255,255,${puddleAlpha})`);
          pg.addColorStop(0.5, `rgba(200,210,225,${puddleAlpha * 0.8})`);
          pg.addColorStop(1, "rgba(120,130,145,0)");
          ctx.fillStyle = pg;
          ctx.fillRect(cxImpact - pr, cyImpact - pr, pr * 2, pr * 2);
        }
      }
      // After T_PULL_END: nothing rendered (canvas empty, Wrap bg still black until T_EXIT_END)
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
        divA = clamp((t - T_SETTLE_END) / 0.4, 0, 1);
        tagA = clamp((t - T_SETTLE_END - 0.15) / 0.45, 0, 1);
      } else {
        const ep = (t - T_HOLD_END) / (T_EXIT_END - T_HOLD_END);
        divA = Math.max(0, 1 - ep * 1.5);
        tagA = Math.max(0, 1 - ep * 1.7);
      }
      drawDivider(divA);
      drawTagline(tagA);

      if (t < T_STREAM_END) {
        drawStream(t);
      } else if (t < T_SPLASH_END) {
        drawSplashPhase(t, dt);
      } else if (t < T_SPREAD_END) {
        drawSpreadPhase(t, dt);
      } else if (t < T_SETTLE_END) {
        drawSettlePhase(t);
        updateSplash(dt);
        drawSplashDrops(0.6);
      } else if (t < T_HOLD_END) {
        drawHoldPhase(t);
      } else {
        drawExitPhase(t);
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

export default MercuryCurtain;
