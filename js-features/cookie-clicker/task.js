const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');

let clicks = 0;
let isBig = false;
let lastClickTime = null;

cookie.onclick = () => {
  const now = new Date();

  clicks += 1;
  counter.textContent = clicks;

  if (lastClickTime) {
    const delta = (now - lastClickTime) / 1000;
    speed.textContent = (1 / delta).toFixed(2);
  }

  lastClickTime = now;

  cookie.width = isBig ? 200 : 220;
  isBig = !isBig;
};