import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";

const store = configureStore({
    reducer: {
        // Add your reducers here
        tasks: taskSlice
    },
});
export default store;