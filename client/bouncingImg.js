const timeline = gsap.timeline({ defaults: { duration: 1.5 } });

timeline
  .from("#bounce-1", { y: "-50vh", ease: "bounce" })
  .from("#bounce-1", { opacity: 0, duration: 1 }, 0)
  .from("#bounce-2", { y: "-50vh", ease: "bounce" }, 0.3)
  .from("#bounce-2", { opacity: 0, duration: 1 }, 0.3)
  .from("#bounce-3", { y: "-50vh", ease: "bounce" }, 0.6)
  .from("#bounce-3", { opacity: 0, duration: 1 }, 0.6)
  .from("#bounce-4", { y: "-50vh", ease: "bounce" }, 0.9)
  .from("#bounce-4", { opacity: 0, duration: 1 }, 0.9);

timeline.pause();

export { timeline };
