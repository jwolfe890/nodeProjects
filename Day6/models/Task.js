var Task = function(id, title, description) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.completed = false;
  this.date = new Date();
};

var tasks = [
  new Task(1, "Learn NodeJS", "this is to learn Node"),
  new Task(2, "Learn Mongo", "for learning mongo")
];

exports.find = function() {
  return tasks;
};
