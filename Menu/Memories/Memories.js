const memories = [
  {
    image: "Images/Apr24,2026.jpg",
    caption: "24th April 2026 - The classic saree, the brightest smile. ✨"
  },
  {
    image: "Images/Mar3,2026.jpg",
    caption: "3rd March 2026 - Festive of colors with the one who colors my world. 🌈❤️"
  },
  {
    image: "Images/Feb22,2026.jpg",
    caption: "22nd February 2026 - Group meet up !🥰"
  },
    {
    image: "Images/Jan23,2026.jpg",
    caption: "23rd January 2026 - Graceful in every pleat. 💃✨"
  },
    {
    image: "Images/Dec25,2025.jpg",
    caption: "25th December 2025 - Christmas magic with my favorite person. 🎄❤️"
  },
    {
    image: "Images/Nov5,2025.jpg",
    caption: "5th November 2025 - Sweets, smiles, and sacred vibes. Homely celebrations hit different. 🏠✨"
  },
    {
    image: "Images/Oct10,2025.jpg",
    caption: "10th October 2025 - Maharaj - The Cat 🐱👑"
  }, 
  {
    image: "Images/Sep27,2025.jpg",
    caption: "27th September 2025 - Pandal hopping level: Expert. Selfie game: Strong. 💥"
  }, 
  {
    image: "Images/Aug7,2025.jpg",
    caption: "7th August 2025 - Last day of college, but the memories will last forever. 🎓❤️"
  }, 
    {
    image: "Images/Jul17,2025.jpg",
    caption: "17th July 2025 - Hugs and Smiles that make every moment unforgettable. 🤗❤️"
  }, 
  {
    image: "Images/Jun21,2025.jpg",
    caption: "21st June 2025 - Group which can never be forgotten. 🥰"
  }, 
  {
    image: "Images/May20,2025.jpg",
    caption: "20th May 2025 - Birthday, Seminar, and friends - the perfect recipe for an unforgettable day! 🎉🎂"
  },  
  {
    image: "Images/Apr15,2025.jpg",
    caption: "15th April 2025 - Every moment with you is a treasure. 💎"
  },    
  {
    image: "Images/Mar14,2025.jpg",
    caption: "14th March 2025 - Love, laughter, and a whole lot of gulal. 🌈❤️"
  },
    {
    image: "Images/Feb3,2025.jpg",
    caption: "3rd February 2025 - Locked in. 🔒❤️"
  },
  {
    image: "Images/Jan8,2025.jpg",
    caption: "8th January 2025 - Nothing cures the winter blues faster than a live rendition of 'Tumhare Hi Rahenge Hum'. 🎵❤️"
  },
  {
    image: "Images/Dec17,2024.jpg",
    caption: "17th December 2024 - Favorite view. 💙"
  },
  {
    image: "Images/Nov27,2024.jpg",
    caption: "27th November 2024 - The big didi and her two little mischievous shadows. 👭✨"
  },
  {
    image: "Images/Oct28,2024.jpg",
    caption: "28th October 2024 - Hypnotized, mesmerized, and completely out of words. 🌀"
  },
  {
    image: "Images/Sept28,2024.jpg",
    caption: "28th September 2024 - Sudden Plans..!! 🥰"
  }, 
  {
    image: "Images/Aug16,2024.jpg",
    caption: "16th August 2024 - Cha Culture Date 🍵"
  }, 
  {
    image: "Images/Jul12,2024.jpg",
    caption: "12th July 2024 - Too cute not to squish! 🥰"
  },  
  {
    image: "Images/Jun4,2024.jpg",
    caption: "4th June 2024 - Classroom diaries. 📖🤍"
  },
  {
    image: "Images/May13,2024.jpg",
    caption: "13th May 2024 - Hand hugs are soooo special! 🤗"
  },   
  {
    image: "Images/Apr12,2024.jpg",
    caption: "12th April 2024 - Like a butterfly drawn to the perfect bloom, she found her sunshine in a yellow flower. 🦋🌻"
  },
  {
    image: "Images/Mar22,2024.jpg",
    caption: "22nd March 2024 - Our love story, painted in bright yellow. 💛"
  },
    {
    image: "Images/Feb14,2024.jpg",
    caption: "14th February 2024 - A little bit of magic in an ordinary world.✨"
  },
  {
    image: "Images/Jan7,2024.jpg",
    caption: "7th January 2024 - Sudden selfies..!! 😍"
  },
  {
    image: "Images/Dec6,2023.jpg",
    caption: "6th December - Classy from the front, unforgettable from the back.💜"
  },
  {
    image: "Images/Nov19,2023.jpg",
    caption: "19th November - Sweet 🤍"
  }, 
  {
    image: "Images/Oct22,2023.jpg",
    caption: "22nd October - Golden girl in a golden drape. 💛"
  },  
  {
    image: "Images/Sept24,2023.jpg",
    caption: "24th September - Best Day Ever! ❤️"
  },
  {
    image: "Images/Aug20,2023.jpg",
    caption: "20th August - Cafe Sohojpath Date ☕"
  },
  {
    image: "Images/July12,2023.jpg",
    caption: "12th July - UG College Freshers Party 🎉"
  },
  {
    image: "Images/June12,2023.jpg",
    caption: "12th June - Cafe House ☕"
  },
  {
    image: "Images/May6,2023.jpg",
    caption: "6th May 2023 - Kolkata Memorial ✨"
  },
  {
    image: "Images/Jan26,2023.jpg",
    caption: "26th January 2023 - First Saraswati Puja Together 🌸"
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