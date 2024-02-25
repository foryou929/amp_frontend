import { configureStore } from '@reduxjs/toolkit'
import userSlice from "../common/userSlice";
import messageSlice from "../common/messageSlice";

const combinedReducer = {
    user: userSlice,
    message: messageSlice
}

export default configureStore({
    reducer: combinedReducer
})