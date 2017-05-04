import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers';

const loggerMiddleware = createLogger({
    predicate: (getState, action) => action.type === 'LABS_FETCH_DATA_SUCCESS'
    //collapsed: (getState, action, logEntry) => !logEntry.error
});

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, loggerMiddleware)
    );
}