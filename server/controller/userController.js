const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Register new user
const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const foundUser = await userModel.findOne({ username: username });
        if (foundUser) {
            return res.json({ message: "Username already registered" });
        } else {
            const user = new userModel({
                username: username,
                password: password,
            });
            const newUser = await user.save();
            res.json(newUser);
        }
    } catch (e) {
        res.status(401).json({ message: e });
    }
};

// Login user
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username: username });

    if (user && password === user.password) {
        const token = jwt.sign(
            {
                user: {
                    id: user._id,
                    username: user.username,
                },
            },
            process.env.JWT_SECRET
        );
        res.status(200).json(token);
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
};

module.exports = {
    loginUser,
    registerUser,
};
