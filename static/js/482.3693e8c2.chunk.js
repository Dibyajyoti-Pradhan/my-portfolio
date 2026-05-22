"use strict";(globalThis.webpackChunkmy_portfolio=globalThis.webpackChunkmy_portfolio||[]).push([[482],{482(e,t,s){s.r(t),s.d(t,{default:()=>j});var i=s(43),a=s(820),r=s(579);const o=1080,n="#F4EBD5",l="#0C0A08",c="rgba(40, 32, 22, 0.62)",h=a.i7`
  from { stroke-dashoffset: var(--len); }
  to   { stroke-dashoffset: 0; }
`,m=a.i7`
  0%   { transform: scale(0);   opacity: 0; }
  60%  { transform: scale(1.35); opacity: 1; }
  100% { transform: scale(1);   opacity: 1; }
`,p=a.i7`
  0%   { opacity: 0; transform: translateY(6px); letter-spacing: 0.04em; }
  100% { opacity: 1; transform: translateY(0);   letter-spacing: 0.18em; }
`,d=a.i7`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`,u=a.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  background: radial-gradient(
    ellipse 130% 90% at 50% 50%,
    ${n} 0%,
    ${n} 55%,
    ${"#E9DCBA"} 100%
  );
  overflow: hidden;
  transition: opacity ${400}ms ease;
  opacity: ${e=>{let{$fade:t}=e;return t?0:1}};
`,f=a.Ay.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.35;
  mix-blend-mode: multiply;
  pointer-events: none;
`,b=a.Ay.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;

  .brush {
    fill: none;
    stroke: ${l};
    stroke-linecap: round;
    stroke-linejoin: round;
    animation: ${h} ${900}ms cubic-bezier(0.22, 0.78, 0.34, 1) both;
  }

  .brush--halo {
    stroke: ${c};
    filter: blur(3.5px);
    opacity: 0.7;
  }

  .brush--one {
    animation-delay: 0ms;
  }

  .brush--two {
    animation-delay: ${220}ms;
  }

  .splatter {
    fill: ${"rgba(12, 10, 8, 0.78)"};
    transform-origin: 760px 470px;
    transform-box: fill-box;
    opacity: 0;
    animation: ${m} 260ms cubic-bezier(0.34, 1.56, 0.64, 1)
      ${980}ms both;
  }

  .splatter--micro {
    fill: ${c};
    transform-origin: 800px 455px;
    transform-box: fill-box;
    opacity: 0;
    animation: ${m} 240ms cubic-bezier(0.34, 1.56, 0.64, 1)
      ${1040}ms both;
  }
`,x=a.Ay.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  z-index: 2;
  text-align: center;
  font-family: -apple-system, "Inter", "Helvetica Neue", Arial, sans-serif;
  opacity: 0;
  animation: ${d} 600ms ease-out ${o}ms forwards;

  .name {
    font-size: clamp(28px, 5.4vw, 58px);
    font-weight: 900;
    letter-spacing: 0.18em;
    color: ${l};
    text-shadow: 0 0 1px rgba(12, 10, 8, 0.15);
    animation: ${p} 700ms cubic-bezier(0.16, 1, 0.3, 1)
      ${o}ms both;

    span {
      color: #B22222;
      /* hanko-red dot for the period */
      margin-left: 0.02em;
    }
  }

  .tagline {
    font-family: "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;
    font-size: clamp(10px, 1.1vw, 12px);
    color: ${c};
    letter-spacing: 0.34em;
    text-transform: uppercase;
    animation: ${p} 700ms cubic-bezier(0.16, 1, 0.3, 1)
      ${1240}ms both;
  }
`,y="M 40 282 C 180 220, 320 332, 500 270 S 820 220, 970 268",g="M 110 392 C 290 432, 460 348, 660 388 S 870 410, 950 372",$=1100,w=920,j=e=>{let{onFinish:t}=e;const[s,a]=(0,i.useState)(!1),[o,n]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{const e=setTimeout(()=>a(!0),1700),s=setTimeout(()=>{n(!0),t&&t()},2100);return()=>{clearTimeout(e),clearTimeout(s)}},[]),o?null:(0,r.jsxs)(u,{$fade:s,children:[(0,r.jsxs)(f,{children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("filter",{id:"iw-grain",x:"0",y:"0",width:"100%",height:"100%",children:[(0,r.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:"0.85",numOctaves:"2",seed:"7"}),(0,r.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.42 0 0 0 0 0.32 0 0 0 0 0.18 0 0 0 0.55 0"})]})}),(0,r.jsx)("rect",{width:"100%",height:"100%",filter:"url(#iw-grain)"})]}),(0,r.jsxs)(b,{viewBox:"0 0 1000 600",preserveAspectRatio:"none",children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("filter",{id:"iw-bleed",x:"-5%",y:"-5%",width:"110%",height:"110%",children:[(0,r.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:"0.9",numOctaves:"1",seed:"3",result:"noise"}),(0,r.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"2.4",xChannelSelector:"R",yChannelSelector:"G"})]})}),(0,r.jsx)("path",{className:"brush brush--halo brush--one",d:y,strokeWidth:"78",style:{"--len":$,strokeDasharray:$}}),(0,r.jsx)("path",{className:"brush brush--one",d:y,strokeWidth:"56",filter:"url(#iw-bleed)",style:{"--len":$,strokeDasharray:$}}),(0,r.jsx)("path",{className:"brush brush--halo brush--two",d:g,strokeWidth:"54",style:{"--len":w,strokeDasharray:w}}),(0,r.jsx)("path",{className:"brush brush--two",d:g,strokeWidth:"34",filter:"url(#iw-bleed)",style:{"--len":w,strokeDasharray:w}}),(0,r.jsx)("path",{className:"splatter",d:"M 760 470 m -16 -2 q 2 -10 12 -12 q 12 -2 18 6 q 8 8 4 18 q -2 10 -14 12 q -12 2 -18 -6 q -6 -8 -2 -18 z",filter:"url(#iw-bleed)"}),(0,r.jsx)("path",{className:"splatter--micro",d:"M 800 455 m -4 -1 q 1 -4 5 -4 q 5 -1 6 3 q 1 4 -3 5 q -4 1 -6 -1 q -3 -2 -2 -3 z"})]}),(0,r.jsxs)(x,{children:[(0,r.jsxs)("div",{className:"name",children:["DIBYAJYOTI",(0,r.jsx)("span",{children:"."})]}),(0,r.jsx)("div",{className:"tagline",children:"Senior Software Engineer \xb7 London"})]})]})}}}]);
//# sourceMappingURL=482.3693e8c2.chunk.js.map