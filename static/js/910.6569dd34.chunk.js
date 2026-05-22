"use strict";(globalThis.webpackChunkmy_portfolio=globalThis.webpackChunkmy_portfolio||[]).push([[910],{910(t,e,a){a.r(e),a.d(e,{default:()=>M});var r=a(43),i=a(820),n=a(579);const o="DIBYAJYOTI.",s="rgba(120, 110, 90, 0.18)",l="#1c1812",p=95*(o.length-1)+260,c=p+20,u=p+40,d=c+200+480,m=d+550+80,f=i.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  background-color: rgba(0, 0, 0, ${t=>{let{$bgOff:e}=t;return e?0:1}});
  transition: background-color ${t=>{let{$bgMs:e}=t;return e}}ms ease,
              opacity 450ms ease;
  opacity: ${t=>{let{$fade:e}=t;return e?0:1}};
`,g=i.i7`
  0%   { transform: translateY(0)       rotate(0deg); }
  100% { transform: translateY(-110vh)  rotate(-1.2deg); }
`,x=i.Ay.div`
  position: absolute;
  inset: 0;
  background-color: ${"#EFE9DC"};
  /* Faint horizontal ruled lines (typewriter paper feel) */
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 31px,
    ${s} 31px,
    ${s} 32px
  );
  /* Subtle vignette + warmth on top of the rule pattern */
  box-shadow: inset 0 0 180px rgba(120, 95, 60, 0.18);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${t=>{let{$exit:e}=t;return e&&i.AH`
      animation: ${g} ${550}ms cubic-bezier(0.55, 0.05, 0.55, 1.05) forwards;
    `}}
`,b=i.Ay.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.35;
  background-image:
    radial-gradient(rgba(60, 50, 30, 0.10) 1px, transparent 1px),
    radial-gradient(rgba(60, 50, 30, 0.06) 1px, transparent 1px);
  background-size: 3px 3px, 7px 7px;
  background-position: 0 0, 1px 2px;
  mix-blend-mode: multiply;
`,y=i.i7`
  0%   { transform: translateX(-50%) scaleX(0);   opacity: 0; }
  5%   { opacity: 0.55; }
  95%  { transform: translateX(0)    scaleX(1);   opacity: 0.55; }
  100% { transform: translateX(0)    scaleX(1);   opacity: 0; }
`,h=i.Ay.div`
  position: relative;
  width: min(46vw, 620px);
  height: 1px;
  margin-bottom: 18px;
  background: ${l};
  transform-origin: left center;
  opacity: 0;
  animation: ${y} ${p+80}ms linear forwards;
  &::after {
    /* The carriage 'head' — a small notch at the right edge of the moving line */
    content: "";
    position: absolute;
    right: -3px;
    top: -3px;
    width: 6px;
    height: 7px;
    background: ${l};
    border-radius: 1px;
    opacity: 0.85;
  }
`,$=i.i7`
  0%   {
    opacity: 0;
    transform: translateY(-10px) scale(1.32) rotate(var(--jit));
    filter: blur(0.6px);
  }
  55%  {
    opacity: 1;
    transform: translateY(2px) scale(0.94) rotate(calc(var(--jit) * 0.4));
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0)   scale(1)    rotate(0deg);
    filter: blur(0);
  }
`,v=i.Ay.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  font-family: "Courier New", "Courier", "SF Mono", "JetBrains Mono", Menlo, monospace;
  font-weight: 700;
  font-size: clamp(40px, 9vw, 110px);
  letter-spacing: 0.06em;
  color: ${l};
  user-select: none;
`,w=i.Ay.span`
  display: inline-block;
  opacity: 0;
  /* Each letter gets its own jitter angle via CSS var --jit (set inline). */
  animation: ${$} ${260}ms cubic-bezier(0.2, 0.9, 0.25, 1.1) forwards;
  animation-delay: ${t=>{let{$i:e}=t;return 95*e}}ms;
  /* Period in the brand orange to match the rest of the curtains */
  ${t=>{let{$period:e}=t;return e&&i.AH`
      color: ${"#ff7a1a"};
    `}}
  /* Tiny x-axis nudge per index — typewriter ribbon slop */
  margin-left: ${t=>{let{$nudge:e}=t;return e}}px;
`,j=i.i7`
  0%   { opacity: 0; transform: translateY(4px); }
  100% { opacity: 1; transform: translateY(0); }
`,k=i.Ay.div`
  margin-top: 22px;
  font-family: "Courier New", "Courier", "SF Mono", "JetBrains Mono", Menlo, monospace;
  font-size: clamp(10px, 1.1vw, 14px);
  letter-spacing: 0.32em;
  color: ${"#6b6f76"};
  opacity: 0;
  animation: ${j} ${360}ms ease-out forwards;
  animation-delay: ${u}ms;
`,A=i.i7`
  0%   { opacity: 0; }
  35%  { opacity: 0.72; }
  100% { opacity: 0; }
`,S=i.Ay.div`
  position: absolute;
  inset: 0;
  background: #ffffff;
  opacity: 0;
  animation: ${A} ${200}ms ease-out forwards;
  animation-delay: ${c}ms;
  pointer-events: none;
`,T=t=>{let e=2654435761*t>>>0;e^=e>>>13,e=1597334677*e>>>0;return(4*((e>>>0)%1e3/1e3-.5)).toFixed(2)+"deg"},E=t=>{let e=1103515245*(t+7)+12345>>>0;e^=e>>>16;return(1.2*((e>>>0)%1e3/1e3-.5)).toFixed(2)},M=t=>{let{onFinish:e}=t;const[a,i]=(0,r.useState)(!1),[s,l]=(0,r.useState)(!1),[p,c]=(0,r.useState)(!1),[u,g]=(0,r.useState)(!1),y=(0,r.useRef)(e);y.current=e;return(0,r.useEffect)(()=>{const t=[];return t.push(setTimeout(()=>g(!0),d)),t.push(setTimeout(()=>i(!0),d+Math.round(302.5))),t.push(setTimeout(()=>l(!0),m-200)),t.push(setTimeout(()=>{c(!0),y.current&&y.current()},m+250)),()=>t.forEach(clearTimeout)},[]),p?null:(0,n.jsx)(f,{$bgOff:a,$bgMs:320,$fade:s,children:(0,n.jsxs)(x,{$exit:u,children:[(0,n.jsx)(b,{}),(0,n.jsx)(h,{}),(0,n.jsx)(v,{"aria-label":o,children:o.split("").map((t,e)=>(0,n.jsx)(w,{$i:e,$period:"."===t,$nudge:E(e),style:{"--jit":T(e)},children:t},`${t}-${e}`))}),(0,n.jsx)(k,{children:"SENIOR SOFTWARE ENGINEER \xb7 LONDON"}),(0,n.jsx)(S,{})]})})}}}]);
//# sourceMappingURL=910.6569dd34.chunk.js.map