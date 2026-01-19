const timerElement = document.getElementById('timer');

let totalSeconds = Number(timerElement.textContent);

function formatTime(seconds) {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');

  return `${hours}:${minutes}:${secs}`;
}

timerElement.textContent = formatTime(totalSeconds);

const intervalId = setInterval(() => {
  totalSeconds -= 1;
  timerElement.textContent = formatTime(totalSeconds);

  if (totalSeconds <= 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  }
}, 1000);