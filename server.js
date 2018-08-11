var express = require("express");
var bodyParser = require("body-parser");
// var orm = require("./config/orm.js");
// var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"))
// app.use(express.static("models"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });
// app.get("/", orm.selectAll("burgers"))

// function(req, res) {
//   connection.query("SELECT * FROM burgers;", function(err, data) {
//     if (err) {
//       return res.status(500).end();
//     }

//     res.render("index", { burger_name: data });
//   });
// });

// app.post("/burger", orm.insertOne("burgers", "burger_name", req.body.burger_name))

// function(req, res) {
//   console.log(req.body.burger_name)
//   connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
//     if (err) {
//       return res.status(500).end();
//     }

//     // Send back the ID of the new todo
//     res.json({ id: result.insertId });
//     console.log({ id: result.insertId });
//   });
// });

// app.put("/burger/:id", updateOne("burgers","devoured",1,"id",req.params.id))

// function(req, res) {
//   connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server failure
//       return res.status(500).end();
//     }
//     else if (result.changedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();

//   });
// });
// require("./controllers/burgers_controller")(app);
// require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
