/* FrontScript.js */
function createHearts() {
  const heartsContainer = document.getElementById('hearts');

  if (!heartsContainer) return;

  for (let i = 0; i < 40; i++) {
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 5) + 's';
    heart.style.opacity = Math.random();
    heartsContainer.appendChild(heart);
  }
}

// Check birthday logic
function checkBirthday() {
  const welcome = document.getElementById('welcome');
  const birthdayPopup = document.getElementById('birthday');
  const main = document.getElementById('main');

  if (welcome) welcome.classList.add('hidden');

  const today = new Date();

  const birthDay = 11;
  const birthMonth = 4;

  const isBirthday =
    today.getDate() === birthDay &&
    today.getMonth() === birthMonth;

  if (isBirthday) {
    if (birthdayPopup) birthdayPopup.classList.remove('hidden');
    if (main) main.classList.add('hidden');
    launchConfetti();
  } else {
    showMain();
  }
}

const birthdayImages = [
  "BirthdayImages/saini1.jpg",
  "BirthdayImages/saini2.jpg",
];

function setRandomBirthdayImage() {
  const img = document.getElementById("birthdayImg");
  if (!img) return;

  const randomIndex = Math.floor(Math.random() * birthdayImages.length);
  img.src = birthdayImages[randomIndex];
}

function showMain() {
  const birthdayPopup = document.getElementById('birthday');
  const main = document.getElementById('main');

  if (birthdayPopup) birthdayPopup.classList.add('hidden');
  if (main) main.classList.remove('hidden');
}

// 🎉 Birthday Confetti Effect
function launchConfetti() {
  const container = document.getElementById("confetti-container");

  if (!container) return;

  const colors = [
    "#ff4d6d",
    "#ff8fab",
    "#ffd6e7",
    "#ffffff",
    "#ffc2d1"
  ];

  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.animationDuration =
      3 + Math.random() * 3 + "s";

    confetti.style.width =
      6 + Math.random() * 8 + "px";

    confetti.style.height =
      6 + Math.random() * 8 + "px";

    container.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 6000);
  }
}

// Simple page navigation placeholder
function openSection(section) {
  alert("You clicked: " + section + " ❤️ (we will build this next)");
}

// Initialize everything when page loads
window.onload = function () {
  createHearts();
  setRandomBirthdayImage();
};
