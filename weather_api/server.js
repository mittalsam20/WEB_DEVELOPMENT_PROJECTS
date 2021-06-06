    const express = require("express");
    const https = require("https");
    const bodyParser = require("body-parser");
    const fs = require("fs");

    const app = express();
    const port = process.env.port || 3000;

    app.set("view engine", "ejs");
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({ extended: true }));




    app.get('/', (req, res) => {

        const apikey = "437ee22a40010f2b8b8f15b171f3272";
        var api_loc = req.body.location ? req.body.location : "rajkot";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${api_loc}&appid=${apikey}d&units=metric`;


        https.get(url, (response) => {
            // console.log(response.statusCode);
            response.on("data", (data) => {
                const weather_data = JSON.parse(data);
                // console.log(weather_data);
                //temp
                const temp = weather_data.main.temp;
                const feel = weather_data.main.feels_like;
                const min = weather_data.main.temp_min;
                const max = weather_data.main.temp_max;
                //humid & pressure 
                const humid = weather_data.main.humidity;
                const press = weather_data.main.pressure;
                //wind
                const wind_speed = weather_data.wind.speed;
                const wind_degree = weather_data.wind.deg;
                //location
                const country = weather_data.sys.country;
                const loc = weather_data.name;
                //weather
                const cond = weather_data.weather[0].description;

                res.render("index", {
                    title: "WEATHER API",
                    ht_max: max,
                    ht_min: min,
                    ht_temp: temp,
                    ht_feel: feel,
                    ht_country: country,
                    ht_loc: loc,
                    ht_wind_speed: wind_speed,
                    ht_wind_degree: wind_degree,
                    ht_press: press,
                    ht_humid: humid,
                });
            });
        });
    });

    app.post('/', (req, res) => {
        console.log("Post Request Recived..!");
        const apikey = "437ee22a40010f2b8b8f15b171f3272";
        const api_loc = req.body.location ? req.body.location : "rajkot";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${api_loc}&appid=${apikey}d&units=metric`;


        https.get(url, (response) => {
            // console.log(response.statusCode);
            response.on("data", (data) => {
                const weather_data = JSON.parse(data);
                // console.log(weather_data);
                //temp
                const temp = weather_data.main.temp;
                const feel = weather_data.main.feels_like;
                const min = weather_data.main.temp_min;
                const max = weather_data.main.temp_max;
                //humid & pressure 
                const humid = weather_data.main.humidity;
                const press = weather_data.main.pressure;
                //wind
                const wind_speed = weather_data.wind.speed;
                const wind_degree = weather_data.wind.deg;
                //location
                const country = weather_data.sys.country;
                const loc = weather_data.name;
                //weather
                const cond = weather_data.weather[0].description;

                res.render("index", {
                    title: "WEATHER API",
                    ht_max: max,
                    ht_min: min,
                    ht_temp: temp,
                    ht_feel: feel,
                    ht_country: country,
                    ht_loc: loc,
                    ht_wind_speed: wind_speed,
                    ht_wind_degree: wind_degree,
                    ht_press: press,
                    ht_humid: humid,
                });
            });
        });
    });

    app.listen(port, () => {
        console.log(`Your Server Has Started at Port No:- ${port}`);
    })