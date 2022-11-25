import React from "react";
import LifeGame from "@site/src/components/LifeGame/LifeGame";
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  LifeGame,
};
export default ReactLiveScope;
