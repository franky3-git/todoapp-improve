const Router = require('express').Router();
const {getAllTasks, createTask, getOneTask, updateTask, deleteTask} = require('../controllers/tasksControllers');

Router.route('/')
.get(getAllTasks)
.post(createTask)

Router.route('/:id')
.get(getOneTask)
.put(updateTask)
.delete(deleteTask)

module.exports = Router;










