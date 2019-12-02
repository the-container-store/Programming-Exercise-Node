
var express = require("express");
var conferenceRooms = require("./room_modules/conferenceRooms");


var app = module.exports.app = express();
var api = module.exports.api = express();



app.use(express.static("public"));
app.use("/bootstrap", express.static("node_modules/bootstrap/dist"));
app.use("/jquery.js", express.static("node_modules/jquery/dist/jquery.js"));

app.use("/api", api)

api.get("/whereis", conferenceRooms.whereisGet);

//app.get("/locations", rooms.locationsGet);

app.listen(8080);
console.log("server running at http://localhost:8080/");


