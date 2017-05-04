import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './ItemsTypes';
import { labs } from './LabsTypes';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    labs
});