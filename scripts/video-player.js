// Initialize Plyr on the video element
const player = new Plyr('#player', {
    controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen', 'settings'],
    fullscreen: { enabled: true, fallback: true, iosNative: true },
    loop: false,
    autoplay: false
});

// Optional: Custom button event listeners (if you want to add more controls)
// Play/Pause button
document.getElementById('playPause').addEventListener('click', () => {
    if (player.playing) {
        player.pause();
    } else {
        player.play();
    }
});

// Volume control (Example: input range for volume)
document.getElementById('volumeControl').addEventListener('input', (event) => {
    player.volume = event.target.value / 100;
});

// Fullscreen button toggle
document.getElementById('fullscreenToggle').addEventListener('click', () => {
    player.fullscreen.toggle();
});
