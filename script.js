let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    document.getElementById("time").innerHTML =
      (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
      (seconds > 9 ? seconds : "0" + seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("time").innerHTML = "00:00:00";
}
