const express = require("express");
const router = express.Router();
const soilController = require("../controllers/soil.controller");

router.post("/analyze", soilController.analyzeSoil);

module.exports = router;
