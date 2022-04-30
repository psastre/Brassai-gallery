import React, { useEffect } from "react"
import './App.css';

import Animate from "./animations"

function App() {
  useEffect(()=>{
    Animate()
  })
  
  return (
    <main>
      <div className="section first">
        <div className="title"><p>Bra</p><span>ss</span><p>i</p></div>
        
        <div className="images br1"></div>
        <img src="./images/BR1.jpg" alt="" />
        </div>
        <div className="section second"></div>
        <div className="section third"></div>
    </main>
  );
}

export default App;
