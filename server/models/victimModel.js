const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    umur: {
        type: String,
        required: true,
    },
    jenisKelamin: {
        type: String,
        required: true,
    },
    idLokasi: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("victims", userSchema);
