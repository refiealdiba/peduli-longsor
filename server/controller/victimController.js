const victimModel = require("../models/victimModel");

const getAllVictim = async (req, res) => {
    try {
        const victims = await victimModel.find();
        res.status(200).json(victims);
    } catch (e) {
        res.status(401).json({ message: e });
    }
};

const getOneVictim = async (req, res) => {
    try {
        const id = req.params.id;
        const victim = await victimModel.findById(id);
        res.status(200).json(victim);
    } catch (e) {
        res.status(401).json({ message: e });
    }
};

const addVictim = async (req, res) => {
    try {
        const victim = new victimModel(req.body);
        const newVictim = await victim.save();
        res.status(200).json(newVictim);
    } catch (e) {
        res.status(401).json({ message: e });
    }
};

const editVictim = async (req, res) => {
    try {
        const id = req.params.id;
        const victim = await victimModel.findByIdAndUpdate(id, req.body);
        res.status(200).json(victim);
    } catch (e) {
        res.status(401).json({ message: e });
    }
};

const deleteVictim = async (req, res) => {
    try {
        const id = req.params.id;
        const victim = await victimModel.findByIdAndDelete(id);
        res.status(200).json(victim);
    } catch (e) {
        res.status(401).json({ message: e });
    }
};

module.exports = {
    getAllVictim,
    addVictim,
    editVictim,
    deleteVictim,
    getOneVictim,
};
