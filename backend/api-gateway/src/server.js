require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

app.listen(process.env.PORT, () =>
    console.log(`API running on port ${process.env.PORT}`)
);
