import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slice/slice";

const store = configureStore({
    reducer: {
        // 여기에 slice
        book : bookReducer
    }
})

export default store;