import "./App.css";

import Header from "./component/Header";
import React, { useState } from "react";

function App() {

const [num,setNum]=useState(1);
function inc(n){
  setNum(num + n);
}
function dec(n){
  setNum(num-n);
}

  return (
    <div className="App">
      <Header />

      <div className="main">
        <h1 className="heading" >{num}</h1>

        <div className="button">
          <button className="btn" onClick={() => inc(2)} >increment</button>
          <button className="btn" onClick={() =>dec(1)}>decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
