const tracks = [
    {
        title: "Track 1",
        src: "path/to/your/audio1.mp3" // Replace with your audio file path
    },
    {
        title: "Track 2",
        src: "path/to/your/audio2.mp3" // Replace with your audio file path
    },
    {
        title: "Track 3",
        src: "path/to/your/audio3.mp3" // Replace with your audio file path
    }
];

const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
const trackList = document.getElementById('track-list');

// Load track list
tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = track.title;
    li.addEventListener('click', () => {
        audioSource.src = track.src;
        audio.load();
        audio.play();
    });
    trackList.appendChild(li);
});
