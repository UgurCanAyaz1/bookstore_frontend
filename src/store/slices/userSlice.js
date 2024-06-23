import { createSlice } from "@reduxjs/toolkit";

// Action to save current state
const saveStateToLocalStorage = (state) => {
    localStorage.setItem('user', JSON.stringify(state));
};

// Action to load state from localStorage
const loadStateFromLocalStorage = () => {
    const stateStr = localStorage.getItem('user');
    return stateStr ? JSON.parse(stateStr) : { username: "", authToken: "", authenticateResult: false };
};

// Get stored initial values from local storage for redux
const initialState = loadStateFromLocalStorage();

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        // Action to be used for login operation, setting parameters with values received from action.payload
        SlicerLogin: (state, action) => {
            console.log("action.payload:",action.payload)
            state.authToken = action.payload.authToken;
            state.username = action.payload.username;
            state.authenticateResult = action.payload.authenticateResult;
            saveStateToLocalStorage(state);
        },

        // Action to be used for log out operation, setting parameters to null
        SlicerLogout: (state) => {
            state.username = "";
            state.authToken = "";
            state.authenticateResult = false;
            saveStateToLocalStorage(state);
        }
    }
});

export const { SlicerLogin, SlicerLogout } = userSlice.actions;
export default userSlice.reducer;
