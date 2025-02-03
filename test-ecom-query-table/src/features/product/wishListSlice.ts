import { createSlice, PayloadAction } from "@reduxjs/toolkit"



export interface WishListProduct {
    productId: number
}

const initialState: WishListProduct[] = []

export const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        addProductToWishList: (state, action: PayloadAction<{ productId: number }>) => {
            const existingProduct = state.find((item) => item.productId === action.payload.productId)
            if (!existingProduct) {
                 state.push({ productId:action.payload.productId })
            } 
        },
        
        removeProductFromWishList: (state, action: PayloadAction<{ productId: number }>) => {
            return state.filter((item) => item.productId !== action.payload.productId)
        }
    }
})

export const { addProductToWishList, removeProductFromWishList } = wishListSlice.actions
export default wishListSlice.reducer