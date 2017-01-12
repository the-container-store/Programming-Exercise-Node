var express = require("express");

var app = module.exports.app = express();
var api = module.exports.api = express();

app.use(express.static("public"));
app.use("/bootstrap", express.static("node_modules/bootstrap/dist"));
app.use("/jquery.js", express.static("node_modules/jquery/dist/jquery.js"));

app.use("/api", api)

api.get("/whereis", function(req, res) {
  var location;
  switch (req.query.q.toLowerCase()) {
    case "fill their baskets":
    case "service selection price":
    case "man in the desert":
    case "air of excitement":
      location = "in the vendor conference area (off of reception)";
      break;
    case "data central":
      location = "in the Information Systems area";
      break;
    case "perfect product presentation":
    case "main and main":
      location = "at the north end of the Information Systems area";
      break;
    case "1 great = 3 good":
    case "intuition does not come to an unprepared mind":
      location = "off the atrium, behind reception";
      break;
    case "gumby":
      location = "where gumby has always been located...c'mon!";
      break;
    case "contain yourself":
      location = "upstairs, south end, adjacent to CSD";
      break;
    case "we love our employees":
      location = "upstairs, south end, adjacent to CSD (seating area in front of Contain Yourself)";
      break;
    case "all eyes on elfa":
      location = "upstairs, southwest corner";
      break;
    case "service = selling":
    case "fun and functional":
      location = "upstairs, southwest corner, adjacent to loss prevention";
      break;
    case "communication is leadership":
      location = "upstairs, northwest corner, adjacent to the executive suite";
      break;
    case "we sell the hard stuff":
    case "blue sky":
      location = "up the stairs, turn right (adjacent to merchandising)";
      break;
    default:
      location = "somewhere, but I don't know where"
  }
  res.status(200)
    .json(location);
});

app.listen(8080);
console.log("server running at http://localhost:8080/");
