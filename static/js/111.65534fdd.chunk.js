"use strict";(globalThis.webpackChunkmy_portfolio=globalThis.webpackChunkmy_portfolio||[]).push([[111],{111(t,e,s){s.r(e),s.d(e,{default:()=>C});var a=s(43),r=s(820),o=s(579);const i="#3FE0C5",n="#6CE3A6",l="#8A6CFF",p="#4B6CFF",d=r.i7`
  0%   { transform: translate3d(-12%, 6%, 0) skewY(-8deg) scale(1.05); opacity: 0; }
  18%  { opacity: 1; }
  100% { transform: translate3d(8%, -4%, 0) skewY(-12deg) scale(1.12); opacity: 1; }
`,c=r.i7`
  0%   { transform: translate3d(10%, -4%, 0) skewY(10deg) scale(1.08); opacity: 0; }
  20%  { opacity: 1; }
  100% { transform: translate3d(-8%, 8%, 0) skewY(6deg) scale(1.15); opacity: 1; }
`,f=r.i7`
  0%   { opacity: 0.55; }
  50%  { opacity: 0.95; }
  100% { opacity: 0.55; }
`,x=r.i7`
  0%   { transform: translateY(-60%) scaleY(0.4); opacity: 0; }
  20%  { opacity: 0.45; }
  70%  { opacity: 0.35; }
  100% { transform: translateY(60%) scaleY(1.4); opacity: 0; }
`,$=r.i7`
  0%   { stroke-dashoffset: 600; }
  100% { stroke-dashoffset: 0; }
`,u=r.i7`
  0%   { opacity: 0; transform: translateY(8px); letter-spacing: 0.04em; }
  100% { opacity: 1; transform: translateY(0);   letter-spacing: 0.08em; }
`,y=r.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  background: radial-gradient(
      ellipse 120% 80% at 50% 110%,
      #0c1a30 0%,
      ${"#060914"} 55%,
      #02040a 100%
    );
  overflow: hidden;
  transition: opacity 450ms ease;
  opacity: ${t=>{let{$fade:e}=t;return e?0:1}};
`,g=r.Ay.div`
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 12% 28%, rgba(255,255,255,0.55) 0.6px, transparent 1px),
    radial-gradient(circle at 78% 14%, rgba(255,255,255,0.40) 0.6px, transparent 1px),
    radial-gradient(circle at 36% 70%, rgba(255,255,255,0.45) 0.6px, transparent 1px),
    radial-gradient(circle at 90% 62%, rgba(255,255,255,0.30) 0.6px, transparent 1px),
    radial-gradient(circle at 22% 86%, rgba(255,255,255,0.35) 0.6px, transparent 1px),
    radial-gradient(circle at 60% 40%, rgba(255,255,255,0.25) 0.6px, transparent 1px);
  opacity: 0.7;
`,m=r.Ay.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: screen;
`,h=r.Ay.div`
  position: absolute;
  inset: 0;
  mix-blend-mode: screen;
  pointer-events: none;
`,b=r.Ay.span`
  position: absolute;
  top: 0;
  width: 1.5px;
  height: 38%;
  background: linear-gradient(
    to bottom,
    rgba(140, 220, 255, 0) 0%,
    rgba(140, 220, 255, 0.7) 45%,
    rgba(140, 220, 255, 0) 100%
  );
  filter: blur(0.4px);
  animation: ${x} ${t=>{let{$dur:e}=t;return e}}ms cubic-bezier(0.45, 0.05, 0.55, 1)
    ${t=>{let{$delay:e}=t;return e}}ms infinite;
  left: ${t=>{let{$left:e}=t;return e}}%;
`,j=r.Ay.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 2;
  text-align: center;
  font-family: -apple-system, "Inter", "Helvetica Neue", Arial, sans-serif;

  .name {
    font-size: clamp(28px, 5.2vw, 56px);
    font-weight: 900;
    letter-spacing: 0.08em;
    color: #f1f6ff;
    text-shadow:
      0 0 14px rgba(63, 224, 197, 0.45),
      0 0 28px rgba(138, 108, 255, 0.35);
    animation: ${u} 700ms cubic-bezier(0.16, 1, 0.3, 1) 280ms both;

    span {
      color: ${i};
    }
  }

  .tagline {
    font-family: "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;
    font-size: clamp(10px, 1.1vw, 12px);
    color: rgba(180, 200, 230, 0.78);
    letter-spacing: 0.32em;
    text-transform: uppercase;
    animation: ${u} 700ms cubic-bezier(0.16, 1, 0.3, 1) 440ms both;
  }
`,k=r.Ay.g`
  transform-origin: 50% 50%;
  animation:
    ${t=>{let{$alt:e}=t;return e?c:d}}
      ${t=>{let{$driftMs:e}=t;return e}}ms ease-out ${t=>{let{$delay:e}=t;return e}}ms both,
    ${f} ${t=>{let{$pulseMs:e}=t;return e}}ms ease-in-out
      ${t=>{let{$delay:e}=t;return e}}ms infinite;
  filter: blur(${t=>{let{$blur:e}=t;return e}}px);

  path {
    stroke-dasharray: 600 240;
    animation: ${$} ${t=>{let{$flowMs:e}=t;return e}}ms linear
      ${t=>{let{$delay:e}=t;return e}}ms infinite;
  }
`,C=t=>{let{onFinish:e}=t;const[s,r]=(0,a.useState)(!1),[d,c]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{const t=setTimeout(()=>r(!0),1400),s=setTimeout(()=>{c(!0),e&&e()},1800);return()=>{clearTimeout(t),clearTimeout(s)}},[]),d?null:(0,o.jsxs)(y,{$fade:s,children:[(0,o.jsx)(g,{}),(0,o.jsxs)(h,{children:[(0,o.jsx)(b,{$left:8,$dur:2400,$delay:0}),(0,o.jsx)(b,{$left:24,$dur:2800,$delay:420}),(0,o.jsx)(b,{$left:47,$dur:2600,$delay:180}),(0,o.jsx)(b,{$left:63,$dur:3e3,$delay:620}),(0,o.jsx)(b,{$left:81,$dur:2500,$delay:300}),(0,o.jsx)(b,{$left:92,$dur:2700,$delay:520})]}),(0,o.jsxs)(m,{viewBox:"0 0 1000 600",preserveAspectRatio:"none",children:[(0,o.jsxs)("defs",{children:[(0,o.jsxs)("linearGradient",{id:"ag-teal",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,o.jsx)("stop",{offset:"0%",stopColor:i,stopOpacity:"0"}),(0,o.jsx)("stop",{offset:"50%",stopColor:i,stopOpacity:"0.9"}),(0,o.jsx)("stop",{offset:"100%",stopColor:i,stopOpacity:"0"})]}),(0,o.jsxs)("linearGradient",{id:"ag-green",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,o.jsx)("stop",{offset:"0%",stopColor:n,stopOpacity:"0"}),(0,o.jsx)("stop",{offset:"50%",stopColor:n,stopOpacity:"0.85"}),(0,o.jsx)("stop",{offset:"100%",stopColor:n,stopOpacity:"0"})]}),(0,o.jsxs)("linearGradient",{id:"ag-violet",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,o.jsx)("stop",{offset:"0%",stopColor:l,stopOpacity:"0"}),(0,o.jsx)("stop",{offset:"50%",stopColor:l,stopOpacity:"0.85"}),(0,o.jsx)("stop",{offset:"100%",stopColor:l,stopOpacity:"0"})]}),(0,o.jsxs)("linearGradient",{id:"ag-blue",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,o.jsx)("stop",{offset:"0%",stopColor:p,stopOpacity:"0"}),(0,o.jsx)("stop",{offset:"50%",stopColor:p,stopOpacity:"0.7"}),(0,o.jsx)("stop",{offset:"100%",stopColor:p,stopOpacity:"0"})]})]}),(0,o.jsx)(k,{$alt:!1,$driftMs:1800,$pulseMs:1700,$flowMs:3200,$delay:0,$blur:6,children:(0,o.jsx)("path",{d:"M -120 320 C 180 180, 420 460, 700 260 S 1040 220, 1180 320",fill:"none",stroke:"url(#ag-violet)",strokeWidth:"120",strokeLinecap:"round"})}),(0,o.jsx)(k,{$alt:!0,$driftMs:1800,$pulseMs:1500,$flowMs:2800,$delay:60,$blur:4,children:(0,o.jsx)("path",{d:"M -100 250 C 200 380, 460 160, 740 320 S 980 380, 1120 240",fill:"none",stroke:"url(#ag-blue)",strokeWidth:"90",strokeLinecap:"round"})}),(0,o.jsx)(k,{$alt:!1,$driftMs:1700,$pulseMs:1300,$flowMs:2400,$delay:120,$blur:2.5,children:(0,o.jsx)("path",{d:"M -120 360 C 220 220, 460 420, 720 280 S 1020 360, 1180 280",fill:"none",stroke:"url(#ag-teal)",strokeWidth:"60",strokeLinecap:"round"})}),(0,o.jsx)(k,{$alt:!0,$driftMs:1600,$pulseMs:1100,$flowMs:2e3,$delay:180,$blur:1.2,children:(0,o.jsx)("path",{d:"M -100 300 C 240 360, 480 200, 760 320 S 1000 280, 1140 360",fill:"none",stroke:"url(#ag-green)",strokeWidth:"34",strokeLinecap:"round"})})]}),(0,o.jsxs)(j,{children:[(0,o.jsxs)("div",{className:"name",children:["DIBYAJYOTI",(0,o.jsx)("span",{children:"."})]}),(0,o.jsx)("div",{className:"tagline",children:"Senior Software Engineer \xb7 London"})]})]})}}}]);
//# sourceMappingURL=111.65534fdd.chunk.js.map