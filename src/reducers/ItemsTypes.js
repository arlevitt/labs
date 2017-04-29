import * as types from '../constants/ItemsTypes'

export const initialState = [
    {
        isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
        hasErrored: false,
        isLoading: false,
        items: null
    }
]

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case types.ITEMS_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case types.ITEMS_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function items(state = initialState, action) {
    switch (action.type) {
        case types.ITEMS_ADD:
            return [
                {
                    id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
                    hasErrored: false,
                    isLoading: false,
                    items: null
                },
                ...state
            ]
        case types.ITEMS_FETCH_DATA_SUCCESS:
            return action.body;
        case types.ITEMS_DELETE_SUCCESS:
            return action.body;
        default:
            return state;
    }
}