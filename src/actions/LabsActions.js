import fetch from 'isomorphic-fetch';
import * as types from '../constants/RequestTypes'

export function labsFetchData(url) {
    console.log(url);
    return dispatch => {
        dispatch(labsFetchRequest());
        fetch(url)
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                dispatch(labsFetchSuccess(json));
            })
            .catch(ex => {
                //dispatch(itemsHasErrored(ex))
            });
    };
}

function labsFetchRequest() {
    return { type: types.LABS_FETCH_REQUEST }
}

function labsFetchSuccess(body) {
    console.log('labsFetchSuccess');
    console.log(body);
    return {
        type: types.LABS_FETCH_SUCCESS,
        body
    };
}

function labsSave(url, state, httpMethod) {
    return dispatch => {
        //dispatch(fetchItemsRequest());
        fetch(url, {
            method: httpMethod,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state),
        })
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                //dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then(json => dispatch(labsFetchDataSuccess(json)))
            .catch(ex => {
                //dispatch(itemsHasErrored(ex))
            });
    }
}

export function labsAdd(url, state) {
    console.log(url);
    console.log(JSON.stringify(state));
    return labsSave(url, state, 'POST')
}

export function labsUpdate(url, state) {
    console.log(url);
    console.log(JSON.stringify(state));
    return labsSave(url, state, 'PUT');
}

export function labsFetchDataSuccess(body) {
    return {
        type: types.LABS_FETCH_DATA_SUCCESS,
        body: body
    };
}