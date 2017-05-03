export function addLabs(url, state) {
    console.log(url);
    console.log(JSON.stringify(state));
    console.log(state);
    var string = JSON.stringify(state);
    return dispatch => {
        //dispatch(fetchItemsRequest());
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body: string,
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

    //return { type: types.LABS_ADD_REQUEST, url }
}
//
// export function post(url) {
//     return dispatch => {
//         dispatch(fetchItemsRequest());
//         dispatch(itemsIsLoading(true));
//         return fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 dispatch(itemsIsLoading(false));
//                 return response;
//             })
//             .then((response) => response.json())
//             .then(json => dispatch(itemsFetchDataSuccess(json)))
//             .catch(ex => {
//                 dispatch(itemsHasErrored(ex))
//             });
//     };
// }

