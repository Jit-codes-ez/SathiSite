const PASSWORD = "saini123";

function checkPassword() {
  const input =
    document.getElementById("secretInput").value;
  const error =
    document.getElementById("error");
  if (input === PASSWORD) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    error.innerText =
      "Wrong password 💔 Try again";
    document.getElementById("secretInput").value = "";
  }
}

/* SHOW / HIDE PASSWORD */
function togglePassword() {
  const passwordInput =
    document.getElementById("secretInput");
  const toggleIcon =
    document.getElementById("togglePassword");
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