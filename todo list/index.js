//jshint esversion:6

const exp = require("express");
const bp = require("body-parser");
const app = exp();

app.use(bp.urlencoded({ extended: true }));
app.set("view engine", "ejs");
var itemlist = [];
app.get("/", function(req, res) {
    res.render("index", { dispitem: itemlist });
});

app.post("/", function(req, res) {
    itemlist.push(req.body.newitem);
    res.render("index", { dispitem: itemlist });
});

app.listen(3000, function(req, res) {
    console.log("YOUR SERVER HAS STARTED RUNNING ON PORT 3000:");
});