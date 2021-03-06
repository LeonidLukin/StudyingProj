'use strict';

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'


2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// let numberOfFilms = prompt('How many films have you watched already?')
// // console.log(numberOfFilms);

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// const a = prompt('Last film you watched?'),
//     b = prompt('Rate the film:'),
//     c = prompt('Last film you watched?'),
//     d = prompt('Rate the film:');

// personalMovieDB.movies[a] = b
// personalMovieDB.movies[c] = d

// console.log(personalMovieDB);


/* Задание на урок: 15

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания


let numberOfFilms

function start() {
    numberOfFilms = prompt('How many films have you watched already?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('How many films have you watched already?');
    }
}
start()

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Last film you watched?'),
            b = prompt('Rate the film:');

        if (a != '' && b != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b
            console.log('done');
        } else {
            console.log('Error');
            i--
        }
    }
}

rememberMyFilms()

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман')
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log([personalMovieDB]);
    }
}
showMyDB(personalMovieDB.privat)

function writeYourGernes() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres[i - 1] = genre
    }
}
writeYourGernes()