document.addEventListener("DOMContentLoaded", () => {
  // Typing Animation
  const text = "Hello, I'm Alishba ✨";
  let i = 0;
  function type() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();

  // Dark Mode Toggle
  const toggleBtn = document.getElementById("themeToggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // Carousel Auto Scroll
  const carousel = document.getElementById("carousel");
  if (carousel) {
    let scrollAmount = 0;
    const step = 335;
    setInterval(() => {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (scrollAmount >= maxScroll) scrollAmount = 0;
      else scrollAmount += step;
      carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 3000);
  }
});
