import React, { lazy, Suspense, useRef } from "react";

// Each variant becomes its own webpack chunk — only the selected one downloads.
const variants = [
  lazy(() => import("./ClassicCurtain")),
  lazy(() => import("./ParticleCurtain")),
  lazy(() => import("./ToonCurtain")),
  lazy(() => import("./SlotCurtain")),
  lazy(() => import("./OrigamiCurtain")),
  lazy(() => import("./SkywriterCurtain")),
  lazy(() => import("./SmokeCurtain")),
  lazy(() => import("./TetrisCurtain")),
  lazy(() => import("./SketchCurtain")),
  lazy(() => import("./HologramCurtain")),
  lazy(() => import("./MagneticCurtain")),
  lazy(() => import("./ShutterCurtain")),
  lazy(() => import("./LightningCurtain")),
  lazy(() => import("./SandCurtain")),
  lazy(() => import("./StampCurtain")),
  lazy(() => import("./GravityWellCurtain")),
  lazy(() => import("./CrystalGrowthCurtain")),
  lazy(() => import("./MercuryCurtain")),
  lazy(() => import("./ThreadCurtain")),
  lazy(() => import("./HourglassCurtain")),
];

const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
};

const CurtainLoader = (props) => {
  const choiceRef = useRef(
    isMobile() ? 0 : Math.floor(Date.now() / 10000) % variants.length
  );
  const Variant = variants[choiceRef.current];
  return (
    <Suspense fallback={null}>
      <Variant {...props} />
    </Suspense>
  );
};

export default CurtainLoader;
