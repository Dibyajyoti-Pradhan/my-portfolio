"use strict";(globalThis.webpackChunkmy_portfolio=globalThis.webpackChunkmy_portfolio||[]).push([[923],{923(s,t,e){e.r(t),e.d(t,{default:()=>h});var i=e(43),a=e(820),o=e(579);const n="#B5152C",c="#1944A8",p="#0E7A4D",r="#6A2A8C",l="#D9A024",w="#0A0A0A",m=a.i7`
  0%   { fill-opacity: 0; }
  55%  { fill-opacity: 1; }
  72%  { fill-opacity: 0.88; }
  100% { fill-opacity: 1; }
`,d=a.i7`
  0%   { opacity: 0; }
  35%  { opacity: 0.58; }
  100% { opacity: 0; }
`,f=a.i7`
  0%   { opacity: 0; transform: translateY(8px); letter-spacing: 0.06em; }
  100% { opacity: 1; transform: translateY(0);   letter-spacing: 0.18em; }
`,x=a.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  background: ${w};
  overflow: hidden;
  transition: opacity ${400}ms ease;
  opacity: ${s=>{let{$fade:t}=s;return t?0:1}};
`,g=a.Ay.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  .shard {
    fill-opacity: 0;
    stroke: ${w};
    stroke-linejoin: round;
    stroke-linecap: round;
    animation: ${m} ${320}ms cubic-bezier(0.22, 1, 0.36, 1)
      both;
  }
`,u=a.Ay.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 75% 75% at 50% 50%,
    rgba(255, 232, 175, 0.95) 0%,
    rgba(255, 220, 150, 0.55) 40%,
    rgba(255, 200, 110, 0) 80%
  );
  mix-blend-mode: screen;
  opacity: 0;
  animation: ${d} ${360}ms ease-out ${1500}ms both;
  z-index: 2;
`,y=a.Ay.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 3;
  text-align: center;
  font-family: -apple-system, "Inter", "Helvetica Neue", Arial, sans-serif;
  opacity: 0;
  animation: ${f} 700ms cubic-bezier(0.16, 1, 0.3, 1) ${900}ms
    both;

  .name {
    font-size: clamp(28px, 5.4vw, 58px);
    font-weight: 900;
    letter-spacing: 0.18em;
    color: #fff6e2;
    text-shadow:
      0 0 14px rgba(255, 220, 140, 0.55),
      0 0 2px rgba(10, 10, 10, 0.9),
      0 1px 0 rgba(10, 10, 10, 0.8);

    span {
      color: ${n};
      text-shadow:
        0 0 14px rgba(181, 21, 44, 0.7),
        0 0 2px rgba(10, 10, 10, 0.9);
      margin-left: 0.02em;
    }
  }

  .tagline {
    font-family: "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;
    font-size: clamp(10px, 1.1vw, 12px);
    color: rgba(255, 240, 200, 0.82);
    letter-spacing: 0.34em;
    text-transform: uppercase;
    text-shadow: 0 0 8px rgba(255, 220, 140, 0.4);
  }
`,b=[{c:l,pts:"550,300 525,343 475,343 450,300 475,257 525,257",sw:4},{c:c,pts:"550,300 613,365 525,343",sw:4},{c:n,pts:"525,343 500,430 475,343",sw:4},{c:c,pts:"475,343 387,365 450,300",sw:4},{c:n,pts:"450,300 387,235 475,257",sw:4},{c:c,pts:"475,257 500,170 525,257",sw:4},{c:n,pts:"525,257 613,235 550,300",sw:4},{c:p,pts:"550,300 613,365 630,300 613,235",sw:4},{c:r,pts:"525,343 500,430 565,413 613,365",sw:4},{c:p,pts:"475,343 387,365 435,413 500,430",sw:4},{c:r,pts:"450,300 387,235 370,300 387,365",sw:4},{c:p,pts:"475,257 500,170 435,187 387,235",sw:4},{c:r,pts:"525,257 613,235 565,187 500,170",sw:4},{c:n,pts:"630,300 770,300 734,435 613,365",sw:5},{c:c,pts:"613,365 734,435 635,534 565,413",sw:5},{c:p,pts:"565,413 635,534 500,570 500,430",sw:5},{c:r,pts:"500,430 500,570 365,534 435,413",sw:5},{c:l,pts:"435,413 365,534 266,435 387,365",sw:5},{c:n,pts:"387,365 266,435 230,300 370,300",sw:5},{c:c,pts:"370,300 230,300 266,165 387,235",sw:5},{c:p,pts:"387,235 266,165 365,66 435,187",sw:5},{c:r,pts:"435,187 365,66 500,30 500,170",sw:5},{c:l,pts:"500,170 500,30 635,66 565,187",sw:5},{c:n,pts:"565,187 635,66 734,165 613,235",sw:5},{c:c,pts:"613,235 734,165 770,300 630,300",sw:5},{c:p,pts:"770,300 1000,300 1000,589 734,435",sw:5},{c:r,pts:"734,435 1000,589 673,600 635,534",sw:5},{c:l,pts:"635,534 673,600 500,600 500,570",sw:5},{c:n,pts:"500,570 500,600 327,600 365,534",sw:5},{c:c,pts:"365,534 327,600 0,589 266,435",sw:5},{c:p,pts:"266,435 0,589 0,300 230,300",sw:5},{c:r,pts:"230,300 0,300 0,11 266,165",sw:5},{c:l,pts:"266,165 0,11 327,0 365,66",sw:5},{c:n,pts:"365,66 327,0 500,0 500,30",sw:5},{c:c,pts:"500,30 500,0 673,0 635,66",sw:5},{c:p,pts:"635,66 673,0 1000,11 734,165",sw:5},{c:r,pts:"734,165 1000,11 1000,300 770,300",sw:5}],h=s=>{let{onFinish:t}=s;const[e,a]=(0,i.useState)(!1),[n,c]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{const s=setTimeout(()=>a(!0),1850),e=setTimeout(()=>{c(!0),t&&t()},2250);return()=>{clearTimeout(s),clearTimeout(e)}},[]),n?null:(0,o.jsxs)(x,{$fade:e,children:[(0,o.jsx)(g,{viewBox:"0 0 1000 600",preserveAspectRatio:"none",children:b.map((s,t)=>(0,o.jsx)("polygon",{className:"shard",points:s.pts,fill:s.c,strokeWidth:s.sw,style:{animationDelay:30*t+"ms"}},t))}),(0,o.jsx)(u,{}),(0,o.jsxs)(y,{children:[(0,o.jsxs)("div",{className:"name",children:["DIBYAJYOTI",(0,o.jsx)("span",{children:"."})]}),(0,o.jsx)("div",{className:"tagline",children:"Senior Software Engineer \xb7 London"})]})]})}}}]);
//# sourceMappingURL=923.d2ac9e35.chunk.js.map