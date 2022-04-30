
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Animate(){

    gsap.to(".br1",{
        opacity: 1,
        y: 0,
        delay:0.8,
        duration: 2
        }
    )
    let sections = gsap.utils.toArray(".section");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});
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
  
}