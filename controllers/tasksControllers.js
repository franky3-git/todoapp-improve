let tasks = [
	{_id: 1, description: 'first task ', completed: false},
	{_id: 2, description: 'second task ', completed: false},
	{_id: 3, description: 'third task ', completed: false},
	{_id: 4, description: 'fourth task ', completed: false},
	{_id: 5, description: 'fifth task ', completed: false},
]

const getAllTasks = (req, res) => {
	res.json({status: 'success', data:tasks})
}

const createTask = (req, res) => {
	if(!req.body.description) {
		return res.status(400).json({status: 'failed', message: 'Bad request enter a description'})
	}
	const newTask = {...req.body, _id: new Date().getTime().toString()}
	tasks.push(newTask);
	console.log(tasks)
	res.status(201).json({status: 'success', data: 'task added'})
}

const getOneTask = (req, res) => {
	const {id} = req.params;
	const selectedTask = tasks.find(task => task._id == id);
	if(!selectedTask) {
		return res.status(404).json({status: 'failed', message: 'this task does not exist'})
	}
	res.status(200).json({status: 'success', data: selectedTask})
}

const deleteTask = (req, res) => {
	const {id} = req.params;
	const selectedTask = tasks.find(task => task._id == id);
	if(!selectedTask) {
		return res.status(404).json({status: 'failed', message: 'No such task in the list of tasks'})
	}
	tasks = tasks.filter(task => task._id != id)
	console.log(tasks)
	res.status(200).json({status: 'success', data: 'task deleteted'})
}

const updateTask = (req, res) => {
	const { id } = req.params;
	let selectedTask = tasks.find(task => task._id == id);
	
	if(!selectedTask) {
		return res.status(404).json({status: 'failed', message: 'this task does not exist'})
	}
	
	if(!req.body.description) {
		return res.status(404).json({status: 'failed', message: 'you have not change something'})
	}
	
	const description = req.body.description;
	const completed = req.body.completed;
	
	
	selectedTask = {...selectedTask, description, completed};
	
	const newTasks = tasks.map(task => {
		if(task._id !== selectedTask._id) {
			return task
		}
		return selectedItem
	})
							   
	task = newTasks;
	console.log(tasks)
	res.status(200).json({status: 'success', data: 'task updated'})
	
}


module.exports = {getAllTasks, createTask, getOneTask, updateTask, deleteTask}

