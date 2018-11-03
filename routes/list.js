const route = require('express').Router();
const db = require('../db');

route.get('/', (req, res) => {
    db.todos.findAll()
    .then((data) => {
    res.send(data);
})
.catch(err => {
    res.send("Could not get all todos!")
})
})

route.post('/', (req, res) => {
    db.todos.create({
    task_person: req.body.task_person,
    task_title: req.body.task_title,
    status: req.body.status
})
    .then((data) => {
    res.send(data)
})
.catch(err => {
    res.send("Could not create product!")
})
})
module.exports = route;