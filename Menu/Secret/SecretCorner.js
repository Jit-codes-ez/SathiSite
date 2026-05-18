const PASSWORD = "saini123";

/* CHECK PASSWORD */
function checkPassword() {
  const input = document.getElementById("secretInput").value;
  const error = document.getElementById("error");

  if (input === PASSWORD) {

    error.innerText = "";

    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("loveLetter").classList.remove("hidden");

  } else {
    error.innerText = "Wrong password 💔 Try again";
    document.getElementById("secretInput").value = "";
  }
}

/* SHOW / HIDE PASSWORD */
function togglePassword() {
  const passwordInput = document.getElementById("secretInput");
  const toggleIcon = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

/* 💖 LOAD IMAGES FROM VERCEL API */
function loadImages() {
  const gallery = document.getElementById("privateGallery");

  // 🔥 Your images inside GitHub repo (Images folder)
  const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg"
  ];

  gallery.innerHTML = ""; // clear old content

  images.forEach((img, index) => {

    const image = document.createElement("img");

    // 💖 THIS is where Vercel API is used
    image.src = `/api/GetImage?path=Images/${img}`;

    image.alt = `Memory ${index + 1}`;

    // smooth fade-in effect (optional but nice)
    image.style.opacity = "0";
    image.onload = () => {
      image.style.transition = "0.5s ease";
      image.style.opacity = "1";
    };

    gallery.appendChild(image);
  });
}

/* OPEN PRIVATE GALLERY */
function openGallery() {

  document.getElementById("loveLetter").style.display = "none";

  const content = document.getElementById("content");
  content.classList.remove("hidden");

  // 💖 LOAD IMAGES AFTER UNLOCK
  loadImages();
}

/* ENTER KEY SUPPORT */
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {

    const lockScreen = document.getElementById("lock-screen");

    if (lockScreen && lockScreen.style.display !== "none") {
      checkPassword();
    }
  }
});