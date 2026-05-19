alert("JS Loaded");
const PASSWORD = "JitLovesSathi24/09/2023";

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

  console.log("Gallery loading...");

  const gallery =
    document.getElementById("privateGallery");

  const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
  ];

  gallery.innerHTML = "";

  images.forEach((img, index) => {

    const image =
      document.createElement("img");

    image.src =
      `/api/GetImage?path=Images/${img}`;

    console.log("Trying:", image.src);

    image.alt = `Memory ${index + 1}`;

    image.onload = () => {
      console.log("Loaded:", img);
    };

    image.onerror = () => {
      console.log("FAILED:", img);
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