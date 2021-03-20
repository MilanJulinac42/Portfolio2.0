const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  nav.style.transform = "translateX(100%)";

  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    if (nav.style.transform === "translateX(100%)") {
      nav.style.transform = "translateX(0%)";
    } else {
      nav.style.transform = "translateX(100%)";
    }
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  });
};

navSlide();
