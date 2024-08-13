const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');

const progressBar = document.getElementById('progress-bar');

const tracks = [
    { title: 'kuch kuch hota hai', artist: 'Udit narayan & dipti shah', src: 'song1.mp3' },
    { title: 'kal ho na ho', artist: 'sonu nigam & karan j', src: 'song2.mp3' },
    { title: 'eik din aap yu hum ko miil jayengai', artist: 'sanu & alka', src: 'song3.mp3' }
];

let currentTrackIndex = 0;

function loadTrack(index) {
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
    trackArtist.textContent = tracks[index].artist;
    albumCover.src = tracks[index].cover || 'default-cover.jpg';
}

function playPauseTrack() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseBtn.textContent = '⏸️';
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseBtn.textContent = '⏸️';
}

function updateProgress() {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
}

function setProgress() {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
}

playPauseBtn.addEventListener('click', playPauseTrack);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);
audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('input', setProgress);

loadTrack(currentTrackIndex);
