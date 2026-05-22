"use strict";(globalThis.webpackChunkmy_portfolio=globalThis.webpackChunkmy_portfolio||[]).push([[403],{403(t,e,r){r.r(e),r.d(e,{default:()=>h});var o=r(43),i=r(820),n=r(579);const s=i.i7`
  0% { clip-path: inset(0 100% 0 0); opacity: 0; }
  20% { opacity: 1; }
  100% { clip-path: inset(0 0% 0 0); opacity: 1; }
`,a=i.i7`
  0%   { transform: translateY(0); border-bottom-left-radius: 0; border-bottom-right-radius: 0; }
  15%  { border-bottom-left-radius: 48px; border-bottom-right-radius: 48px; }
  100% { transform: translateY(-102%); border-bottom-left-radius: 48px; border-bottom-right-radius: 48px; }
`,l=i.i7`
  0%   { transform: translateY(0); border-top-left-radius: 0; border-top-right-radius: 0; }
  15%  { border-top-left-radius: 48px; border-top-right-radius: 48px; }
  100% { transform: translateY(102%); border-top-left-radius: 48px; border-top-right-radius: 48px; }
`,d=i.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  backdrop-filter: blur(3px);
  transition: opacity 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  opacity: ${t=>{let{$unblur:e}=t;return e?0:1}};
  pointer-events: none;
`,p=i.Ay.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  height: 50%;
  z-index: 9999;
  background: ${t=>{let{theme:e}=t;return e.colors.background}};
  border-left: 1px solid ${t=>{let{theme:e}=t;return e.colors.divider}};
  border-right: 1px solid ${t=>{let{theme:e}=t;return e.colors.divider}};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  overflow: hidden;
`,c=(0,i.Ay)(p)`
  top: 0;
  border-bottom: 1px solid ${t=>{let{theme:e}=t;return e.colors.divider}};
  align-items: flex-end;
  padding-bottom: 4px;
  animation: ${a} 1.6s cubic-bezier(0.76, 0, 0.24, 1) 1s forwards;
`,u=(0,i.Ay)(p)`
  bottom: 0;
  border-top: 1px solid ${t=>{let{theme:e}=t;return e.colors.divider}};
  align-items: flex-start;
  padding-top: 4px;
  animation: ${l} 1.6s cubic-bezier(0.76, 0, 0.24, 1) 1s forwards;
`,m=i.Ay.div`
  text-align: center;
  padding-bottom: 20px;

  .monogram {
    font-size: clamp(28px, 5vw, 44px);
    font-weight: 900;
    letter-spacing: -0.06em;
    color: ${t=>{let{theme:e}=t;return e.colors.text}};
    line-height: 1;
    animation: ${s} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;

    span {
      color: ${t=>{let{theme:e}=t;return e.colors.primary}};
    }
  }
`,b=i.Ay.div`
  text-align: center;
  padding-top: 20px;

  .tagline {
    font-size: 11px;
    font-family: ${t=>{let{theme:e}=t;return e.fonts.mono}};
    color: ${t=>{let{theme:e}=t;return e.colors.textTertiary}};
    letter-spacing: 0.2em;
    text-transform: uppercase;
    animation: ${s} 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
  }
`,h=t=>{let{onFinish:e}=t;const[r,i]=(0,o.useState)(!0),[s,a]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{const t=e,r=setTimeout(()=>{a(!0),setTimeout(()=>{i(!1),t&&t()},700)},2400);return()=>clearTimeout(r)},[]),r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{$unblur:s}),(0,n.jsx)(c,{children:(0,n.jsx)(m,{children:(0,n.jsxs)("div",{className:"monogram",children:["DIBYAJYOTI",(0,n.jsx)("span",{children:"."})]})})}),(0,n.jsx)(u,{children:(0,n.jsx)(b,{children:(0,n.jsx)("div",{className:"tagline",children:"Senior Software Engineer \xb7 London"})})})]}):null}}}]);
//# sourceMappingURL=403.3dc2e9ad.chunk.js.map