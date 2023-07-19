const countdown = document.querySelector(".countdown");
const countdownMinutes = 100;
let time = countdownMinutes * 60;

function updateTime() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdown.innerHTML = `${minutes} : ${seconds}`;

  time--;
}

setInterval(updateTime, 1000);
