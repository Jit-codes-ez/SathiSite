/* Love Website - script.js ❤️ */

// Floating hearts generator (optional if not already in HTML)
function createHearts() {
  const heartsContainer = document.getElementById('hearts');

  if (!heartsContainer) return;

  for (let i = 0; i < 25; i++) {
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
  document.getElementById('welcome').classList.add('hidden');

  const today = new Date();

  // CHANGE THIS to her real birthday (day, month)
  const birthDay = 1;
  const birthMonth = 0; // January = 0, February = 1, etc.

  const isBirthday = (today.getDate() === birthDay && today.getMonth() === birthMonth);

  if (isBirthday) {
    document.getElementById('birthday').classList.remove('hidden');
  } else {
    showMain();
  }
}

// Show main website
function showMain() {
  const birthdayPopup = document.getElementById('birthday');
  const main = document.getElementById('main');

  if (birthdayPopup) birthdayPopup.classList.add('hidden');
  if (main) main.style.display = 'block';
}

// Simple page navigation placeholder
function openSection(section) {
  alert("You clicked: " + section + " ❤️ (we will build this next)");
}

// Initialize everything when page loads
window.onload = function () {
  createHearts();
};
