var Task = require("../models/Task");

exports.addTask = function(req, res) {
  var newTask = Task.save(req.body);
  res.json(newTask);

  res.send("Add Task Works!");
};

exports.getTasks = function(req, res) {
  //   res.send("Get Tasks Works!");

  var tasks = Task.find();

  res.json(tasks);
};

exports.getSingleTask = function(req, res) {
  console.log(req.params);

  var id = req.params.id;
  var task = Task.findById(id);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ msg: "Task not found" });
  }
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
