import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: {
            username: "",
            password: "",
        },
    },
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload;
        },
    },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
