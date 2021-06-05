//jshint esversion:6

const exp = require("express");
const bp = require("body-parser");
const app = exp();

app.use(bp.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(exp.static(__dirname + "/public"));

var listnumber = 0;
var ob = [];
var index = 0;

function List(list_name, list_item, listitems = []) {
    this.list_name = list_name;
    this.list_item = list_item;
    this.list_items = listitems.push(list_item);

}
ob[0] = new List("school", "learn react", ["a", "b"]);
console.log(ob[0].list_name);
console.log(ob[0].list_item);
console.log(ob[0].list_items[1]);
app.get("/", function(req, res) {
    if (listnumber < 2) {
        res.render("first", { disp_listnumber: listnumber });
    } else {
        res.render("listall", { disp_listnumber: listnumber });
    }
});
app.post("/", function(req, res) {
    res.render("first", { disp_listname: req.body.listname })
})

app.get("/listname", function(req, res) {
    res.render("index", { disp_list_name: ob[0].list_name, disp_list_items: ob[0].list_item, disp_items: ob[0].list_items, disp_lists: ob.length });
});
app.post("/listname", function(req, res) {

    function create_list() {
        for (var i = 0; i < ob.length; i++) {
            ob.push(new List(req.body.listname));
        }
    }
    create_list();
    res.render("index", { disp_list_name: ob[0].list_name, disp_list_items: ob[0].list_item, disp_items: ob[0].list_items, disp_lists: ob.length });
});

app.listen(3000, function(req, res) {
    console.log("YOUR SERVER HAS STARTED RUNNING ON PORT 3000:");
});