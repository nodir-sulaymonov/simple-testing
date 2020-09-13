import * as actionTypes from '../action/listFilm';

export default (state = { allList: [] }, action) => {
    switch (action.type){
        case actionTypes.LIST_FILMS:
            return {
                ...state,
                allList: action.payload
            };
        case actionTypes.LIST_FILMS_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state;
    }
};
