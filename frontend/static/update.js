function init() {
	const id = location.pathname.split('/')[3];
	
	const selectedItem = getItems().find(task => task._id === id);
	
	document.querySelector('.product-id').textContent = selectedItem._id;
	document.querySelector('#update-input').value = selectedItem.description;
	document.querySelector('#complete-input').checked = selectedItem.completed;
}

init();

document.querySelector('.btn-show-tasks').addEventListener('click', () => {
	location.href = '/frontend'
})

const updateForm = document.querySelector('form');

updateForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const taskID = document.querySelector('.product-id').textContent;

	let tasks = getItems();
	let selectedItem = getItems().find(task => taskID == task._id);
	
	const description = document.querySelector('#update-input').value;
	const completed = document.querySelector('#complete-input').checked;
	
	
	selectedItem = {...selectedItem, description, completed};
	
	const newTasks = tasks.map(task => {
		if(task._id !== selectedItem._id) {
			return task
		}
		return selectedItem
	})
	
	setItems(newTasks)
	
})
