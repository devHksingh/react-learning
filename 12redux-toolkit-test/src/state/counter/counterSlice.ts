import { createSlice } from "@reduxjs/toolkit"

interface CounterSatae{
    value:number
}

const initialState:CounterSatae = {
    value:0
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        addBy1:(state)=>{
            state.value +=1
        },
        removeBy1:(state)=>{
            state.value -=1
        }
    }
})

export const {addBy1,removeBy1} = counterSlice.actions

export default counterSlice.reducer