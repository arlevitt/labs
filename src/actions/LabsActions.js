import fetch from 'isomorphic-fetch';
import * as types from '../constants/RequestTypes'

export function addLabs(url, state) {
    console.log(url);
    console.log(JSON.stringify(state));
    return dispatch => {
        //dispatch(fetchItemsRequest());
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type':'application/json'
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
        //.then(json => dispatch(itemsFetchDataSuccess(json)))
        .then(json => alert(json))
        .catch(ex => {
            //dispatch(itemsHasErrored(ex))
        });
    };
}


export function labsFetchDataSuccess(body) {
    var array = [];
    if(!Array.isArray(body) && !Array.isArray(body.items)) {
        array.push(body);
    } else {
        array = body;
    }

    return {
        type: types.LABS_FETCH_DATA_SUCCESS,
        body: array
    };
}

export function getLabs(url) {
    return dispatch => {
        //dispatch(fetchItemsRequest());
        return fetch(url)
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
                console.log(ex);
                //dispatch(itemsHasErrored(ex))
            });
    };
}