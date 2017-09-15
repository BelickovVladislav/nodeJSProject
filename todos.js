
let todos = [
    { id: "1", name: "shirt", done: true },
    { id: "2", name: "jeans", done: false },
    { id: "3", name: "shorts", done: true },
    { id: "4", name: "cap", done: false },
    { id: "5", name: "sneakers", done: true }
];
const todoActions = {
    getTodos: function () {
        return todos;
    },
    getTodo: function (id) {
        return todos.find(function (todo) {
            return todo.id == id;
        });
    },
    addTodo: function (todo) {
        todo.done = JSON.parse(todo.done);
        return todos.push(todo);
    },
    changeTodoStatus: function (id) {
        const todo = todos.find(function (todo) {
            return todo.id == id;
        });
        todo.done = !todo.done;
        return todo;
    },
    deleteTodo: function (id) {
        todos = todos.filter(function (todo) {
            return todo.id != id;
        });

    },
    genId: function () {
        return todos.length > 0 ? parseInt(todos[todos.length - 1].id) + 1 : 1;
    }
};
module.exports = todoActions;
