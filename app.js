const nav = document.querySelector(".nav-links");
const topLink = document.querySelector(".top-link");

const navSlide = () => {
  const burger = document.querySelector(".burger");
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

const resize = () => {
  console.log(document.documentElement.clientWidth);
  if (document.documentElement.clientWidth < 700) {
    nav.style.transform = "translateX(100%)";
  } else {
    nav.style.transform = "translateX(0%)";
  }
};

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

resize();
window.onresize = resize;
navSlide();
