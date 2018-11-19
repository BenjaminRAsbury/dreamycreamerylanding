var express = require("express");
var app = express();

//Config
app.set("view engine", "ejs");
app.use(express.static("public"));


//Routes
app.get("/", (req, res) => {
	res.render("landing");
});

app.get("/team", (req, res) => {
	res.render("team");
});

app.get("/contact", (req, res) => {
	res.render("contact");
});

//Server
app.listen(3000, () => {
	console.log("Personal Site v3 is Running");
});
