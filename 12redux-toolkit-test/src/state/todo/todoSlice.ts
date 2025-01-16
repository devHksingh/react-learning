import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
})

interface TodoState {
    data: Array<{
        userId: number;
        id: number;
        title: "string";
        completed: boolean
    }>;
    status: "idle" | "error" | "loading"
}

const initialState:TodoState={
    data:[],
    status:STATUS.IDLE
}

export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
    console.log("fetch todos");
    
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log("fetch todos",data);
    
    return data;
});

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        updateTodo: (state, action) => {
            const {  payload } = action;
            console.log(payload);
            const {id,completed} = payload
            
            state.data = state.data.map((todo)=>
            todo.id === id? {...todo,completed}:todo)
            // switch (type) {
            //     case "update": {
            //          state.data = state.data.map((item) =>
            //             item.id === id
            //                 ? { ...item, completed }
            //                 : item
            //         );
            //         break;
            //     }
            //     case "remove": {
            //         state.data = state.data.filter((item) => item.id !== payload.id);
            //         break;
            //     }
            //     default:
            //         return state;
            // }
        },
        removeTodo:(state,action) =>{
            const {id} =action.payload
            state.data= state.data.filter((todo)=>todo.id !== id)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUS.IDLE;
            })
            .addCase(fetchTodos.rejected, (state) => {
                state.status = STATUS.ERROR;
            });
    },
});

// export const fetchTodos = createAsyncThunk('todos/fetch', async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const data = await res.json()
//     return data
// })

export const { updateTodo,removeTodo } = todoSlice.actions
export default todoSlice.reducer