import * as types from '../constants/RequestTypes'

export const initialState = [
    {
        hasErrored: false,
        isLoading: false,
        items: null,
        labsHistory: null,
        currentLabs: null
    }
];

function labsReducer(state = initialState, action) {
    switch (action.type) {
        case types.LABS_FETCH_REQUEST:
            return Object.assign({}, state, {
                isLoading: true,
                labsHistory: null,
                currentLabs: null
            });
        case types.LABS_FETCH_SUCCESS:
            var field = Array.isArray(action.body) ? 'labsHistory' : 'currentLabs';
            return Object.assign({}, state, {
                isLoading: false,
                [field]: action.body
            });
        default:
            return state;
    }
}

export default labsReducer;