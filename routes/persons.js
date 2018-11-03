const route = require('express').Router();
const db = require('../db');

route.get('/', (req, res) => {
    db.person.findAll()
    .then((data) => {
    res.send(data);
})
.catch(err => {
    res.send("Could not get all todos!")
})
})

route.post('/', (req, res) => {
    db.person.create({
    name: req.body.name,
    title: req.body.title
})
    .then((data) => {
    res.send(data)
})
.catch(err => {
    res.send("Could not create product!")
})
})
module.exports = route;