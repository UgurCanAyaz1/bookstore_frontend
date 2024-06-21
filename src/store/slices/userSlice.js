import { createSlice } from "@reduxjs/toolkit";

// Function to save current state
const saveStateToLocalStorage = (state) => {
    localStorage.setItem('user', JSON.stringify(state));
    console.log(state)
};

// Function to load state from localStorage
const loadStateFromLocalStorage = () => {
    const stateStr = localStorage.getItem('user');
    return stateStr ? JSON.parse(stateStr) : { username: "", authToken: "", authenticateResult: false };
};

const initialState = loadStateFromLocalStorage();
console.log('Initial User State:', initialState);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        SlicerLogin: (state, action) => {
            console.log("action.payload:",action.payload)
            state.authToken = action.payload.authToken;
            state.username = action.payload.username;
            state.authenticateResult = action.payload.authenticateResult;
            saveStateToLocalStorage(state);
        },
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
