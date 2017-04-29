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