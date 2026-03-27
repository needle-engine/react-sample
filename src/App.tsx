import React from 'react'
import { NeedleEngine } from './NeedleEngine';
import { NeedleXRSession, onStart, WebXR } from '@needle-tools/engine';


const App = () => {

  const startWebXR = () => {
    return onStart(ctx => {
      const webxr = ctx.scene.getOrAddComponent(WebXR);
      webxr.autoPlace = false; // disable auto placement, we want the user to tap to place the scene
      webxr.usePlacementReticle = true; // show the placement reticle to help the user find surfaces to place the scene
      webxr.usePlacementAdjustment = true; // allow the user to adjust the position, rotation and scale of the scene with touch after placing
      webxr.arScale = 5; // scale of the user in AR (larger values make the scene smaller in AR)
      webxr.enterAR(); // start AR session
    })
  };

  const clickButton = () => {
    const session = NeedleXRSession.active;
    if (session) {
      const newScale = Math.random() * 2 + 0.5;
      session.rig?.gameObject.scale.set(newScale, newScale, newScale);
    }
  }

  return (
    <>
      <div className="top">
        <h1>
          <a id="needle" href="https://needle.tools" target="_blank">Needle Engine</a>
          in
          <a id="react" href="https://github.com/needle-engine/react-sample" target="_blank">React</a>
        </h1>
      </div>
      <div id="container" className="needle-container">
        <NeedleEngine style={{ position: "relative", display: "flex" }} loading-style="light">
          <button className="desktop xrbutton" type="button" onClick={startWebXR} >
            Start WebXR
          </button>
          <h2 className="ar xrbutton" onClick={clickButton}>Hello AR</h2>
        </NeedleEngine>
      </div>
    </>
  );
};

export default App;