const express = require('express');
const path = require('path');

const tasks = [
	{_id: 1, description: 'first task ', completed: false},
	{_id: 2, description: 'second task ', completed: false},
	{_id: 3, description: 'third task ', completed: false},
	{_id: 4, description: 'fourth task ', completed: false},
]

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'frontend'))

app.use(express.static(path.join(__dirname, 'frontend/static')))

app.get('/', (req, res) => {
	res.send('Root of the api');
})

//frontend pages
app.get('/taskapp', (req, res) => {
	res.render('index')
})


app.get('/updatetask/:id', (req, res) => {
	res.render('updateTask')
})

//task api routes
app.get('/api/tasks', (req, res) => {
	res.json(tasks)
})


module.exports = app;