console.log('update page')

console.log(location.pathname)

function init() {
	const id = location.pathname.split('/')[2];
	
	const selectedItem = getItems().find(task => task._id === id);
	
	document.querySelector('.product-id').textContent = selectedItem._id;
	document.querySelector('#update-input').value = selectedItem.description;
	document.querySelector('#complete-input').checked = selectedItem.completed;
}

init();

document.querySelector('.btn-show-tasks').addEventListener('click', () => {
	location.href = '/taskapp'
})
