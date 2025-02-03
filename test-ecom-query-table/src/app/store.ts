import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/product/cartSlice'
import wishlistReducer from '../features/product/wishListSlice'
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishList: wishlistReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch