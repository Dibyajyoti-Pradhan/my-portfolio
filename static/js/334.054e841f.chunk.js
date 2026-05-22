"use strict";(globalThis.webpackChunkmy_portfolio=globalThis.webpackChunkmy_portfolio||[]).push([[334],{334(e,t,r){r.r(t),r.d(t,{default:()=>L});var i=r(43),s=r(820),o=r(579);const n="#11385C",a="#A6D9FF",l="#E0F4FF",h="#E0F4FF",d="PORTFOLIO v2.0",c="DRG-001 \xb7 A1 \xb7 SCALE 1:1",p=1830,x=s.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  background-color: rgba(0, 0, 0, ${e=>{let{$bgOff:t}=e;return t?0:1}});
  transition: background-color ${e=>{let{$bgMs:t}=e;return t}}ms ease,
              opacity 450ms ease;
  opacity: ${e=>{let{$fade:t}=e;return t?0:1}};
`,m=s.Ay.div`
  position: absolute;
  inset: 0;
  background-color: ${n};
  opacity: 0;
  animation: ${s.i7`
    0%   { opacity: 0; }
    100% { opacity: 1; }
  `} 320ms ease-out 40ms forwards;
  overflow: hidden;
`,f=s.Ay.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
`,u=s.i7`
  from { stroke-dashoffset: 1; }
  to   { stroke-dashoffset: 0; }
`,y=s.i7`
  from { opacity: 0; }
  to   { opacity: 1; }
`,w=s.Ay.g`
  fill: none;
  stroke: ${l};
  stroke-width: ${e=>{let{$w:t}=e;return t||1.4}};
  stroke-linecap: round;
  stroke-linejoin: round;
  /* pathLength="1" set on each path so a single dasharray works everywhere */
  & path, & line, & circle, & rect, & polyline {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ${u} ${900}ms cubic-bezier(0.55, 0.05, 0.4, 0.95)
                 ${e=>{let{$i:t}=e;return 130*t}}ms forwards;
  }
  /* dimension-line labels / arrowheads pop AFTER the stroke completes */
  & .label, & .tick {
    opacity: 0;
    animation: ${y} 220ms ease-out
                 ${e=>{let{$i:t}=e;return 130*t+900-80}}ms forwards;
  }
`,g=s.Ay.div`
  position: absolute;
  right: clamp(20px, 4vw, 56px);
  bottom: clamp(18px, 3.6vw, 48px);
  color: ${h};
  font-family: "Courier New", "Courier", "SF Mono", "JetBrains Mono", Menlo, monospace;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-align: right;
  user-select: none;
`,$=s.i7`
  from { width: 0; }
  to   { width: ${14}ch; }
`,j=s.i7`
  from { width: 0; }
  to   { width: ${24}ch; }
`,b=s.i7`
  0%, 49%   { border-right-color: ${h}; }
  50%, 100% { border-right-color: transparent; }
`,k=s.Ay.div`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 700;
  font-size: clamp(14px, 1.6vw, 22px);
  border-right: 2px solid ${h};
  width: 0;
  animation:
    ${$} ${700}ms steps(${14}) ${650}ms forwards,
    ${b} 700ms steps(1) ${650}ms infinite;
`,v=s.Ay.div`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  color: ${"rgba(224,244,255,0.55)"};
  font-weight: 500;
  font-size: clamp(9px, 0.95vw, 12px);
  margin-top: 8px;
  letter-spacing: 0.28em;
  width: 0;
  animation:
    ${j} 520ms steps(${24}) ${1430}ms forwards;
`,A=()=>{const e=420,t=300,r=175,i=60,s=60,h=880,d=480,c=545,p=685;return(0,o.jsxs)(f,{viewBox:"0 0 1000 600",preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",children:[(0,o.jsxs)("defs",{children:[(0,o.jsx)("pattern",{id:"bpGridMinor",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:(0,o.jsx)("path",{d:"M 20 0 L 0 0 0 20",fill:"none",stroke:a,strokeWidth:"0.5",opacity:"0.12"})}),(0,o.jsxs)("pattern",{id:"bpGridMajor",x:"0",y:"0",width:"100",height:"100",patternUnits:"userSpaceOnUse",children:[(0,o.jsx)("rect",{width:"100",height:"100",fill:"url(#bpGridMinor)"}),(0,o.jsx)("path",{d:"M 100 0 L 0 0 0 100",fill:"none",stroke:a,strokeWidth:"0.9",opacity:"0.20"})]}),(0,o.jsx)("marker",{id:"bpArrow",viewBox:"0 0 10 10",refX:"9",refY:"5",markerWidth:"9",markerHeight:"9",orient:"auto-start-reverse",children:(0,o.jsx)("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:l})})]}),(0,o.jsx)("rect",{x:"0",y:"0",width:"1000",height:"600",fill:"url(#bpGridMajor)"}),(0,o.jsx)(w,{$i:0,$w:1.6,children:(0,o.jsx)("rect",{x:i,y:s,width:h,height:d,pathLength:"1"})}),(0,o.jsx)(w,{$i:1,$w:1.8,children:(0,o.jsx)("circle",{cx:e,cy:t,r:r,pathLength:"1"})}),(0,o.jsx)(w,{$i:2,$w:1.2,children:(0,o.jsx)("circle",{cx:e,cy:t,r:95,pathLength:"1"})}),(0,o.jsxs)(w,{$i:3,$w:.9,children:[(0,o.jsx)("line",{x1:215,y1:t,x2:625,y2:t,pathLength:"1",strokeDasharray:"6 4",style:{strokeDasharray:"1",strokeDashoffset:"1"}}),(0,o.jsx)("line",{x1:e,y1:95,x2:e,y2:505,pathLength:"1"})]}),(0,o.jsxs)(w,{$i:4,$w:1.1,children:[(0,o.jsx)("line",{x1:245,y1:483,x2:245,y2:557,pathLength:"1"}),(0,o.jsx)("line",{x1:595,y1:483,x2:595,y2:557,pathLength:"1"}),(0,o.jsx)("line",{x1:245,y1:c,x2:595,y2:c,pathLength:"1",markerStart:"url(#bpArrow)",markerEnd:"url(#bpArrow)"}),(0,o.jsxs)("g",{className:"label",children:[(0,o.jsx)("rect",{x:384,y:531,width:"72",height:"22",fill:n,stroke:"none"}),(0,o.jsx)("text",{x:e,y:547,textAnchor:"middle",fontFamily:'"Courier New", "Courier", monospace',fontSize:"14",fontWeight:"700",fill:l,letterSpacing:"2",children:"350 mm"})]})]}),(0,o.jsxs)(w,{$i:5,$w:1.1,children:[(0,o.jsx)("line",{x1:603,y1:125,x2:697,y2:125,pathLength:"1"}),(0,o.jsx)("line",{x1:603,y1:475,x2:697,y2:475,pathLength:"1"}),(0,o.jsx)("line",{x1:p,y1:125,x2:p,y2:475,pathLength:"1",markerStart:"url(#bpArrow)",markerEnd:"url(#bpArrow)"}),(0,o.jsxs)("g",{className:"label",children:[(0,o.jsx)("rect",{x:671,y:264,width:"28",height:"72",fill:n,stroke:"none"}),(0,o.jsx)("text",{x:p,y:t,textAnchor:"middle",dominantBaseline:"middle",fontFamily:'"Courier New", "Courier", monospace',fontSize:"14",fontWeight:"700",fill:l,letterSpacing:"2",transform:"rotate(-90 685 300)",children:"350 mm"})]})]})]})},L=e=>{let{onFinish:t}=e;const[r,s]=(0,i.useState)(!1),[n,a]=(0,i.useState)(!1),[l,h]=(0,i.useState)(!1),f=(0,i.useRef)(t);return f.current=t,(0,i.useEffect)(()=>{const e=[];return e.push(setTimeout(()=>s(!0),p)),e.push(setTimeout(()=>a(!0),1870)),e.push(setTimeout(()=>{h(!0),f.current&&f.current()},2440)),()=>e.forEach(clearTimeout)},[]),l?null:(0,o.jsx)(x,{$bgOff:r,$bgMs:260,$fade:n,children:(0,o.jsxs)(m,{children:[(0,o.jsx)(A,{}),(0,o.jsxs)(g,{children:[(0,o.jsx)(k,{children:d}),(0,o.jsx)(v,{children:c})]})]})})}}}]);
//# sourceMappingURL=334.054e841f.chunk.js.map