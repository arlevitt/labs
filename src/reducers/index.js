import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './ItemsTypes';
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});