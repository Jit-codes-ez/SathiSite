/* Countdown.js */

/* Birthday Date */
const birthdayDate = 20;
const birthdayMonth = 5;

/* Anniversary Date */
const anniversaryDate = 24;
const anniversaryMonth = 9; 

/* Generic Countdown Function */

function updateCountdown(
  month,
  date,
  daysId,
  hoursId,
  minutesId,
  secondsId
) {

  const now = new Date();

  let targetDate = new Date(
    now.getFullYear(),
    month - 1,
    date,
    0,
    0,
    0
  );

  /* If date already passed */

  if (now > targetDate) {

    targetDate = new Date(
      now.getFullYear() + 1,
      month - 1,
      date,
      0,
      0,
      0
    );

  }

  const diff = targetDate - now;

  /* Calculations */

  const days = Math.floor(
    diff / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (diff % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (diff % (1000 * 60)) /
    1000
  );

  /* Update HTML */

  document.getElementById(daysId).textContent =
    String(days).padStart(2, "0");

  document.getElementById(hoursId).textContent =
    String(hours).padStart(2, "0");

  document.getElementById(minutesId).textContent =
    String(minutes).padStart(2, "0");

  document.getElementById(secondsId).textContent =
    String(seconds).padStart(2, "0");

}

/* Run Both Countdowns */

function runCountdowns() {

  /* Birthday */

  updateCountdown(
    birthdayMonth,
    birthdayDate,
    "birthdayDays",
    "birthdayHours",
    "birthdayMinutes",
    "birthdaySeconds"
  );

  /* Anniversary */

  updateCountdown(
    anniversaryMonth,
    anniversaryDate,
    "anniversaryDays",
    "anniversaryHours",
    "anniversaryMinutes",
    "anniversarySeconds"
  );

}

/* Start */

runCountdowns();

setInterval(runCountdowns, 1000); 