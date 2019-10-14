var express = require("express");
var router = express.Router();

var TasksController = require("../controllers/TasksController");

router.get("/", TasksController.getTasks);

router.get("/:id", TasksController.getSingleTask);

router.post("/", TasksController.addTask);

router.put("/:id", TasksController.updateTasks);

router.delete("/:id", TasksController.removeTask);

router.patch("/:id/complete", TasksController.markAsComplete);

module.exports = router;
