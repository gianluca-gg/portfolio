gsap.registerPlugin(ScrollTrigger);

gsap.from(".uno", {
  opacity: 0,
  x: -500,
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
  x: 500,
});

gsap.to(".due", {
  scrollTrigger: {
    trigger: ".due",
    start: "bottom bottom",
  },
  opacity: 1,
  x: 0,
});
