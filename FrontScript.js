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
  } else {
    showMain();
  }
}

const birthdayImages = [
  "images/saini1.jpg",
  "images/saini2.jpg",
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


// Simple page navigation placeholder
function openSection(section) {
  alert("You clicked: " + section + " ❤️ (we will build this next)");
}

// Initialize everything when page loads
window.onload = function () {
  createHearts();
  setRandomBirthdayImage();
};
