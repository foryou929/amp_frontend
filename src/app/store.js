import { configureStore } from '@reduxjs/toolkit'
import userSlice from "../common/userSlice";

const combinedReducer = {
    user: userSlice
}

export default configureStore({
    reducer: combinedReducer
})