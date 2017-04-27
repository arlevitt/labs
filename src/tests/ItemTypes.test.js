// describe('chatReducer()', ({ test }) => {
//     test('with no arguments', ({ same, end }) => {
//         const msg = 'should return correct default state';
//
//         const actual = reducer();
//         const expected = createState();
//
//         same(actual, expected, msg);
//         end();
//     });
// });
//
// import React from 'react';
// import { createItems, createState } from './items-reducer-factory';
//
// it('renders without crashing', () => {
//     console.log(createState());
// });


import * as actions from '../actions/ItemsActions'
import * as types from '../reducers/ItemsTypes'


describe('actions', () => {
    it('should create an action to add a todo', () => {
        const bool = true;
        const expectedAction = {
            type: types.ITEMS_IS_LOADING,
            isLoading: bool
        }
        expect(actions.itemsIsLoading(bool)).toEqual(expectedAction)
    })
})