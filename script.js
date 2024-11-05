document.addEventListener('DOMContentLoaded', () => {
    const playPauseButton = document.querySelector('.play-pause');
    const trackInfo = document.getElementById('track-info');
    const volumeSlider = document.getElementById('volume-slider');

    // Play/Pause button functionality
    playPauseButton.addEventListener('click', () => {
        if (playPauseButton.textContent === 'Play') {
            playPauseButton.textContent = 'Pause';
            trackInfo.style.display = 'flex'; // Show track info
        } else {
            playPauseButton.textContent = 'Play';
            trackInfo.style.display = 'none'; // Hide track info
        }
    });
});
