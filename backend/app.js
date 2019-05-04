var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var routesToucan = require("./routes/routesToucan");

var app = express();
var dbName = "toucanDB";
var connectionString = "mongodb://localhost:27017/" + dbName;

mongoose.connect(connectionString, {useNewUrlParser: true,  useCreateIndex: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("on est connecté!");
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/toucan",routesToucan);


app.set("port", process.env.PORT || 8000);

var server = app.listen(app.get("port"), function() {
    console.log("Express écoute sur le port " + server.address().port);
});
