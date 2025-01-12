const locationModel = require("../models/locationModel");

const getAllLocation = async (req, res) => {
    try {
        const locations = await locationModel.find();
        res.status(200).json(locations);
    } catch (e) {
        res.status(401).json({ message: e });
    }
};

const getOneLocation = async (req, res) => {
    try {
        const id = req.params.id;
        const location = await locationModel.findById(id);
        res.status(200).json(location);
    } catch (e) {
        res.status(401).json({ message: e });
    }
};

const addLocation = async (req, res) => {
    try {
        const location = new locationModel(req.body);
        const newLocation = await location.save();
        res.status(200).json(newLocation);
    } catch (e) {
        res.status(401).json({ message: e });
    }
};

const editLocation = async (req, res) => {
    try {
        const id = req.params.id;
        const location = await locationModel.findByIdAndUpdate(id, req.body);
        res.status(200).json(location);
    } catch (e) {
        res.status(401).json({ message: e });
    }
};

const deleteLocation = async (req, res) => {
    try {
        const id = req.params.id;
        const location = await locationModel.findByIdAndDelete(id);
        res.status(200).json(location);
    } catch (e) {
        res.status(401).json({ message: e });
    }
};

module.exports = {
    getAllLocation,
    getOneLocation,
    addLocation,
    editLocation,
    deleteLocation,
};
