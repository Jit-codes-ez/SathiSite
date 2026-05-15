const memories = [
  {
    image: "Images/Aug20,2023.jpg",
    caption: "20 August - Cafe Sohojpath Date ☕"
  },
  {
    image: "Images/July12,2023.jpg",
    caption: "12 July - UG College Freshers Party 🎉"
  },
  {
    image: "Images/June12,2023.jpg",
    caption: "12 June - Cafe House ☕"
  },
  {
    image: "Images/May6,2023.jpg",
    caption: "6 May 2023 - Kolkata Memorial ✨"
  },
  {
    image: "Images/Jan26,2023.jpg",
    caption: "26 JAN 2023 - First Saraswati Puja Together 🌸"
  }
];

const gallery = document.getElementById("galleryContainer");
memories.forEach(memory => {
  gallery.innerHTML += `
    <div class="memory-card">
      <img src="${memory.image}" alt="Memory">
      <div class="memory-caption">
        ${memory.caption}
      </div>
    </div>
  `;
});