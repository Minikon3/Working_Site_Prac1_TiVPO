// Получаем все элементы с классом "joke"
const jokes = document.querySelectorAll('.joke');

// Перебираем анекдоты и добавляем обработчик события на кнопку
jokes.forEach((joke) => {
    const jokeText = joke.querySelector('.joke-text');
    const jokeButton = joke.querySelector('.joke-button');
    joke.style.height = '65px';
    let isOpen = false;

    jokeButton.addEventListener('click', () => {
        if (!isOpen) {
            // Если анекдот уже открыт, закрыть его
            joke.style.height = 'auto'; // Вернуть высоту к "авто"
            jokeButton.textContent = 'Закрыть'; // Обновляем текст кнопки
        } else {
            // Если анекдот закрыт, открыть его
            joke.style.height = 65 + 'px';
            jokeButton.textContent = 'Показать полностью'; // Обновляем текст кнопки
        }
        
        isOpen = !isOpen; // Инвертировать состояние (открыто/закрыто)
    });
});