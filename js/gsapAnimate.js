export function greensock() {
  // Title and Logo Animation (Fade In)
  gsap.from("#main-title", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out",
  });
  gsap.from("#title-image", {
    duration: 1.5,
    opacity: 0,
    scale: 0.5,
    ease: "elastic.out(1, 0.5)",
  });

  // Dropdown and Player List Slide-in Effect
  gsap.from("#container-select", {
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "power2.out",
    delay: 0.5,
  });
  gsap.from("#list-players", {
    duration: 1,
    opacity: 0,
    x: 100,
    ease: "power2.out",
    delay: 0.7,
  });

  // Player Cards Hover Effect
  document.addEventListener("DOMContentLoaded", () => {
    const playerCards = document.querySelectorAll(".player-box");

    playerCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.1, duration: 0.3, ease: "power1.out" });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" });
      });
    });
  });
}
