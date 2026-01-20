const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  let index = cases.findIndex(el =>
    el.classList.contains('rotator__case_active')
  );

  function rotate() {
 
    const current = cases[index];
    current.classList.remove('rotator__case_active');

    
    index = (index + 1) % cases.length;
    const next = cases[index];

 
    if (next.dataset.color) {
      next.style.color = next.dataset.color;
    }

    next.classList.add('rotator__case_active');

    
    const speed = Number(next.dataset.speed) || 1000;

    setTimeout(rotate, speed);
  }

 
  const startSpeed = Number(cases[index].dataset.speed) || 1000;
  setTimeout(rotate, startSpeed);
});