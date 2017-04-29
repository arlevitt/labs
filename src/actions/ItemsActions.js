import fetch from 'isomorphic-fetch';
import * as types from '../constants/ItemsTypes'

export const rootUrl = 'https://jsonplaceholder.typicode.com';

export const ApiUrls = {
    POSTS: rootUrl + '/posts'
};

export function fetchItemsRequest() {
    return {
        type: types.ITEMS_FETCH_REQUEST
    }
}

export function itemsHasErrored(ex) {
    return {
        type: types.ITEMS_HAS_ERRORED,
        errorMessage: ex.toString(),
        hasErrored: true
    };
}
export function itemsIsLoading(bool) {
    return {
        type: types.ITEMS_IS_LOADING,
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(body) {
    var array = [];
    if(!Array.isArray(body) && !Array.isArray(body.items)) {
        array.push(body);
    } else {
        array = body;
    }

    return {
        type: types.ITEMS_FETCH_DATA_SUCCESS,
        body: array
    };
}

export function itemsFetchData(url) {
    return dispatch => {
        dispatch(fetchItemsRequest());
        dispatch(itemsIsLoading(true));
        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then(json => dispatch(itemsFetchDataSuccess(json)))
            .catch(ex => {
                dispatch(itemsHasErrored(ex))
            });
    };
}