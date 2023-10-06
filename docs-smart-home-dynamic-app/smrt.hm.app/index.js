// the require is the same as import
const express = require("express");
const bodyParser = require("body-parser");
const assert = require("assert");
const path = require("path");
// kind of factory pattern or contructor function
const app = express();
const port = 8089;

// global variable for connecting to mysql based on the mysql module
const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "john",
  password: "asdf1234",
  database: "myGreetingsDB",
});

app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/main")(app);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// var http = require("http");

// http
//   .createServer(function(req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("Welcome to the mid-term application! \n\n");
//     res.write("This application must run on PORT 8089");
//     res.end();
//   })
//   .listen(8089, function() {
//     console.log("Node server is running...");
//   });
