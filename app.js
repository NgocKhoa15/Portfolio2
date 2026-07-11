/* ==========================================
        PARTICLES.JS CONFIG
        Author : Huynh Ngoc Khoa
========================================== */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 90,

      density: {
        enable: true,

        value_area: 900,
      },
    },

    color: {
      value: "#00e5ff",
    },

    shape: {
      type: "circle",
    },

    opacity: {
      value: 0.5,

      random: true,
    },

    size: {
      value: 4,

      random: true,
    },

    line_linked: {
      enable: true,

      distance: 160,

      color: "#00e5ff",

      opacity: 0.4,

      width: 1.2,
    },

    move: {
      enable: true,

      speed: 2,

      direction: "none",

      random: false,

      straight: false,

      out_mode: "out",

      bounce: false,
    },
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,

        mode: "grab",
      },

      onclick: {
        enable: true,

        mode: "push",
      },

      resize: true,
    },

    modes: {
      grab: {
        distance: 180,

        line_linked: {
          opacity: 1,
        },
      },

      push: {
        particles_nb: 5,
      },
    },
  },

  retina_detect: true,
});
