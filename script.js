document.addEventListener('DOMContentLoaded', () => {
  // CLICK dropdowns
  document.querySelectorAll('.click-dropdown > a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const parent = link.parentElement;
      parent.classList.toggle('open');
      document.querySelectorAll('.click-dropdown').forEach(li => {
        if (li !== parent) li.classList.remove('open');
      });
    });
  });

  // COUNTDOWN
  const targetDate = new Date("2025-07-13T00:00:00").getTime();
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.querySelector(".countdown").innerHTML = "Event Started!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
  }
  const interval = setInterval(updateCountdown, 1000);
  updateCountdown();

  // HERO BACKGROUND SLIDESHOW + ZOOM (use hero-bg div for clean layering)
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with actual paths
  let current = 0;
  const heroBg = document.querySelector('.hero-bg');

  function updateBackground() {
    heroBg.style.backgroundImage = `url('${images[current]}')`;
    heroBg.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.1)' }
    ], {
      duration: 4000,
      fill: 'forwards'
    });
    current = (current + 1) % images.length;
  }

  updateBackground();
  setInterval(updateBackground, 5000);
});
