import * as types from '../constants/RequestTypes'
import { items } from '../reducers/ItemsTypes'

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(
            items(undefined, {})
        ).toEqual([
            {
                isLoggedIn: true,
                hasErrored: false,
                isLoading: false,
                items: null
            }
        ])
    });

    it('should handle ITEMS_ADD', () => {
        expect(
            items([], {
                type: types.ITEMS_ADD,
                text: 'Run the tests'
            })
        ).toEqual(
            [
                {
                    id: 0,
                    hasErrored: false,
                    isLoading: false,
                    items: null
                }
            ]
        )
    });
});

// describe('items is loading reducer', () => {
//     it('should create an action to add a todo', () => {
//         const bool = true;
//         const expectedAction = {
//             type: types.ITEMS_IS_LOADING,
//             isLoading: bool
//         }
//         expect(actions.itemsIsLoading(bool)).toEqual(expectedAction)
//     })
// })