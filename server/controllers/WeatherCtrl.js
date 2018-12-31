const axios = require("axios");
const API_KEY = process.env.DARK_SKY_API_KEY;
const DARK_SKY_BASE_URL = process.env.DARK_SKY_BASE_URL;
const API_RESTRICTIONS = ["minutely","hourly","alerts","flags"];
const DALLAS = {
    latitude:"32.89748",
    longitude: "-97.040443"
}

/**
 * Returns weather forcast resposne for Dallas
 * @param {request} req
 * @param {response} res
 * @returns {Object}
 */
async function getDallasDailyForcast (req, res) {
    let response;
    let unitOfMeasure = req.params.unitOfMeasure;
    try {
        response = await _getDallasDailyForcastFromExternalApi(unitOfMeasure);
    }
    catch(error) {
        console.error(error);
        return res.status(500).send("Unable to fetch weather for dallas.");
    }
    return res.status(200).send(response.data);
}
/**
 * Returns weather promise for Dallas from the Dark Sky Api.
 * @param {string} unitOfMeasure
 * @returns {Promise}
 */
function _getDallasDailyForcastFromExternalApi(unitOfMeasure) {
    return axios.get(`${DARK_SKY_BASE_URL}/${API_KEY}/${DALLAS.latitude},${DALLAS.longitude}?exclude=${API_RESTRICTIONS.join(",")}&units=${unitOfMeasure}`);
}

const WeatherCtrl = {
    getDallasDailyForcast:getDallasDailyForcast
}
module.exports = WeatherCtrl;