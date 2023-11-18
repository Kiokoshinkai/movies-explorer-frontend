export const BASE_URL = 'https://api.vvg.nomoredomainsrocks.ru';

export const MOVIE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const handleResponse = (res) => {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
};
export const convertDuration = (number) => {
    const minutes = number % 60;
    const hours = (number - minutes) / 60;
    if (hours === 0) {
        return `${minutes}м`;
    } else if (minutes === 0) {
        return `${hours}ч`;
    } else {
        return `${hours}ч ${minutes}м`;
    }
};
//  ширина экрана
const MAX_WIDTH_1280 = 1280;
const MIDDLE_WIDTH_768 = 768;
const MIN_WIDTH_480 = 480;
// количество  фильмов от ширины экрана
const INITIAL_CARDS_1280 = 16;
const INITIAL_CARDS_768 = 9;
const INITIAL_CARDS_768s = 5;
const INITIAL_CARDS_480 = 5;
// добавление фильмов от ширины экрана
const MORE_CARDS_3 = 4;
const MORE_CARDS_2 = 3;
const MORE_CARDS_1 = 2;

export {
    MAX_WIDTH_1280,
    MIDDLE_WIDTH_768,
    MIN_WIDTH_480,
    INITIAL_CARDS_1280,
    INITIAL_CARDS_768,
    INITIAL_CARDS_768s,
    INITIAL_CARDS_480,
    MORE_CARDS_3,
    MORE_CARDS_2,
    MORE_CARDS_1
};
