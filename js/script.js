/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const adv = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg') ,
      changeGanre = promoBg.querySelector('.promo__genre'),
      films = document.querySelector('.promo__interactive-list');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",        
    ]
};

adv.forEach(item => {
    item.remove();
});      

changeGanre.textContent = 'ДРАММА';

promoBg.style.cssText = `background:url('/img/bg.jpg') center center/cover no-repeat;`;

films.innerHTML = '';

 movieDB.movies.sort();

 

 movieDB.movies.forEach((item, i) =>{
   films.innerHTML += `
        <li class="promo__interactive-item">${i}. ${item}
            <div class="delete"></div>
        </li>
   `;
});
