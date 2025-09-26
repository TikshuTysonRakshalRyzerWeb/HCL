const soundFiles = [
  "option_sound/TestSound1.mp3",
  "option_sound/Zinda.mp3",
"option_sound/Raftaarein_Ra_One.mp3"
];

const select = document.getElementById('soundSelector');
const status = document.getElementById('status');
const playBtn = document.getElementById('playBtn');
const toggleBtn = document.getElementById('toggleBtn');

soundFiles.forEach(file => {
  const name = file.split('/').pop();
  const option = document.createElement('option');
  option.value = file;
  option.textContent = name;
  select.appendChild(option);
});

let audio;

function playSound() {
  const selectedFile = select.value;
  if (!selectedFile) {
    alert('Please select a sound file first.');
    return;
  }
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  audio = new Audio(selectedFile);
  audio.onplay = () => {
    status.textContent = `Playing: ${select.options[select.selectedIndex].text}`;
  };
  audio.onended = () => {
    status.textContent = 'Playback finished.';
  };
  audio.onerror = () => {
    status.textContent = 'Error playing the sound.';
  };
  audio.play().catch(e => {
    status.textContent = 'Playback failed. Please interact with the page.';
  });
}

function togglePlayPause() {
  if (!audio) {
    // If no audio loaded, play selected sound
    playSound();
  } else if (audio.paused) {
    audio.play().catch(e => {
      status.textContent = 'Playback failed. Please interact with the page.';
    });
  } else {
    audio.pause();
    status.textContent = 'Paused';
  }
}

playBtn.addEventListener('click', playSound);
toggleBtn.addEventListener('click', togglePlayPause);
