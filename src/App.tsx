import React, { useRef } from 'react'
import { NeedleEngine } from './NeedleEngine';


const App = () => {
  const goToNeedle = () => {
    window.location.href = "https://needle.tools";
  };

  return (
    <>
      <NeedleEngine>
        <button type="button" onClick={goToNeedle}>
          Visit Needle 🌵
        </button>
      </NeedleEngine>
    </>
  );
};

export default App;