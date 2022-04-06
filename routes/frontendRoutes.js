const Router = require('express').Router();


Router.route('/')
.get((req, res) => {
	res.render('index')
})

Router.route('/updatetask/:id')
.get((req, res) => {
	res.render('updateTask')
})

module.exports = Router;




