import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './ItemTypes';
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});