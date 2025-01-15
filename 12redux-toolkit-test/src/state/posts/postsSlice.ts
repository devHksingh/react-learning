import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
})

interface Posts {
    data: Array<{
        userId: number,
        id: number,
        title: string,
        body: string
    }>;

    status: "idle" | "error" | "loading"
}

const initialState: Posts = {
    data: [],
    status: "idle"
}

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        updatePosts: (state, action) => {
            const { id, title, body } = action.payload;
            const existingPost = state.data.find((item) => item.id === id);
            if (existingPost) {
                existingPost.title = title ?? existingPost.title;
                existingPost.body = body ?? existingPost.body;
            }
        },
        removePost: (state, action) => {
            const { id } = action.payload;
            state.data = state.data.filter((item) => item.id !== id);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = STATUSES.LOADING
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUSES.IDLE
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.status = STATUSES.ERROR
            })
    }
})

export const { updatePosts, removePost } = postsSlice.actions
export default postsSlice.reducer