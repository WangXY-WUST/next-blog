// animations.ts
import Stats from 'stats.js';
export const animations = [
  {
    name: 'cat',
    backgroundImage: '/static/images/gifs/cat.gif',
    backgroundSize: '60%',
    config: {
      particles: {
        number: { value: 100, density: { enable: false, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: {
          type: 'star',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 5 },
          image: { src: 'http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg', width: 100, height: 100 },
        },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 4, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: false, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: {
          enable: true,
          speed: 14,
          direction: 'left',
          random: true,
          straight: true,
          out_mode: 'out',
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    },
  },
  {
    name: 'snow',
    backgroundImage: '/static/images/snow.jpg',
    backgroundSize: "cover",
    config: {
      particles: {
        number: { value: 100, density: { enable: false, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 5 },
          image: { src: 'http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg', width: 100, height: 100 },
        },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 11, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: false, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: {
          enable: true,
          speed: 14,
          direction: 'bottom',
          random: true,
          straight: true,
          out_mode: 'out',
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    },
  },
  {
    name: 'imo',
    backgroundImage: '/static/images/imo.jpg',
    backgroundSize: 'cover',
    config: {
      particles: {
        number: { value: 100, density: { enable: false, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 5 },
          image: { src: 'http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg', width: 100, height: 100 },
        },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 11, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: false, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: {
          enable: true,
          speed: 14,
          direction: 'bottom',
          random: true,
          straight: true,
          out_mode: 'out',
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    },
  },
  {
    name: 'sky',
    backgroundImage: '/static/images/sky.jpg',
    backgroundSize: 'cover',
    config: {
      particles: {
        number: { value: 100, density: { enable: false, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 5 },
          image: { src: 'http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg', width: 100, height: 100 },
        },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 11, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: false, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: {
          enable: true,
          speed: 14,
          direction: 'top',
          random: true,
          straight: true,
          out_mode: 'bounce',
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    },
  },
];
export const performanceWatch = () => {
    // 初始化性能监控
    const stats = new Stats();
    stats.showPanel(0); // 0: FPS, 1: MS, 2: MB, 3+: custom
    stats.dom.style.position = 'absolute';
    stats.dom.style.left = '10px';
    stats.dom.style.top = '10px';
    document.body.appendChild(stats.dom);

    const countParticlesElement = document.querySelector<HTMLElement>('.js-count-particles');
    const update = (): void => {
      stats.begin();
      if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS.particles.array) {
        countParticlesElement!.innerText = window.pJSDom[0].pJS.particles.array.length.toString();
      }
      stats.end();
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}