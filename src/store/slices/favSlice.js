import { createSlice } from '@reduxjs/toolkit';

// Function to save state to localStorage
const saveStateToLocalStorage = (state) => {
    localStorage.setItem('fav', JSON.stringify(state));
};

// Function to load state from localStorage
const loadStateFromLocalStorage = () => {
    const stateStr = localStorage.getItem('fav');
    return stateStr ? JSON.parse(stateStr) : { favCount: 0, favBooks: [] };
};

const initialState = loadStateFromLocalStorage();
console.log('Initial Fav State:', initialState);

export const favSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {

        // action that adds book to fav
        addToFav: (state, action) => {

            // Check whether book already exists or not
            let existingBook = state.favBooks.find(item => item.name === action.payload.name);

            // If book does not exist
            if (!existingBook) {
                state.favCount += 1;
                state.favBooks.push({ ...action.payload });
            }
            saveStateToLocalStorage(state);
        },

        // action that clears fav, setting everything to 0 and clearing books array
        clearFav: (state) => {
            state.favBooks = [];
            state.favCount = 0;
            saveStateToLocalStorage(state);
        },

        // action that removes book
        removeFav: (state, action) => {

            // Find book to be removed from books array
            let bookToRemove = state.favBooks.find(book => book.name === action.payload.name);

            // if book is found
            if (bookToRemove) {

                // Update books array accordingly
                state.favBooks = state.favBooks.filter(book => book.name !== action.payload.name);

                // Update fav count
                state.favCount -= 1;
            }
            // Save resulting changes to local storage
            saveStateToLocalStorage(state);
        }
    },
});

export const { addToFav, clearFav, removeFav } = favSlice.actions;

export default favSlice.reducer;
