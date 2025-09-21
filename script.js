//  GSAP Scroll Animations 
gsap.registerPlugin(ScrollTrigger);

//  Unify Section 
gsap.to("#unify-heading", {
  scrollTrigger: {
    trigger: "#unify",
    start: "top center",
    end: "top 150px",
    scrub: true,
  },
  opacity: 0,
  y: -50
});

// Cards Collage Animation
gsap.utils.toArray(".card").forEach((card, i) => {
  const directions = [
    { x: -200, y: -200 },
    { x: 200, y: -200 },
    { x: -200, y: 200 },
    { x: 200, y: 200 },
    { x: 0, y: 250 }
  ];

  gsap.fromTo(card,
    { x: directions[i % directions.length].x, y: directions[i % directions.length].y, scale: 0.5, opacity: 0 },
    {
      x: 0, y: 0, scale: 1, opacity: 1,
      scrollTrigger: {
        trigger: "#unify-cards",
        start: "top 80%",
        end: "top 40%",
        scrub: true
      },
      duration: 1,
      ease: "power3.out",
      delay: i * 0.2
    }
  );
});

//  Users Section (Background + Text Color) 
gsap.timeline({
  scrollTrigger: {
    trigger: "#users-section",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true
  }
})
.fromTo("#users-section", { backgroundColor: "#ffffff" }, { backgroundColor: "#f97316", duration: 1 })
.fromTo("#users-heading, #users-subtext", { color: "#f97316" }, { color: "#ffffff", duration: 1 }, "<");

//  Client Cards 
gsap.utils.toArray('.client-card').forEach((card) => {
  gsap.fromTo(card, 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse"
      }
    }
  );
});

// Send / Exchange Blocks
gsap.utils.toArray(".se-block").forEach((block, i) => {
  gsap.to(block, {
    scrollTrigger: {
      trigger: block,
      start: "top 85%",
      end: "top 65%",
      scrub: true,
    },
    y: 0,
    opacity: 1,
    delay: i * 0.2,
    ease: "power3.out"
  });
});

//  Fade-in / Slide-up 
gsap.utils.toArray(".fade-in").forEach(el => {
  gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
});
gsap.utils.toArray(".slide-up").forEach(el => {
  gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
});
