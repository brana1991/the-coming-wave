document.addEventListener('DOMContentLoaded', function () {
  // window.alert('bla');
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
  const mouseX = e.pageX;
  const mouseY = e.pageY;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const varX = mouseX / screenWidth;
  const varY = mouseY / screenHeight;
  const rotateX = (varY - 0.5) * 25 + 'deg';
  const rotateY = (varX - 0.5) * 25 + 'deg';

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
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

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
