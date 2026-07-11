/* ==========================================
        Portfolio JavaScript
        Author : Huynh Ngoc Khoa
========================================== */

/* ===========================
        MENU MOBILE
=========================== */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* ===========================
    CLOSE MENU WHEN CLICK LINK
=========================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

/* ===========================
        SCROLL TO TOP
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/* ===========================
        STICKY HEADER
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.style.background = "rgba(5,10,25,.9)";

    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
  } else {
    header.style.background = "rgba(0,0,0,.3)";

    header.style.boxShadow = "none";
  }
});

/* ===========================
        TYPING EFFECT
=========================== */

const text = [
  "Software Engineering Student",

  "Front-end Developer",

  "Java Programmer",

  "Web Designer",

  "Future Full Stack Developer",
];

let index = 0;

let charIndex = 0;

let currentText = "";

let isDeleting = false;

const typing = document.getElementById("typing-text");

function typeEffect() {
  currentText = text[index];

  if (!isDeleting) {
    typing.textContent = currentText.substring(0, charIndex++);
  } else {
    typing.textContent = currentText.substring(0, charIndex--);
  }

  if (!isDeleting && charIndex === currentText.length + 1) {
    isDeleting = true;

    setTimeout(typeEffect, 1200);

    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;

    index++;

    if (index >= text.length) index = 0;
  }

  setTimeout(typeEffect, isDeleting ? 40 : 90);
}

typeEffect();

/* ===========================
        ACTIVE NAVBAR
=========================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* ===========================
        FADE IN ON SCROLL
=========================== */

const reveals = document.querySelectorAll(
  ".about-container,.skill-list,.project-card,form",
);

function reveal() {
  reveals.forEach((item) => {
    const windowHeight = window.innerHeight;

    const top = item.getBoundingClientRect().top;

    if (top < windowHeight - 120) {
      item.style.opacity = "1";

      item.style.transform = "translateY(0)";
    } else {
      item.style.opacity = "0";

      item.style.transform = "translateY(50px)";
    }
  });
}

window.addEventListener("scroll", reveal);

reveal();

/* ===========================
        IMAGE HOVER
=========================== */

const image = document.querySelector(".hero-image img");

image.addEventListener("mousemove", () => {
  image.style.transform = "scale(1.05) rotate(2deg)";
});

image.addEventListener("mouseleave", () => {
  image.style.transform = "scale(1)";
});

/* ===========================
        BUTTON RIPPLE
=========================== */

const buttons = document.querySelectorAll("button,.btn");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transition = ".3s";
  });
});

/* ===========================
        CONSOLE
=========================== */

console.log("Portfolio Loaded Successfully");
