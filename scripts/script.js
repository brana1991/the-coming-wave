document.addEventListener('DOMContentLoaded', function () {
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
