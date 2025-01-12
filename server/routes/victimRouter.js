const express = require("express");
const victimController = require("../controller/victimController");
const victimRouter = express.Router();

victimRouter.get("/", victimController.getAllVictim);
victimRouter.get("/:id", victimController.getOneVictim);
victimRouter.post("/", victimController.addVictim);
victimRouter.put("/:id", victimController.editVictim);
victimRouter.delete("/:id", victimController.deleteVictim);

module.exports = victimRouter;
