import axios from '../../films-api';
import {FETCH_FILMS_SUCCESS, FETCH_FILM_SUCCESS} from "./ActionsType";

const fetchFilmsSuccess = films => ({type: FETCH_FILMS_SUCCESS, films});
const fetchFilmsByIdSuccess = film => ({type: FETCH_FILM_SUCCESS, film});

export const fetchFilms = () => {
    return dispatch => {
        return axios.get('/films').then(
            response => {
                dispatch(fetchFilmsSuccess(response.data))
            }
        );
    };
};

export const fetchFilmsById = id => {
    return dispatch => {
        return axios.get('/films/' + id).then(
            response => {
                dispatch(fetchFilmsByIdSuccess(response.data))
            }
        );
    };
};