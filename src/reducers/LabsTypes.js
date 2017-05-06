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
                [field]: action.body,
                [field]: action.body
            });
        default:
            return state;
    }
}

export default labsReducer;


// export function labs(state = initialState, action) {
//     console.log(action.type);
//     switch (action.type) {
//         case types.LABS_ADD_REQUEST:
//             return [
//                 {
//                     hasErrored: false,
//                     isLoading: false,
//                     labs: null
//                 },
//                 ...state
//             ]
//         case types.LABS_UPDATE_REQUEST:
//             return [
//                 {
//                     hasErrored: false,
//                     isLoading: false,
//                     labs: null
//                 },
//                 ...state
//             ]
//         case types.LABS_FETCH_DATA_SUCCESS:
//             return action.body;
//         case types.LABS_CLEAR_DATA:
//             return action.body;
//         default:
//             return state;
//     }
// }