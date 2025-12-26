const soilRoutes = require("./routes/soil.routes");
app.use("/api/soil", soilRoutes);

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

module.exports = app;
