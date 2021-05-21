/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () =>{
    const adv = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg') ,
      changeGanre = promoBg.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      input = addForm.querySelector('input.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');

const movieDB = {
    movies: [
        "логан",
        "лига справедливости",
        "ла-ла лэнд",
        "одержимость",
        "скотт Пилигрим против...",        
    ]
};
const deleteAdverts = function() {
    adv.forEach(item => {
        item.remove();
    }); 
} ;
const changeGenre = function() {
    changeGanre.textContent = 'ДРАММА';
};
const changePromoBackground = function() {
    promoBg.style.cssText = `background:url('/img/bg.jpg') center center/cover no-repeat;`;
};
const sortFilmByABC = function(arr) {
    arr.sort();
};

const createMovieList = function(films, parent) {
    parent.innerHTML = '';
    sortFilmByABC(films);
    films.forEach((film, i) =>{
        parent.innerHTML += `
             <li class="promo__interactive-item">${i + 1}. ${film}
                 <div class="delete"></div>
             </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(films, parent);
        });
    });

};

addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let newFilm = input.value;
    const favorite = checkbox.checked;

    if (newFilm){
        if (newFilm.length > 21){
            newFilm = `${newFilm.substring(0, 22)}...`;
        }
        movieDB.movies.push(newFilm);
        createMovieList(movieDB.movies, movieList);
        event.target.reset();
    }
    if (favorite) {
        console.log('!');
    }
});

deleteAdverts();
changeGenre();
changePromoBackground();
createMovieList(movieDB.movies, movieList);
});