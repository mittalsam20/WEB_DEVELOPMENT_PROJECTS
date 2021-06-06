    const express = require("express");
    const https = require("https");
    const fs = require("fs");

    const app = express();
    const port = process.env.port || 3000;

    app.set("view engine", "ejs");
    app.use(express.static('public'));


    app.get('/', (req, res) => {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=gandhidham&appid=437ee22a40010f2b8b8f15b171f3272d#";

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
            })
        })

        // if (req.url == '/') {
        //     requests("http://api.openweathermap.org/data/2.5/weather?q=gandhidham&appid=437ee22a40010f2b8b8f15b171f3272d")
        //         .on("data", (chunk) => {
        //             const obj = JSON.parse(chunk);
        //             //  cont arr = [obj];
        //             console.log(obj);
        //         })
        //         .on("end", (err) => {
        //             if (err);
        //             return
        //         })
        // }

        res.render("index");
    })


    app.listen(port, () => {
        console.log(`Your Server Has Started at Port No:- ${port}`)
    })