import { createSlice } from '@reduxjs/toolkit'

// type
// 0 for none
// 1 for success
// 2 for warning
// 3 for danger

export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        type: 0,
        content: ""
    },
    reducers: {
        success: (state, action) => {
            state.type = 1;
            state.content = action.payload;
        },
        warning: (state, action) => {
            state.type = 2;
            state.content = action.payload;
        },
        danger: (state, action) => {
            state.type = 3;
            state.content = action.payload;
        },
        clear: (state, action) => {
            state.type = 0;
        }
    }
})

export const { success, warning, danger, clear } = messageSlice.actions

export default messageSlice.reducer