export const ITEMS_FETCH_REQUEST = 'ITEMS_FETCH_REQUEST';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';
export const ITEMS_DELETE_SUCCESS = 'ITEMS_DELETE_SUCCESS';


export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            return action.body;
        case 'ITEMS_DELETE_SUCCESS':
            return action.body;
        default:
            return state;
    }
}