
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Animate(){

    gsap.to(".images",{
        opacity: 1,
        y: 0,
        delay:0.4,
        duration: 1.5
        }
    )
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
    let imgBr2 = document.querySelector(".images br2");
    gsap.to(imgBr2,{
      x:-100,
      scrollTrigger:{
        trigger:".second",
        start:"top 20%",
        scrub:true,
        end:"top 50%",
        markers:true,
      }
    })
  
   
  

    let sections = gsap.utils.toArray(".section");
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "main",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      }
    });
    

}