import axios from "axios";
import {apiUrl} from "../common/api";
import {successNotifiy,failureNotify} from "./notifications/notifications";

export const LIST_FILMS_ERROR = 'LIST_FILMS_ERROR';
export const LIST_FILMS = 'LIST_FILMS'

export const fetchFilmsList = () => {
    return dispatch => {
        axios.get(apiUrl)
            .then(res => {
                dispatch({
                    type: LIST_FILMS,
                    payload: res.data
                });
                successNotifiy('OK','You successfully registered.');
            })
            .catch(err => {
                dispatch(ListError(err.message));
                failureNotify('ERROR',err.message)
            });
    }
}

const ListError = error => ({
    type: LIST_FILMS_ERROR,
    payload: {
        error
    }
})

