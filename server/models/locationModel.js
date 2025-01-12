const mongoose = require("mongoose");

const locationModel = mongoose.Schema({
    kota: {
        type: String,
        required: true,
    },
    provinsi: {
        type: String,
        required: true,
    },
    tanggal: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("locations", locationModel);
