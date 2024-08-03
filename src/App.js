import React, { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [head, setHead] = useState(true);
  const [no, setNo] = useState(false);

  const handleYes = () => {
    setShow(true);
    setNo(false);
    setHead(false);
  };

  const handleNo = () => {
    setNo(true);
    setShow(false);
    setHead(false);
  };

  const handleGoHome = () => {
    setShow(false);
    setNo(false);
    setHead(true);
  };

  return (
    <div className="App">
      {head ? (
        <>
          <p>Machu Sorry</p>
          <div className="hugs"></div>
          <div className="accept">
            <p>Will you Accept my Sorry</p>
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
          </div>
        </>
      ) : null}

      {show && (
        <>
          <p>Love you Machu</p>
          <div className="love"></div>
          <button onClick={handleGoHome}>Go Home</button>
        </>
      )}

      {no && (
        <>
          <p>Sorry da laddu kutty</p>
          <div className="sorry"></div>
          <button onClick={handleGoHome}>Go Home</button>
        </>
      )}
    </div>
  );
}

export default App;
