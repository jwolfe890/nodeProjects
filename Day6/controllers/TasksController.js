var Task = require("../models/Task");

exports.addTask = function(req, res) {
  res.send("Add Task Works!");
};

exports.getTasks = function(req, res) {
  //   res.send("Get Tasks Works!");

  res.json(Task.find());
};

exports.getSingleTask = function(req, res) {
  res.send("Get Single Task Works!");
};

exports.removeTask = function(req, res) {
  res.send("Remove Task Works!");
};

exports.updateTasks = function(req, res) {
  res.send("Update Task Works!");
};

exports.markAsComplete = function(req, res) {
  res.send("Mark As Complete Works!");
};
