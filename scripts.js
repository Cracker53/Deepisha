// Typing Effect
const msg = "Good morning Miss Makayla ❤️ Take Care!";
const messageBox = document.getElementById("typed-message");
let i = 0;

function typeLetter() {
  if (i < msg.length) {
    messageBox.innerText += msg.charAt(i);
    i++;
    setTimeout(typeLetter, 100);
  }
}
setTimeout(typeLetter, 1000);

// Confetti on click
document.body.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerText = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.opacity = 1;
  heart.style.animation = "floatUp 4s linear forwards";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 500);
