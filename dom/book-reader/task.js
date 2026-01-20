const book = document.getElementById('book');
const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach(size => {
  size.addEventListener('click', event => {
    event.preventDefault();

    // снимаем активный класс со всех
    fontSizes.forEach(el => el.classList.remove('font-size_active'));

    // делаем текущий активным
    size.classList.add('font-size_active');

    // удаляем классы размера у книги
    book.classList.remove('book_fs-small', 'book_fs-big');

    // получаем размер
    const fontSize = size.dataset.size;

    if (fontSize) {
      book.classList.add(`book_fs-${fontSize}`);
    }
  });
});

const textColors = document.querySelectorAll('[data-text-color]');

textColors.forEach(color => {
  color.addEventListener('click', event => {
    event.preventDefault();

    textColors.forEach(el => el.classList.remove('color_active'));
    color.classList.add('color_active');

    book.classList.remove(
      'book_color-black',
      'book_color-gray',
      'book_color-whitesmoke'
    );

    book.classList.add(`book_color-${color.dataset.textColor}`);
  });
});

const bgColors = document.querySelectorAll('[data-bg-color]');

bgColors.forEach(color => {
  color.addEventListener('click', event => {
    event.preventDefault();

    bgColors.forEach(el => el.classList.remove('color_active'));
    color.classList.add('color_active');

    book.classList.remove(
      'book_bg-black',
      'book_bg-gray',
      'book_bg-white'
    );

    book.classList.add(`book_bg-${color.dataset.bgColor}`);
  });
});