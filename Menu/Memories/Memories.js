const memories = [
  {
    image: "Images/saini1.jpg",
    caption: "Our sweetest moment ❤️"
  },
  {
    image: "Images/saini2.jpg",
    caption: "Smiles that stay forever ✨"
  },
  {
    image: "Images/pic3.jpg",
    caption: "A beautiful day together 🌸"
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