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
      films = document.querySelector('.promo__interactive-list');

const movieDB = {
    movies: [
        "логан",
        "лига справедливости",
        "ла-ла лэнд",
        "одержимость",
        "скотт Пилигрим против...",        
    ]
};
const delAdv = function() {
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
const sortFilmByABC = function() {
    movieDB.movies.sort();
};
sortFilm();


function addFilmList() {
    films.innerHTML = '';
    movieDB.movies.forEach((item, i) =>{
        films.innerHTML += `
             <li class="promo__interactive-item">${i + 1}. ${item}
                 <div class="delete"></div>
             </li>
        `;
        
    });
}
addFilmList();


1
const form = document.querySelector('form.add');
const input = form.querySelector('input.adding__input');
const checkbox = form.querySelector('[type="checkbox"]');
const del = document.querySelectorAll('.delete');

function addMovies(addFilm, sortFilm) {
    
    let isChecked = checkbox.checked;  
    
    form.addEventListener('submit', (event)=> {
        let value = input.value.toLowerCase();

        event.preventDefault();
        if (value) {
            if (value.length > 21){
                value = value.slice(0, 21) + '...';
            }
            if (isChecked){
                console.log(`${value} Этот филм любимый!`);
            }
            movieDB.movies.push(value);
            event.target.reset();
            console.log(isChecked);
        } 
        
        sortFilm();

        addFilm();
    });
}
addMovies(addFilmList, sorFilm);

function deleteFromList() {

        del.forEach((btn, i )=> {
            btn.addEventListener('click', ()=> {
                console.log(btn + 'dell');
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                addFilmList();
        });
    });
}
 deleteFromList();
});