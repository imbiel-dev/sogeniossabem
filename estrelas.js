particlesJS("fundo-estrelas", {
  particles: {
      number: { value: 400 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
          value: 0.8,
          anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false }
      },
      size: {
          value: 1.5,
          random: true,
          anim: { enable: true, speed: 1, size_min: 0.5, sync: false }
      },
      line_linked: { enable: false },
      move: {
          enable: true,
          speed: 0.05,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out"
      }
  },
  interactivity: {
      detect_on: "canvas",
      events: {
          onhover: { enable: false },
          onclick: { enable: false }
      }
  },
  retina_detect: true
});