// Get the audio element and the controls
const audio = document.getElementById("audio");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const volumeControl = document.getElementById("volume-control");
const progressBar = document.getElementById("progress-bar");
const form = document.querySelector("form");
const startStop = document.getElementById("start-stop");
const reset = document.getElementById("reset");
const timeLeft = document.getElementById("time-left");
const duration25 = document.getElementById("minutes1");
const duration40 = document.getElementById("minutes2");
const duration60 = document.getElementById("hour");

let intervalId;
let duration = 25 * 60;

function startTimer() {
  startStop.textContent = "Stop";
  intervalId = setInterval(() => {
    duration--;
    timeLeft.textContent = (duration / 60).toFixed(2);
    if (duration === 0) {
      clearInterval(intervalId);
      startStop.textContent = "Start";
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  startStop.textContent = "Start";
  audio.pause();
}

function resetTimer() {
  clearInterval(intervalId);
  startStop.textContent = "Start";
  duration = 25 * 60;
  timeLeft.textContent = (duration / 60).toFixed(2);
}

duration25.addEventListener("click", () => {
    duration = 25 * 60;
    timeLeft.textContent = (duration / 60).toFixed(2);
});

duration40.addEventListener("click", () => {
    duration = 40 * 60;
    timeLeft.textContent = (duration / 60).toFixed(2);
});

duration60.addEventListener("click", () => {
    duration = 60 * 60;
    timeLeft.textContent = (duration / 60).toFixed(2);
});

startStop.addEventListener("click", () => {
  audio.play();
  if (startStop.textContent === "Start") {
    startTimer();
  } else {
    stopTimer();

  }
});

reset.addEventListener("click", resetTimer);




// Add event listeners to the play and pause buttons
playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);

// Add an event listener to the volume control
volumeControl.addEventListener("input", setVolume);

// Add an event listener to update the progress bar
audio.addEventListener("timeupdate", updateProgressBar);

// Play the audio
function playAudio() {
  audio.play();
}

// Pause the audio
function pauseAudio() {
  audio.pause();
}

// Set the volume
function setVolume() {
  audio.volume = volumeControl.value;
}

// Update the progress bar
function updateProgressBar() {
  progressBar.value = (audio.currentTime / audio.duration) * 100;
}
