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

// interface Action {
//     type: "update" | "remove";
//     payload: {
//         completed?: boolean,
//         id?: number
//     }
// }

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
            const { type, payload } = action;
            switch (type) {
                case "update": {
                    state.data = state.data.map((item) =>
                        item.id === payload.id
                            ? { ...item, completed: payload.completed }
                            : item
                    );
                    break;
                }
                case "remove": {
                    state.data = state.data.filter((item) => item.id !== payload.id);
                    break;
                }
                default:
                    return state;
            }
        },
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

export const { updateTodo } = todoSlice.actions
export default todoSlice.reducer