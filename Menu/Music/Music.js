const songs = [

  {
    title: "Bhalobashar Morshum",
    artist: "Shreya Ghoshal",
    cover: "Covers/Bhalobashar Morshum.jpg",
    song: "Songs/Bhalobashar Morshum.mp3"
  },

  {
    title: "Notun Premer Gaan",
    artist: "Anirban, Debraj, Surangana",
    cover: "Covers/Notun Premer Gaan.jpg",
    song: "Songs/Notun Premer Gaan.mp3"
  },

  {
    title: "Majhe Majhe Tobo",
    artist: "Arindom, Arjun, Darshana, Dhrubo, Banerjee",
    cover: "Covers/Majhe Majhe Tobo.jpg",
    song: "Songs/Majhe Majhe Tobo.mp3"
  },

  {
    title: "Obosheshe",
    artist: "Arijit Singh",
    cover: "Covers/Obosheshe.jpg",
    song: "Songs/Obosheshe.mp3"
  },

  {
    title: "Tumi Jantei Paro Naa",
    artist: "Mahtim Shakib",
    cover: "Covers/Tumi Jantei Paro Naa.jpg",
    song: "Songs/Tumi Jantei Paro Naa.mp3"
  },

  {
    title: "Ek Minute Er Chumu",
    artist: "Hooliganism",
    cover: "Covers/Ek Minute Er Chumu.jpg",
    song: "Songs/Ek Minute Er Chumu.mp3"
  },

  {
    title: "Khoobsurat",
    artist: "Vishal Mishra",
    cover: "Covers/Khoobsurat.jpg",
    song: "Songs/Khoobsurat.mp3"
  },
{
    title: "Tumhare Hi Rahenge Hum",
    artist: "Varun Jain",
    cover: "Covers/Tumhare Hi Rahenge Hum.jpg",
    song: "Songs/Tumhare Hi Rahenge Hum.mp3"
  },

  {
    title: "Tum Se",
    artist: "Varun Jain",
    cover: "Covers/Tum Se.jpg",
    song: "Songs/Tum Se.mp3"
  },

  {
    title: "Apna Bana Le",
    artist: "Amitabha Bhattacharya",
    cover: "Covers/Apna Bana Le.jpg",
    song: "Songs/Apna Bana Le.mp3"
  },

   {
    title: "Saiyaara",
    artist: "Tanishk Bagchi",
    cover: "Covers/Saiyaara.jpg",
    song: "Songs/Saiyaara.mp3"
  },

{
    title: "Mai Agar Kahoon",
    artist: "Sonu Nigam",
    cover: "Covers/Mai Agar Kahoon.jpg",
    song: "Songs/Mai Agar Kahoon.mp3"
  },

  {
    title: "Sitaare",
    artist: "Arijit Singh",
    cover: "Covers/Sitaare.jpg",
    song: "Songs/Sitaare.mp3"
  },

    {
    title: "Barbaad",
    artist: "Jubin Nautiyal",
    cover: "Covers/Barbaad.jpg",
    song: "Songs/Barbaad.mp3"
  },

{
    title: "Khat",
    artist: "Navjot Ahuja",
    cover: "Covers/Khat.jpg",
    song: "Songs/Khat.mp3"
  },

  {
    title: "Humsafar - Saiyaara",
    artist: " Sachet Tandon, Parampara Tandon",
    cover: "Covers/Humsafar - Saiyaara.jpg",
    song: "Songs/Humsafar - Saiyaara.mp3"
  },

    {
    title: "Gehra Hua",
    artist: "Arijit Singh",
    cover: "Covers/Gehra Hua.jpg",
    song: "Songs/Gehra Hua.mp3"
  },

      {
    title: "Majboor",
    artist: "Sheheryar Rehan, Zoha Waseem",
    cover: "Covers/Majboor.webp",
    song: "Songs/Majboor.mp3"
  }
];

const musicContainer =
document.getElementById("musicContainer");
const popup =
document.getElementById("musicPopup");
const popupCover =
document.getElementById("popupCover");
const popupTitle =
document.getElementById("popupTitle");
const popupArtist =
document.getElementById("popupArtist");
const popupAudio =
document.getElementById("popupAudio");

/* Create Cards */
songs.forEach((song) => {
  const card =
  document.createElement("div");
  card.classList.add("music-card");
  card.innerHTML = `
    <img src="${song.cover}">
    <div class="music-info">
      <h2>${song.title}</h2>
      <p>${song.artist}</p>
      <button class="play-btn">
        <i class="fa-solid fa-play"></i>
      </button>
    </div>
  `;

  card.querySelector(".play-btn")
  .addEventListener("click", () => {
    popup.classList.remove("hidden");
    popupCover.src = song.cover;
    popupTitle.innerText = song.title;
    popupArtist.innerText = song.artist;
    popupAudio.src = song.song;
    popupAudio.play();
  });
  musicContainer.appendChild(card);
});

/* Close Popup */
function closePopup() {
  popup.classList.add("hidden");
  popupAudio.pause();
}