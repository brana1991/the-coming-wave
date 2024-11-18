document.addEventListener('DOMContentLoaded', function () {
  observeDocument();
  gyroscopeMove();
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

function gyroscopeMove() {
  const updateRotation = (x, y) => {
    console.log('tuu');

    const rotateX = (y - 0.5) * 25 + 'deg';
    const rotateY = (x - 0.5) * 25 + 'deg';

    document.documentElement.style.setProperty('--rotateX', rotateX);
    document.documentElement.style.setProperty('--rotateY', rotateY);
  };

  // Gyroscope handling (for mobile)
  // if (window.DeviceOrientationEvent) {
  //   console.log('fdasldfasj');

  if (
    typeof DeviceOrientationEvent !== 'undefined' &&
    typeof DeviceOrientationEvent.requestPermission === 'function'
  ) {
    DeviceOrientationEvent.requestPermission()
      .then((state) => {
        if (state === 'granted') {
          window.addEventListener('deviceorientation', updateRotation);
        } else {
          console.error('Gyroscope permission denied.');
        }
      })
      .catch((error) => console.error('Gyroscope error:', error));
  } else {
    window.addEventListener('deviceorientation', (event) => {
      // Normalize device orientation values
      const alpha = event.alpha / 360; // Rotation around z-axis
      const beta = (event.beta + 180) / 360; // Rotation around x-axis
      const gamma = (event.gamma + 90) / 180; // Rotation around y-axis

      const varX = gamma; // Horizontal tilt
      const varY = beta; // Vertical tilt

      updateRotation(varX, varY);
    });
  }
}

const getCoordinate = (pos, dim) => Math.round(((pos - dim / 2) / (dim / 2)) * 100) / 100;
