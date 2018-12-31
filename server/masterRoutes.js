const WeatherCtrl = require("./controllers/WeatherCtrl");
module.exports = app => {
    app.get("/api/WeatherCtrl/getDallasDailyForcast/:unitOfMeasure", WeatherCtrl.getDallasDailyForcast);
}