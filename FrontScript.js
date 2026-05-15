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
  const birthDay = 16;
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
  "BirthdayImages/Sathi1.png",
  "BirthdayImages/Sathi2.png",
  "BirthdayImages/Sathi3.png",
  "BirthdayImages/Sathi4.png",
  "BirthdayImages/Sathi5.png"
];

function setRandomBirthdayImage() {
  const img = document.getElementById("birthdayImg");
  if (!img) return;

  const randomIndex = Math.floor(Math.random() * birthdayImages.length);
  img.src = birthdayImages[randomIndex];
}

/* Disable Right Click */
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

/* Disable Image Dragging */
document.addEventListener("dragstart", function(e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});

/* Disable Inspect Shortcuts */
document.addEventListener("keydown", function(e) {

  /* F12 */
  if (e.key === "F12") {
    e.preventDefault();
  }

  /* Ctrl + Shift + I */
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
  }

  /* Ctrl + U */
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
  }

});


function showMain() {
  window.location.href = "Menu.html";
}

//Birthday Confetti Effect
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

function setDailyNote() {
  const noteElement = document.getElementById("dailyNote");
  if (!noteElement) return;
  const today = new Date();
  // Changes automatically every day
  const noteIndex =
    today.getDate() % dailyNotes.length;
  noteElement.textContent = dailyNotes[noteIndex];
}

// Initialize everything when page loads
window.onload = function () {
  createHearts();
  setRandomBirthdayImage();
  setDailyNote();
  
};  
