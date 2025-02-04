import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface CartItem {
    productId: number,
    quantity: number,
}

const initialState: CartItem[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeCartProduct: (state, action: PayloadAction<{ productId: number }>) => {
            return state.filter((item) => item.productId !== action.payload.productId)
        },
        addCartProduct: (state, action: PayloadAction<{ productId: number }>) => {
            const existingProduct = state.find((item) => item.productId === action.payload.productId)
            if (existingProduct) {
                existingProduct.quantity += 1
            } else {
                state.push({ productId: action.payload.productId, quantity: 1 })
            }
        },
        removeProductQuantity:(state,action:PayloadAction<{ productId: number }>)=>{
            const existingProduct = state.find((item)=>item.productId === action.payload.productId)
            if(existingProduct){
                const quantity = existingProduct.quantity
                if(quantity===1){
                    return state.filter((item)=>item.productId !== action.payload.productId)
                }else if(quantity >1){
                    existingProduct.quantity -=1
                }
            }
        },
        clearCart: () => {
            return []
        }
    }

})

export const { addCartProduct, clearCart, removeCartProduct,removeProductQuantity } = cartSlice.actions

export default cartSlice.reducer