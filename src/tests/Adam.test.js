function fetchTodosRequest() {
    return {
        type: 'FETCH_TODOS_REQUEST'
    }
}

function fetchTodosSuccess(body) {
    return {
        type: 'FETCH_TODOS_SUCCESS',
        body
    }
}

function fetchTodosFailure(ex) {
    return {
        type: 'FETCH_TODOS_FAILURE',
        ex
    }
}

function fetchTodos() {
    return dispatch => {
        dispatch(fetchTodosRequest())
        return fetch('http://example.com/todos')
            .then(res => res.json())
            .then(json => dispatch(fetchTodosSuccess(json.body)))
            .catch(ex => dispatch(fetchTodosFailure(ex)))
    }
}

import fetch from 'isomorphic-fetch';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
        nock('http://example.com/')
            .get('/todos')
            .reply(200, { body: { todos: ['do something'] }})

        const expectedActions = [
            { type: 'FETCH_TODOS_REQUEST' },
            { type: 'FETCH_TODOS_SUCCESS', body: { todos: ['do something']  } }
        ]
        const store = mockStore({ todos: [] })

        return store.dispatch(fetchTodos())
            .then(() => { // return of async actions
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
})