import { createSlice } from '@reduxjs/toolkit';

// Function to save state to localStorage
const saveStateToLocalStorage = (state) => {
    localStorage.setItem('cart', JSON.stringify(state));
};

// Function to load state from localStorage
const loadStateFromLocalStorage = () => {
    const stateStr = localStorage.getItem('cart');
    return stateStr ? JSON.parse(stateStr) : { basketCount: 0, books: [], totalAmount: 0 };
};

const initialState = loadStateFromLocalStorage();
console.log('Initial Cart State:',initialState);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        // action that adds book to cart
        addToCart: (state, action) => {

            // Check whether book already exists or not
            let existingBook = state.books.find(item => item.name === action.payload.name);

            // If book already exists
            if (existingBook) {
                
                state.books = state.books.map((item) => {

                    // If user's demand of book quantity is less than available stock
                    if (item.name === action.payload.name && item.cartQuantity < action.payload.quantity) {

                        // Increase basket count
                        state.basketCount += 1;

                        // Rearrange total amount
                        state.totalAmount += action.payload.price;

                        // Increase book's cart quantity by one
                        return { ...item, cartQuantity: item.cartQuantity + 1 };
                    }
                    return item;
                });
            } else {
                state.basketCount += 1;
                state.totalAmount += action.payload.price;
                // If the book is added for the first time
                state.books.push({ ...action.payload, cartQuantity: 1 });
            }
            saveStateToLocalStorage(state);
        },

        // action that clears cart, setting everything to 0 and clearing books array
        clearCart: (state) => {
            state.books = [];
            state.basketCount = 0;
            state.totalAmount = 0;
            saveStateToLocalStorage(state);
        },

        // action that removes book
        removeBook: (state, action) => {

            // Find book to be removed from books array
            let bookToRemove = state.books.find(book => book.name === action.payload.name);

            // if book is found
            if (bookToRemove) {

                // Rearrange total amount
                state.totalAmount = state.totalAmount - ( bookToRemove.price * bookToRemove.cartQuantity);

                // Update books array accordingly
                state.books = state.books.filter(book => book.name !== action.payload.name);

                // Update basket count
                state.basketCount = state.books.reduce((total, book) => total + book.cartQuantity, 0);
            }
            // Save resulting changes to local storage
            saveStateToLocalStorage(state);
        },

        // action that adds one book
        addOneBook: (state, action) => {
            state.books = state.books.map((item) => {
                if (item.name === action.payload.name) {
                    // if user's quantity demand is less stock
                    if (item.cartQuantity < action.payload.quantity) {

                        // Increase basket count, cart quantity and rearrange total amount accordingly
                        state.basketCount += 1;
                        state.totalAmount += action.payload.price;
                        item = { ...item, cartQuantity: item.cartQuantity + 1 };
                    }
                }
                return item;
            });
            // Save resulting changes to local storage
            saveStateToLocalStorage(state);
        },

        // Action that removes one book from the cart 
        removeOneBook: (state, action) => {
            state.books = state.books.map((item) => {
                if (item.name === action.payload.name) {

                    // If book's cart quantity is bigger than 0
                    if (item.cartQuantity > 0) {

                        // Reduce cart quantity by one
                        item = { ...item, cartQuantity: item.cartQuantity - 1 };

                        // Reduce basket counter's value by one
                        state.basketCount -= 1;

                        // Rearrange total amount
                        state.totalAmount -= action.payload.price;
                    }
                }
                return item;
            });
            saveStateToLocalStorage(state);
        },
    },
});

export const { addToCart, clearCart, removeBook, addOneBook, removeOneBook } = cartSlice.actions;

export default cartSlice.reducer;
