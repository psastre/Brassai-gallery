import React, { useEffect, useState } from "react"
import './App2.scss';
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import Animate from "./animations";

import dataImagesFront from "./dataImagesFront"
import dataGalleryTop from "./dataGalleryTop";
import dataGalleryMiddle from "./dataGalleryMiddle";
import dataGalleryBottom from "./dataGalleryBottom";

import CustomCursor from "./CustomCursor";

function App() {
  useEffect(()=>{
    Animate()
  },[])

  const images= dataImagesFront.data.images
  const [toggle, setToggle]= useState(false)
  const imagesGalleryTop= dataGalleryTop.data.imagesGallery
  const imagesGalleryMiddle = dataGalleryMiddle.data.imagesGallery
  const imagesGalleryBottom= dataGalleryBottom.data.imagesGallery
  const [gallerySelection, setGallerySelection] = useState()
  
  const randomNumber = Math.floor(Math.random() * 4)
  const randomImage = images[randomNumber].url;
  const randomTitle = images[randomNumber].title;
  

  const toggleZoom =(x)=>{
    setToggle(prevState=> !prevState);  
  }
  const changeZoomTop =(x)=>{
    setGallerySelection(dataGalleryTop.data.imagesGallery[x].url)
  }
  const changeZoomMiddle =(x)=>{
    setGallerySelection(dataGalleryMiddle.data.imagesGallery[x].url)
  }
  const changeZoomBottom =(x)=>{
    setGallerySelection(dataGalleryBottom.data.imagesGallery[x].url)
  }


  return (
      <div>

        <div className="zoomImage" onClick={toggleZoom} style={{display: toggle ? "flex" : "none"}}>
          <img src={gallerySelection} alt="" />
        </div>
        <main>
          <CustomCursor />
          
          
          
          <div className="sections">

          <div className="section first">
            <div className="title"><p>Bra</p><span>ss</span><p>aï</p></div>
            
              <img src={randomImage} onClick={toggleZoom} alt={randomTitle} key={randomTitle}  />
            
          </div>

          <About />
          <Gallery 
          toggleZoom={toggleZoom} 
          imagesGalleryTop={imagesGalleryTop} 
          imagesGalleryMiddle={imagesGalleryMiddle} 
          imagesGalleryBottom={imagesGalleryBottom} 
          changeZoomTop={changeZoomTop}
          changeZoomMiddle={changeZoomMiddle}
          changeZoomBottom={changeZoomBottom}/>
          <div className="section forth"></div>  
          <div className="section fifth"></div>
            </div>
      </main>
    </div>
  );
}

export default App;
