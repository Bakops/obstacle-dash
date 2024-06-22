const btns = document.querySelectorAll(".btn");
const search = document.querySelectorAll(".input_search");
const menu = document.querySelectorAll("section");
const title = document.querySelectorAll(".title");

window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(title, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.5)

    .from(btns, 0.4, { transform: "scale(0)", ease: "power2.out" }, "-=2")
    .from(search, 0.4, { transform: "scale(0)", ease: "power2.out" }, "-=1");

  TL.play();
});
