const express = require("express");
const locationController = require("../controller/locationController");
const locationRouter = express.Router();

locationRouter.get("/", locationController.getAllLocation);
locationRouter.get("/:id", locationController.getOneLocation);
locationRouter.post("/", locationController.addLocation);
locationRouter.put("/:id", locationController.editLocation);
locationRouter.delete("/:id", locationController.deleteLocation);

module.exports = locationRouter;
