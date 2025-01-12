import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slices/locationSlice";
import victimReducer from "./slices/victimSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
    reducer: {
        location: locationReducer,
        victim: victimReducer,
        auth: authReducer,
    },
});
console.log("ON CREATE STRORE", store.getState());

store.subscribe(() => {
    console.log("STORE CHANGE:", store.getState());
});

export default store;
