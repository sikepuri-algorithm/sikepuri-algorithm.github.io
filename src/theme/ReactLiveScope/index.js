import React from "react";
import LifeGameTmp from "@site/src/components/LifeGame/LifeGame";
// Add react-live imports you need here

function LifeGame() {
  return (
    <>
      <div style={{ maxWidth: "200px" }}>
        <LifeGameTmp />
      </div>
    </>
  );
}

const ReactLiveScope = {
  React,
  ...React,
  LifeGame,
};
export default ReactLiveScope;
