import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../state/counter/counterSlice'
import todoReducer from '../state/todo/todoSlice'
import postsReducer from '../state/posts/postsSlice'

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer,
        posts:postsReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch