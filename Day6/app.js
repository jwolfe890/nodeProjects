var express = require("express");

var tasksRouter = require("./routes/tasks");
var authRouter = require("./routes/auth");

var app = express();

app.use("/tasks", tasksRouter);
app.use("/", authRouter);

// server.listen(4200, function() {
//   console.log("Server started!");
// });

module.exports = app;

// var server = http.createServer(app);

// var server = http.createServer(app);
// var http = require("http");
// app.use(express.static("public"));
