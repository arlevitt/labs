import * as types from '../constants/RequestTypes'

export const initialState = [
    {
        isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
        hasErrored: false,
        isLoading: false,
        labs: null
    }
]

export function labs(state = initialState, action) {
    switch (action.type) {
        case types.LABS_ADD_REQUEST:
            return [
                {
                    hasErrored: false,
                    isLoading: false,
                    labs: null
                },
                ...state
            ]
        case types.LABS_FETCH_DATA_SUCCESS:
            return action.body;
        default:
            return state;
    }
}