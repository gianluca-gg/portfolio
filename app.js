gsap.registerPlugin(ScrollTrigger);

gsap.from(".uno", {
  opacity: 0,
  x: 0,
  duration: 1,
});

gsap.to(".uno", {
  scrollTrigger: {
    trigger: ".uno",
    start: "bottom bottom",
  },
  opacity: 1,
  x: 0,
});

gsap.from(".due", {
  opacity: 0,
  x: 0,
  duration: 1,
});

gsap.to(".due", {
  scrollTrigger: {
    trigger: ".due",
    start: "bottom bottom",
  },
  opacity: 1,
  x: 0,
});

gsap.from(".tre", {
  opacity: 0,
  x: 0,
  duration: 1,
});

gsap.to(".tre", {
  scrollTrigger: {
    trigger: ".tre",
    start: "bottom bottom",
  },
  opacity: 1,
  x: 0,
});

gsap.from(".quattro", {
  opacity: 0,
  x: 0,
  duration: 1,
});

gsap.to(".quattro", {
  scrollTrigger: {
    trigger: ".quattro",
    start: "bottom bottom",
  },
  opacity: 1,
  x: 0,
});

var options = {
  strings: ["Gianluca Gattuso."],
  typeSpeed: 100,
};

var typed = new Typed(".veroNome", options);
