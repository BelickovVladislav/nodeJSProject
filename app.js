const express = require('express');
/*
* bodyParser нужен для того чтобы слушать POST-запросы, без него не работает 
* установка: npm install body-parser --save
*/
var bodyParser = require("body-parser");
const app = express();


const todoBase = require("./todos")

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/todos', function (req, res) {
    const todo = req.body;
    todo.id = todoBase.genId();
    todoBase.addTodo(todo);
    res.json(todo);
});

app.get('/api/todos', function (req, res) {
    const todos = todoBase.getTodos()
    res.json(todos);
});



app.delete('/api/todos/:id', function (req, res) {
    const todoId = req.params.id;
    todoBase.deleteTodo(todoId);
    res.json({ message: "Deleted!" })

});

app.put('/api/todos/:id', function (req, res) {
    const todoId = req.params.id;
    const todo = todoBase.changeTodoStatus(todoId);
    res.json(todo);

});
app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});