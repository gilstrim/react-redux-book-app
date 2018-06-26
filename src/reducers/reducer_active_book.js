// State arguments is not application state, only the state this reducer is responsible for
//
export default function(state = null, action) {

    // Never mutate the state - always return a fresh object
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}