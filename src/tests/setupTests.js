import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const localStorageMock = {
    isLoggedIn: true,
    hasErrored: false,
    isLoading: false,
    items: null,
    getItem: function(key) {
        return key == 'isLoggedIn' ? 'true' : 'false';
    }
};

// http://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests
// var localStorageMock = (function() {
//     var store = {};
//     return {
//         getItem: function(key) {
//             return store[key];
//         },
//         setItem: function(key, value) {
//             store[key] = value.toString();
//         },
//         clear: function() {
//             store = {};
//         }
//     };
// })();

global.localStorage = localStorageMock;
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

export const data = [];

data.push({
    _id: '1',
    date: new Date(2017,4,7).toJSON(),
    magnesium: 1.5,
    potassium: 4.3
});

data.push({
    _id: '2',
    date: new Date(2017,4,8).toJSON(),
    magnesium: 1.2,
    potassium: 3.1
});

export const store = mockStore(
    {
        labsReducer: {
            labsHistory: data,
            currentLabs: {
                date: new Date(2017,4,2).toJSON(),
                magnesium: 1.1,
                potassium: 3.7
            }
        }
    }
);