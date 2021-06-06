var weather_condition = document.getElementById("weather_img");
const temp_status = "sunny";
console.log("sss");
const get_time = () => {
    var now = new Date();
    var day = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
    var mon = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
    var hour = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    var apm = now.getHours() >= 12 ? "PM" : "AM";
    document.getElementById("date").innerHTML = `${day[now.getDay()]} | ${mon[now.getMonth()]} ${now.getDate()} | ${hour}:${now.getMinutes()} ${apm}`;
}
get_time();