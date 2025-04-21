const musicButton = document.getElementById('musicButton');
  const audio = document.getElementById('backgroundMusic');
  let isPlaying = false;

  musicButton.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      musicButton.classList.remove('playing');
    } else {
      audio.play();
      musicButton.classList.add('playing');
    }
    isPlaying = !isPlaying;
  });

