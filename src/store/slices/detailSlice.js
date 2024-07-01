import { createSlice } from "@reduxjs/toolkit";

// Action to save current state
const saveStateToLocalStorage = (state) => {
    localStorage.setItem('detail', JSON.stringify(state));
};

// Action to load state from localStorage
const loadStateFromLocalStorage = () => {
    const stateStr = localStorage.getItem('detail');
    return stateStr ? JSON.parse(stateStr) : { bookid:'' };
};

// Get stored initial values from local storage for redux
const initialState = loadStateFromLocalStorage();

export const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {

        // Action to be used for login operation, setting parameters with values received from action.payload
        getdetailId: (state, action) => {
            console.log("action.payload:",action.payload)
            state.bookid=action.payload
            saveStateToLocalStorage(state);
        }
    }
});

export const { getdetailId } = detailSlice.actions;
export default detailSlice.reducer;
