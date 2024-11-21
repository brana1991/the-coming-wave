document.addEventListener('DOMContentLoaded', function () {
  getOrientation();
  observeDocument();
});

function observeDocument() {
  const target = document.getElementById('intersecting-anchor');
  const stickyBanner = document.getElementById('sticky-banner');

  const callback = (entries) => {
    stickyBanner.classList.toggle('active', !entries[0].isIntersecting);

    if (entries[0].isIntersecting) {
      document.addEventListener('mousemove', handleMouseMove, { passive: true });
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.style.setProperty('--rotateX', '0deg');
      document.documentElement.style.setProperty('--rotateY', '0deg');
    }
  };

  const observer = new IntersectionObserver(callback, { threshold: 0.55, rootMargin: '400px' });

  observer.observe(target);
}

function handleMouseMove(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const screenPosX = getCoordinate(mouseX, screenWidth) || 0;
  const screenPosY = getCoordinate(mouseY, screenHeight) || 0;
  const rotateX = screenPosY * 12 + 'deg';
  const rotateY = screenPosX * 12 + 'deg';

  document.documentElement.style.setProperty('--rotateX', rotateX);
  document.documentElement.style.setProperty('--rotateY', rotateY);
}

function getOrientation() {
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', handleOrientation, true);
  } else {
    alert('DeviceOrientationEvent is not supported by your browser.');
    console.error('DeviceOrientationEvent is not supported by your browser.');
  }
}

let currentX = 0;
let currentY = 0;

function handleOrientation(event) {
  const { beta, gamma } = event;

  const screenPosY = beta / 45;
  const screenPosX = gamma / 45;

  const targetX = screenPosY * 40;
  const targetY = screenPosX * 12;

  const damping = 0.6;
  currentX += (targetX - currentX) * damping;
  currentY += (targetY - currentY) * damping;

  document.documentElement.style.setProperty('--rotateX', -currentX + 'deg');
  document.documentElement.style.setProperty('--rotateY', -currentY + 'deg');
}

const getCoordinate = (pos, dim) => Math.round(((pos - dim / 2) / (dim / 2)) * 100) / 100;
