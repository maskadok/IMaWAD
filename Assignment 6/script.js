const tracks = [
    {title: "Track 1", src: "505.mp3", cover: "505.jpg"},
    {title: "Track 2", src: "beautifulthings.mp3", cover: "beautifulthings.jpg"},
    {title: "Track 3", src: "ymca.mp3", cover: "ymca.jpg"},
    {title: "Track 4", src: "ilomilo.mp3", cover: "ilomilo.jpg"}
];

let currentTrackIndex = 0;
const audio = new Audio(tracks[currentTrackIndex].src);
const cover = document.getElementById('cover');
const trackTitle = document.getElementById('track-title');
const playPauseButton = document.getElementById('play-pause');
const nextButton = document.getElementById('next');
const trackList = document.getElementById('track-list');

function loadTrack(index){
    currentTrackIndex = index;
    audio.src = tracks[currentTrackIndex].src;
    cover.src = tracks[currentTrackIndex].cover;
    trackTitle.textContent = tracks[currentTrackIndex].title;
}

function togglePlayPause(){
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}

function playNextTrack(){
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(nextIndex);
    audio.play();
    playPauseButton.textContent = 'Pause';
}

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextTrack);

trackList.addEventListener('click', (event)=>{
    if (event.target.tagName === 'LI') {
        const trackIndex = parseInt(event.target.getAttribute('data-index'));
        loadTrack(trackIndex);
        audio.play();
        playPauseButton.textContent = 'Pause';
    }
});

loadTrack(currentTrackIndex);