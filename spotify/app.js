let songIndex = 0;
let audioElement = new Audio("song0.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
let songs = [
  {
    id: 0,
    songName: "Tu hain to mujhe",
    filePath: "song0.mp3",
    coverPath: "tu hain to.jpeg",
  },
  {
    id: 1,
    songName: "Tere Pyar Mein",
    filePath: "song1.mp3",
    coverPath: "tere payar mein.jpeg",
  },
  {
    id: 2,
    songName: "O Bedardeya",
    filePath: "song2.mp3",
    coverPath: "o bedardeya.jpeg",
  },
  {
    id: 3,
    songName: "Manike",
    filePath: "song3.mp3",
    coverPath: "manike.jpeg",
  },
  {
    id: 4,
    songName: "Mana Ki Mushkil Hai Safar ",
    filePath: "song4.mp3",
    coverPath: "mana ki mushkil.jpeg",
  },
  {
    id: 5,
    songName: "Malang Sajna",
    filePath: "song5.mp3",
    coverPath: "malang sajna.jpeg",
  },
  {
    id: 6,
    songName: "Maan Meri Jaan",
    filePath: "song6.mp3",
    coverPath: "man meri jaan.jpeg",
  },
  {
    id: 7,
    songName: "Kya Loge Tum",
    filePath: "song7.mp3",
    coverPath: "kya loge tum.jpeg",
  },
  {
    id: 8,
    songName: "Dil Galti Kar Baitha Hai",
    filePath: "song8.mp3",
    coverPath: "dil galti kar.jpeg",
  },
  {
    id: 9,
    songName: "Ram Siya Ram",
    filePath: "song9.mp3",
    coverPath: "ram siya ram.jpeg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
   
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
    songItemPlay.forEach((elem) => {
      elem.classList.remove("fa-circle-pause");
      elem.classList.add("fa-circle-play");
    });
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.add("fa-circle-play");
      element.classList.remove("fa-circle-pause");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      if (audioElement.paused || audioElement.currentTime <= 0) {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `song${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        gif.style.opacity = 1;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");

       
      } else {
        e.target.classList.remove("fa-circle-pause");
        e.target.classList.add("fa-circle-play");
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
      }
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `song${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `song${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
