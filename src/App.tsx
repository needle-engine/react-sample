import React, { useRef } from 'react'
import { NeedleEngine } from './NeedleEngine';
import { ContextRegistry, GameObject, Rigidbody } from '@needle-tools/engine';
import { Vector3 } from 'three';

function randFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const App = () => {

  // Fetch rigidbodies from needle
  const bodies: Rigidbody[] = []
  ContextRegistry.addContextCreatedCallback((_context) => {
    bodies.push(...GameObject.findObjectsOfType(Rigidbody));
  })

  const performJump = () => {
    const vec = new Vector3(0, 1, 0);
    bodies.forEach((body) => {
      vec.set(0, randFloat(0.5, 5), 0);
      body.applyImpulse(vec);
    })
  };

  return (
    <>
      <div id="container" className="needle-container">
        <NeedleEngine style={{ position: "relative", display: "flex" }} loading-style="light">
          <div style={{ width: "100%", heigth: "100%" }}>
            <button type="button" onClick={performJump} className="jump-button">Squish!</button>
          </div>
        </NeedleEngine>
      </div>
      <div style={{ height: "30vh", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }}>
        <h1 style={{ width: "max(80%, 500px)", textAlign: "center" }}><a id="needle" href="https://needle.tools" target="_blank">Needle Engine</a> in <a id="react" href="https://github.com/needle-engine/react-sample" target="_blank">React</a></h1>
        <h2 style={{ width: "min(80%, 800px)", textAlign: "center" }}>The canvas can be transparent allowing for a seamless experience.<br />That's done by setting the camera's "Clear mode" to "Don't Clear".</h2>
      </div>
    </>
  );
};

export default App;