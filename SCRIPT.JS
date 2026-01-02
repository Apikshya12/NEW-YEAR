// 🎆 Fireworks
function createFirework() {
  const firework = document.createElement("div");
  firework.className = "firework";
  firework.style.left = Math.random() * window.innerWidth + "px";
  firework.style.top = Math.random() * window.innerHeight + "px";
  firework.style.background =
    `hsl(${Math.random() * 360}, 100%, 50%)`;

  document.body.appendChild(firework);
  setTimeout(() => firework.remove(), 1500);
}

setInterval(createFirework, 300);

// ⏳ Countdown
const countdownEl = document.getElementById("countdown");
const newYear = new Date("January 1, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = newYear - now;

  if (diff < 0) {
    countdownEl.innerHTML = "🎉 Happy New Year! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// 🎵 Music
function playMusic() {
  document.getElementById("bgMusic").play();
}
