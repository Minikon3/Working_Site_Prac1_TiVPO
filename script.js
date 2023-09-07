// Получаем кнопки фильтрации и контейнер с карточками
const filterAll = document.getElementById('filter-all');
const filterSport = document.getElementById('filter-sport');
const filterPolitics = document.getElementById('filter-politics');
const filterEconomy = document.getElementById('filter-economy');
const newsContainer = document.querySelector('.grid-container');
const filterButtons = document.querySelectorAll('#news-filter button');

// Добавляем обработчики событий для кнопок
filterAll.addEventListener('click', () => filterNews('all'));
filterSport.addEventListener('click', () => filterNews('sport'));
filterPolitics.addEventListener('click', () => filterNews('politics'));
filterEconomy.addEventListener('click', () => filterNews('economy'));

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Функция для фильтрации новостей
function filterNews(category) {
    // Получаем все карточки новостей
    const newsCards = newsContainer.querySelectorAll('.news');
    
    // Перебираем карточки и скрываем/показываем в зависимости от выбранной категории
    newsCards.forEach((card) => {
        const categoryTag = card.dataset.category;
        if (category === 'all' || categoryTag === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// По умолчанию показываем все новости
filterNews('all');
