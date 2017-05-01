export function addLabs(url, state) {
    return dispatch => {
        //dispatch(fetchItemsRequest());
        fetch(url, {
            method: 'POST',
            body: state
        })
        .then((response) => {
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

