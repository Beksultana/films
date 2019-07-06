import {FETCH_FILMS_SUCCESS, FETCH_FILM_SUCCESS} from "../actions/ActionsType";

const initialState = {
    films: [],
    film: null
};

const filmsReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILMS_SUCCESS:
            return {...state, films: action.films};
        case FETCH_FILM_SUCCESS:
            return {...state, film: action.film};
        default:
            return state;
    }
};

export default filmsReducers;