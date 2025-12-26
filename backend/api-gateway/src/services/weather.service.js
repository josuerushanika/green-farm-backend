const fetch = require("node-fetch");

exports.getWeather = async (location) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=API_KEY`;
    const res = await fetch(url);
    return res.json();
};
