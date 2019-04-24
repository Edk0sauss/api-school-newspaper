var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var routesToucan = require("./routes/routesToucan");

var app = express();
var dbName = "toucanDB";
var connectionString = "mongodb://localhost:27017/" + dbName;

mongoose.connect(connectionString, {useNewUrlParser: true});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("on est connecté!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api",routesToucan);


app.set("port", process.env.PORT || 8000);

var server = app.listen(app.get("port"), function() {
    console.log("Express écoute sur le port " + server.address().port);
});
