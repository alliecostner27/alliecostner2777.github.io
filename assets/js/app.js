particlesJS('particles-js', {
  particles: {
    number: {
      value: 160, // doubled for density
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ['#ffffff', '#ffb3ec', '#aee1ff', '#ffd6a5'] // pastel sparkle colors
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 1, // max visibility
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.6,
        sync: false
      }
    },
    size: {
      value: 3.5, // slightly larger
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 1.5,
        sync: false
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 0.6, // soft drift
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});
