import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/ItemsActions'
import * as types from '../reducers/ItemTypes'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares);
const url = 'http://example.com/posts';

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('creates ITEMS_FETCH_DATA_SUCCESS when fetching items has been done', () => {
        nock('http://example.com/')
            .get('/posts')
            .reply(200, { body: { items: [] }})

        const expectedActions = [
            { type: types.ITEMS_FETCH_REQUEST },
            { type: types.ITEMS_FETCH_DATA_SUCCESS, body: { items: [] } }
        ];

        const store = mockStore({ items: [] });

        return store.dispatch(actions.itemsFetchData(url))
        //return store.dispatch(actions.itemsFetchData2())
            .then(() => { // return of async actions
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
})