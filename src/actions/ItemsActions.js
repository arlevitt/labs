import fetch from 'isomorphic-fetch';
import * as types from '../reducers/ItemTypes'

export const rootUrl = 'https://jsonplaceholder.typicode.com';

export const ApiUrls = {
    POSTS: rootUrl + '/posts'
};

export function fetchItemsRequest() {
    return {
        type: types.ITEMS_FETCH_REQUEST
    }
}

export function itemsHasErrored(bool) {
    return {
        type: types.ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}
export function itemsIsLoading(bool) {
    return {
        type: types.ITEMS_IS_LOADING,
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(body) {
    console.log('BODY!: ' + body);
    var array = [];
    if(!Array.isArray(body) && !Array.isArray(body.items)) {
        console.log('item is single');
        array.push(body);
    } else {
        console.log('item is array');

        array = body;
    }

    return {
        type: types.ITEMS_FETCH_DATA_SUCCESS,
        body: array
    };
}

export function itemsFetchData2() {
    return dispatch => {
        dispatch(fetchItemsRequest());
        return fetch('http://example.com/posts')
            .then(response => response.json())
            .then(json => dispatch(itemsFetchDataSuccess(json.body)))
            .catch(ex => dispatch(itemsHasErrored(ex)))
    }
}

export function itemsFetchData(url) {
    return dispatch => {
        //dispatch(itemsIsLoading(true));
        dispatch(fetchItemsRequest());
        return fetch(url)
            // .then((response) => {
            //     if (!response.ok) {
            //         throw Error(response.statusText);
            //     }
            //     dispatch(itemsIsLoading(false));
            //     return response;
            // })
            .then((response) => response.json())
            .then(json => dispatch(itemsFetchDataSuccess(json)))
            .catch(ex => {
                console.log('ERROR: ' + ex.toString());
                dispatch(itemsHasErrored(true))
            });
    };
}