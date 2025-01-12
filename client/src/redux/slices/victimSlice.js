import { createSlice } from "@reduxjs/toolkit";

const victimSlice = createSlice({
    name: "victim",
    initialState: {
        victims: [],
        victim: {
            nama: "",
            jenisKelamin: "",
            umur: "",
            idLokasi: "",
        },
    },
    reducers: {
        setVictims: (state, action) => {
            state.victims = action.payload;
        },
        setVictim: (state, action) => {
            state.victim = action.payload;
        },
    },
});

export const { setVictims, setVictim } = victimSlice.actions;
export default victimSlice.reducer;
