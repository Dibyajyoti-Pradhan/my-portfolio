import React, { useRef } from "react";
import ClassicCurtain from "./ClassicCurtain";
import ParticleCurtain from "./ParticleCurtain";
import ToonCurtain from "./ToonCurtain";
import SlotCurtain from "./SlotCurtain";
import OrigamiCurtain from "./OrigamiCurtain";
import SkywriterCurtain from "./SkywriterCurtain";
import SmokeCurtain from "./SmokeCurtain";
import TetrisCurtain from "./TetrisCurtain";
import SketchCurtain from "./SketchCurtain";
import HologramCurtain from "./HologramCurtain";
import MagneticCurtain from "./MagneticCurtain";
import ShutterCurtain from "./ShutterCurtain";
import LightningCurtain from "./LightningCurtain";
import SandCurtain from "./SandCurtain";
import StampCurtain from "./StampCurtain";

const variants = [
  ClassicCurtain,
  ParticleCurtain,
  ToonCurtain,
  SlotCurtain,
  OrigamiCurtain,
  SkywriterCurtain,
  SmokeCurtain,
  TetrisCurtain,
  SketchCurtain,
  HologramCurtain,
  MagneticCurtain,
  ShutterCurtain,
  LightningCurtain,
  SandCurtain,
  StampCurtain,
];

const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
};

const CurtainLoader = (props) => {
  // Mobile always Classic; desktop rotates variants every 10s by user clock
  const choiceRef = useRef(
    isMobile() ? 0 : Math.floor(Date.now() / 10000) % variants.length
  );
  const Variant = variants[choiceRef.current];
  return <Variant {...props} />;
};

export default CurtainLoader;
