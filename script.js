const play = document.getElementById('play');
const music = document.querySelector('audio');
const img = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// storing songs in the array.

const songs = [{
    name:"song1",
    title: "Moonlight",
    artist: "XendomArts",
},

{
    name:"song2",
    title: "Canción Triste",
    artist: "enrique27naveda",
},

{
    name:"song3",
    title: "Cali",
    artist: "Wataboi",
},

{
    name:"song4",
    title: "Kingdom",
    artist: "DeepMusicEveryDay",
}

]

// paly button function.

let isPlaying = false;
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('anime');
}


// pause button function.

  const pauseMusic =  () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime');
}

play.addEventListener('click', () => {

    isPlaying ? pauseMusic() : playMusic();

});

// loading the song.

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = 'songs/'+songs.name+'.mp3';
    img.src = 'images/'+songs.name+'.jpg';
    title.innerHTML = songs.title;
    artist.innerHTML = songs.artist;
}

songIndex = 0;

// next button function.
const nextSong = () => {
    songIndex = (songIndex +1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

// prev button function.
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]); 
    playMusic();
};


next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);