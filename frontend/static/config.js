
function getItems() {
	return JSON.parse(localStorage.getItem('tasks'))
}

function setItems(tasks) {
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

function displayInfoMessage(message, type) {
	const messageInfo = document.querySelector('#message');
	
	messageInfo.className = '';
	if(type === 'error') {
		messageInfo.className = 'error';
	}
	messageInfo.style.display = 'block';
	messageInfo.textContent = message;
	
	setTimeout(() => {
		messageInfo.style.display = 'none';
	}, 3000)
}

const log = console.log;