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
console.log('Initial State:',initialState);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let existingBook = state.books.find(item => item.name === action.payload.name);
            if (existingBook) {
                // If the same book is clicked twice
                state.books = state.books.map((item) => {
                    if (item.name === action.payload.name && item.cartQuantity < action.payload.quantity) {
                        state.basketCount += 1;
                        state.totalAmount += action.payload.price;
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
        clearCart: (state) => {
            state.books = [];
            state.basketCount = 0;
            state.totalAmount = 0;
            saveStateToLocalStorage(state);
        },
        removeBook: (state, action) => {
            let bookToRemove = state.books.find(book => book.name === action.payload.name);
            if (bookToRemove) {
                state.totalAmount -= bookToRemove.price * bookToRemove.cartQuantity;
                state.books = state.books.filter(book => book.name !== action.payload.name);
                state.basketCount = state.books.reduce((total, book) => total + book.cartQuantity, 0);
            }
            saveStateToLocalStorage(state);
        },
        addOneBook: (state, action) => {
            state.books = state.books.map((item) => {
                if (item.name === action.payload.name) {
                    if (item.cartQuantity < action.payload.quantity) {
                        state.basketCount += 1;
                        state.totalAmount += action.payload.price;
                        item = { ...item, cartQuantity: item.cartQuantity + 1 };
                    }
                }
                return item;
            });
            saveStateToLocalStorage(state);
        },
        removeOneBook: (state, action) => {
            state.books = state.books.map((item) => {
                if (item.name === action.payload.name) {
                    if (item.cartQuantity > 0) {
                        item = { ...item, cartQuantity: item.cartQuantity - 1 };
                        state.basketCount -= 1;
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
