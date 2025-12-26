const axios = require("axios");
const SoilTest = require("../models/SoilTest");

exports.analyzeSoil = async (req, res) => {
    const soilData = req.body;

    const mlResponse = await axios.post(
        `${process.env.ML_SERVICE_URL}/predict-soil`,
        soilData
    );

    const soilTest = await SoilTest.create({
        ...soilData,
        soilType: mlResponse.data.soil_type
    });

    res.json(soilTest);
};
