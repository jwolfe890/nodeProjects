var Task = function(id, title, description) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.completed = false;
};

exports.find = function() {
  return tasks;
};

exports.findById = function(id) {
  var task = null;

  for (var i in tasks) {
    if (id == tasks[i].id) {
      task = tasks[i];
      break;
    }
  }

  return task;
};

var tasks = [
  new Task(1, "Learn NodeJS", "this is to learn Node"),
  new Task(2, "Learn Mongo", "for learning mongo")
];

exports.find = function() {
  return tasks;
};

exports.save = function(data) {
  var newTask = new Task(tasks.length + 1, data.title, data.description);

  tasks.push(newTask);

  return newTask;
};
