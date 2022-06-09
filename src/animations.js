
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Animate(){

  
    gsap.to(".title p",{
        opacity: 1,
        y: 0,
        delay:0,
        duration: 1.3
        }
    )
  
    gsap.to(".title span",{
        opacity: 1,
        y: 0,
        delay:0,
        duration: 1.3
        }
    )
   
    gsap.to("h2",{
      x:0,
      duration:2,
      scrollTrigger:{
        trigger:"main",
        start:"top -600px",
        
        
        
      }
    })
    let imgAbout = document.querySelector(".img-about");
    gsap.to(imgAbout,{
      x:50,
      duration:2,
      scrollTrigger:{
        trigger:"main",
        start:"top -500px",
        
        
        
      }
    })
  
    let imgGallery1 = document.querySelectorAll(".img-gallery1");
    gsap.to(imgGallery1,{
      x:-250,
      delay: 0.5,
      duration:1.5,
      
      scrollTrigger:{
        trigger:"main",
        start:"top -1700px",
        scrub:3,
        end:"top -4700px",
        
        
        
      }
    })
    let imgGallery2 = document.querySelectorAll(".img-gallery2");
    gsap.to(imgGallery2,{
      x:-550,
      delay: 0.5,
      duration:1.5,
      
      
      scrollTrigger:{
        trigger:"main",
        start:"top -1500px",
        scrub:3,
        end:"top -3700px",
        
        
        
      }
    })
  
   
  

    let sections = gsap.utils.toArray(".section");
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "main",
        pin: true,
        scrub: 2,
        
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      }
    });
    

}