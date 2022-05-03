import React, { useEffect, useState } from "react"
import './App2.css';
import Animate from "./animations"

import dataImages from "./dataImages"

function App() {
  useEffect(()=>{
    Animate()
  })

  const [images, setImages] = useState(dataImages.data.images)
  const [toggle, setToggle]= useState(true)
  
 
  const randomNumber = Math.floor(Math.random() * 4)
  console.log(randomNumber)
  const randomImage = images[randomNumber].url;
  const randomTitle = images[randomNumber].title;
  
  const toggleZoom =()=>{
    setToggle(!toggle);
  }

  return (
    
      
    
    <main>
      <div className="zoomImage" style={{opacity: toggle && 0}}>
        <img src="" alt="" />
      </div>
      <div className="sections">

      <div className="section first">
        <div className="title"><p>Bra</p><span>ss</span><p>ai</p></div>
        
          <img src={randomImage} alt={randomTitle} />
        
        </div>

        <div className="section second">

          <img className="image2" src={images[2].url} alt=""/>
        </div>

        
        

        <div className="section third"></div>
        </div>
    </main>
    
  );
}

export default App;
