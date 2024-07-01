import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice'
import detailReducer from './slices/detailSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        detail: detailReducer,
        
    },
});

export default store;
