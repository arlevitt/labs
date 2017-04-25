export const rootUrl = 'https://jsonplaceholder.typicode.com';

export const ApiUrls = {
    POSTS: rootUrl + '/posts'
};

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(items) {
    var array = [];
    if( Object.prototype.toString.call( items ) !== '[object Array]' ) {
        array.push(items);
    } else {
        array = items;
    }

    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: array
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}