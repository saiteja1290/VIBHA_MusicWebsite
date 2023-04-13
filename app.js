
const audio = document.getElementById("audio");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const volumeControl = document.getElementById("volume-control");
const progressBar = document.getElementById("progress-bar");
const form = document.querySelector("form");


playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);


volumeControl.addEventListener("input", setVolume);

audio.addEventListener("timeupdate", updateProgressBar);


function playAudio() {
  audio.play();
}


function pauseAudio() {
  audio.pause();
}


function setVolume() {
  audio.volume = volumeControl.value;
}


function updateProgressBar() {
  progressBar.value = (audio.currentTime / audio.duration) * 100;
}

let intervalId;
let minutes = 25;
let seconds = 0;

const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
op1.addEventListener('click',op1func);
op2.addEventListener('click',op2func);

function op1func() {
  clearInterval(intervalId);
  minutes = 25;
  timerEl.innerText = '25:00';
}

function op2func() {
  clearInterval(intervalId);
  minutes = 45;
  timerEl.innerText = '45:00';
}

function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
}

function pauseTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  minutes = 0;
  seconds = 0;
  updateTimer();
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(intervalId);
    alert('Time is up!');
    return;
  }

  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  timerEl.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

