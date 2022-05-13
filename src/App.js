import React, { useEffect, useState } from "react"
import './App2.scss';
import Animate from "./animations"

import dataImages from "./dataImages"
import dataGallery from "./dataGallery";
import CustomCursor from "./CustomCursor";

function App() {
  useEffect(()=>{
    Animate()
  })

  const [images, setImages] = useState(dataImages.data.images)
  const [imagesGallery, setImagesGallery] = useState(dataGallery.data.imagesGallery)
  const [toggle, setToggle]= useState(false)
  
 
  const randomNumber = Math.floor(Math.random() * 4)
  console.log(randomNumber)
  const randomImage = images[randomNumber].url;
  const randomTitle = images[randomNumber].title;
  
  const toggleZoom =()=>{
    setToggle((prevState)=> !prevState);
  }

  
  return (
    
      <div>
      <div className="zoomImage" onClick={toggleZoom} style={{display: toggle ? "block" : "none"}}>
      <img src="" alt="" />
      </div>
    <main>
      <CustomCursor />
      
       
      
      <div className="sections">

      <div className="section first">
        <div className="title"><p>Bra</p><span>ss</span><p>aï</p></div>
        
          <img src={randomImage} alt={randomTitle} />
        
        </div>

        <div className="section second">
          <h2>About</h2>
          <p>Gyulá Halász nació en 1899 en Brassó, Transilvania (hoy Braşov, en la actual Rumania), lugar de donde procede el nombre que más tarde escogería para firmar sus fotografías (“Brassaï”, que significa, literalmente, “de Brassó”).</p>
          <img className="img-about" src="https://i0.wp.com/oscarenfotos.com/wp-content/uploads/2013/02/brassai-gyula-halc3a1sz-brassac3af-halasz-16.jpeg?fit=3840%2C1725" alt="" />
        </div>

        
        

        <div className="section third">
         
          <h2>Gallery</h2>
          {imagesGallery.map((image,index)=>{
            const randomNumber = Math.floor(Math.random() * 200)
            const styles = {
              popup:{
                left: index*385,
                top:randomNumber,
              }}
            return(
            <img className="img-gallery1" onClick={toggleZoom} src={image.url} style={styles.popup}/>
          )})}

           {imagesGallery.map((image,index)=>{
            const randomNumber = Math.floor(Math.random() * 400)
            const styles = {
              popup:{
                /*marginLeft: index*400 + "px",*/
                left: index*700,
                top:randomNumber,
              }}
            return(
            <img className="img-gallery2" src={image.url} style={styles.popup}/>
          )})}
          
        </div>
        <div className="section forth"></div>
        </div>
    </main>
    </div>
  );
}

export default App;
