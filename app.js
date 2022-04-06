const express = require('express');
const path = require('path');
const frontendRoutes = require('./routes/frontendRoutes')
const tasksRoutes = require('./routes/tasksRoutes');


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
app.use('/frontend', frontendRoutes)

//task api routes
app.use('/api/tasks', tasksRoutes)



module.exports = app;