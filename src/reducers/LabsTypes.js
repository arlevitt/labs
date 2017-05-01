import * as types from '../constants/RequestTypes'

export const initialState = [
    {
        // isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
        // hasErrored: false,
        // isLoading: false,
        // items: null
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

export function labs(state = initialState, action) {
    alert('add lab');

    switch (action.type) {
        case types.LABS_ADD:
            return [
                {
                    id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
                    hasErrored: false,
                    isLoading: false,
                    items: null
                },
                ...state
            ]
        default:
            return state;
    }
}