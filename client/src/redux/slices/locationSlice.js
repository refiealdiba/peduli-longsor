import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: "location",
    initialState: {
        locations: [],
        location: {
            kota: "",
            provinsi: "",
            tanggal: "",
        },
    },
    reducers: {
        setLocations: (state, action) => {
            state.locations = action.payload;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
    },
});

export const { setLocations, setLocation } = locationSlice.actions;
export default locationSlice.reducer;
