import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice'
import favReducer from './slices/favSlice'
import detailReducer from './slices/detailSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        detail: detailReducer,
        fav: favReducer,
    },
});

export default store;
