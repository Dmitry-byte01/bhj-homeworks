const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i <= 9; i++) {
  const hole = document.getElementById(`hole${i}`);

  hole.addEventListener('click', () => {
    if (hole.classList.contains('hole_has-mole')) {
      dead.textContent = Number(dead.textContent) + 1;

      hole.classList.remove('hole_has-mole');
    } else {
      lost.textContent = Number(lost.textContent) + 1;
    }

    if (Number(dead.textContent) >= 10) {
      alert('Вы победили!');
      dead.textContent = 0;
      lost.textContent = 0;
    }

    if (Number(lost.textContent) >= 5) {
      alert('Вы проиграли!');
      dead.textContent = 0;
      lost.textContent = 0;
    }
  });
}
