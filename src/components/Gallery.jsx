import React from 'react'

export const Gallery = ({imagesGalleryTop, imagesGalleryMiddle, imagesGalleryBottom, toggleZoom, changeZoomTop, changeZoomMiddle, changeZoomBottom}) => {
    
  return (
    <div className="section third">
         
    <h2>Gallery</h2>
    {imagesGalleryTop.map((image,index)=>{
      
      
      const styles = {
        popup:{
          left: index*585,
          top:50,
        }}
      return(
      <img className="img-gallery1"  onClick={()=>{toggleZoom(); changeZoomTop(index)}} src={image.url} style={styles.popup} alt={image.title}/>
    )})}


{imagesGalleryBottom.map((image,index)=>{
      
      
      const styles = {
        popup:{
          left: index*585,
          top:400,
        }}
      return(
      <img className="img-gallery1"   onClick={()=>{toggleZoom(); changeZoomBottom(index)}}src={image.url} style={styles.popup} alt={image.title}/>
    )})}

     {imagesGalleryMiddle.map((image,index)=>{
      
      
    
      
      const styles = {
        popup:{
          /*marginLeft: index*400 + "px",*/
          left: index*700,
          top:120,
          
          }
        }
      return(
        
      <img className="img-gallery2"  onClick={()=>{toggleZoom(); changeZoomMiddle(index)}} src={image.url} style={styles.popup} key={image._id} alt={image.title}/>
    )})}



    
  </div>
  )
}
