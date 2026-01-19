const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Убираем активные классы
    tabs.forEach(t => t.classList.remove('tab_active'));
    contents.forEach(c => c.classList.remove('tab__content_active'));

    // Добавляем активные классы по индексу
    tab.classList.add('tab_active');
    contents[index].classList.add('tab__content_active');
  });
});