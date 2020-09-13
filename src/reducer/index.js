import {combineReducers} from 'redux';
import allList from '../reducer/list-reducer';
export default combineReducers({
    films: allList,
});
