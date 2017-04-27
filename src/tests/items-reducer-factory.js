const createItems = ({
                        userId = 2,
                        id = 14,
                        title = 'voluptatem eligendi optio',
                        body ='fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum'
                    } = {}) => ({
    userId, id, title, body
});

const createState = ({
                         isLoggedIn = true,
                         hasErrored = false,
                         isLoading = false,
                         items = null
                     } = {}) => ({
    isLoggedIn, hasErrored, isLoading, items
});