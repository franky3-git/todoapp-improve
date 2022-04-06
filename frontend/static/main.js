const taskForm = document.querySelector('form');
const taskContainer = document.querySelector('.tasks-container');


displayTasks()

taskForm.addEventListener('submit', (e) => {
	e.preventDefault();
	log('form submitted')
	const inputTask = document.getElementById('input-task')
	if(!inputTask.value) {
		return displayInfoMessage('you should enter something as a description', 'error')
	}
	
	const newTask = {description: inputTask.value, completed: false, _id: new Date().getTime().toString()};
	displayInfoMessage('task added')
	
	let tasks = getItems() || [];
	
	tasks.push(newTask)
	setItems(tasks)
	displayTasks()
	inputTask.value = '';
})


function displayTasks() {
	taskContainer.innerHTML = '';
	taskContainer.appendChild(createTask())
}

function createTask () {
	const df = new DocumentFragment();
	
	let tasks = getItems() || [];
	
	tasks.forEach(task => {
		const li = document.createElement('li');
		li.className = 'task';
		li.id = 'task-' + task._id;
		const descriptionTask = document.createElement('span');
		descriptionTask.textContent = task.description;
		descriptionTask.className = 'task-description'
		
		const btnsContainer = document.createElement('div');
		btnsContainer.className ='btns';
		
		const btnUpdate = document.createElement('a');
		btnUpdate.href = '/updatetask';
		btnUpdate.textContent = 'updt';
		
		//add an event listener to the update button
		btnUpdate.addEventListener('click', goUpdate)
		
		const btnDelete = document.createElement('a');
		btnDelete.href = '#';
		btnDelete.textContent = 'del';
		
		//add an event listener to the delete button
		btnDelete.addEventListener('click', deleteTask)
		
		btnsContainer.append(btnUpdate, btnDelete)
		

		li.appendChild(descriptionTask)
		li.appendChild(btnsContainer)
		df.appendChild(li)
	})
	
	return df;
}

function goUpdate(e) {
	e.preventDefault();
	const id = e.target.parentElement.parentElement.id.split('-')[1];
	log(id);
	const selectedTask = getItems().find(task => task._id == id);
	if(!selectedTask) {
		return displayInfoMessage('You have not selected a valid task', 'error');
	}
	log(selectedTask)
	location.href = '/frontend/updatetask/' + id ;
}

function deleteTask(e) {
	e.preventDefault();

	const id = e.target.parentElement.parentElement.id.split('-')[1];
	log(id);
	const tasks = getItems().filter(task => task._id !== id)
	setItems(tasks)
	displayTasks()
}








