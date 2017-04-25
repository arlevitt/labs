import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers';

const loggerMiddleware = createLogger({
    predicate: (getState, action) => action.type !== 'ITEMS_IS_LOADING'
});

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, loggerMiddleware)
    );
}