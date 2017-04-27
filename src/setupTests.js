const localStorageMock = {
    isLoggedIn: true,
    hasErrored: false,
    isLoading: false,
    items: null,
    getItem: function(key) {
        return key == 'isLoggedIn' ? 'true' : 'false';
    }
};

global.localStorage = localStorageMock;