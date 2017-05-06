import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './ItemsTypes';
import labsReducer from './LabsTypes';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    labsReducer
});