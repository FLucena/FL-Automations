// Using GSAP (GreenSock Animation Platform)
import { gsap } from "gsap";

// Staggered animation of multiple elements
gsap.from(".card", {
  duration: 0.8,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: "power3.out"
});

// Scroll-triggered animation
gsap.registerPlugin(ScrollTrigger);
gsap.from(".section", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%"
  },
  y: 100,
  opacity: 0,
  duration: 1
}); 