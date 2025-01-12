const express = require("express");
const userController = require("../controller/userController");
const userRouter = express.Router();

userRouter.post("/login", userController.loginUser);
userRouter.post("/register", userController.registerUser);

module.exports = userRouter;
