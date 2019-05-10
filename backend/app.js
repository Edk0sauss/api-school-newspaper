var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var connectMango = require("connect-mongo");
var cors = require("cors");
var routesToucan = require("./routes/routesToucan");
var routesOauth = require("./routes/routesOauth");
var env = require("./.env");

var app = express();
var dbName = "toucanDB";
var connectionString = "mongodb://localhost:27017/" + dbName;

mongoose.connect(connectionString, {useNewUrlParser: true,  useCreateIndex: true });
var db = mongoose.connection;

const MongoStore = connectMango(session);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("on est connecté!");
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: env.sessionSecret,
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: true,
    saveUninitialized:true,
}));
app.use("/oauth",routesOauth);
app.use("/toucan",routesToucan);


app.set("port", process.env.PORT || 8000);

var server = app.listen(app.get("port"), function() {
    console.log("Express écoute sur le port " + server.address().port);
});
