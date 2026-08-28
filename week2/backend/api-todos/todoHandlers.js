const ToDo = require('./todoLib');

const getAllTodos = (req, res) => {
    const todo = ToDo.getAll();
    res.json(todo);
};

const createTodo = (req, res) => {
    const { task, completed, dueDate } = req.body;

    const newTodo = ToDo.addOne(task, completed, dueDate);

    if (newTodo){
        res.json(newTodo);
    } else {
        res.status(500).json({message: "Failed to add now ToDo"})
    }

};

const getTodoById = (req, res) => {
    const todoId = req.params.todoId;
    const todo = ToDo.findById(todoId);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: 'ToDo not found' });
    }
};

const updateTodo = (req, res) => {
    const todoId = req.params.todoId;
    const { task, completed, dueDate } = req.body;
    const updatedTodo = ToDo.updateOneById(todoId, { task, completed, dueDate });

    if (updatedTodo) {
        res.json(updatedTodo);
    } else {
        res.status(404).json({ message: 'ToDo not found' });
    }
};

const deleteTodo = (req, res) => {
    const todoId = req.params.todoId;
    const isDeleted = ToDo.deleteOneById(todoId);

    if(isDeleted){
        res.json({ message: "ToDo deleted successfully" });
    } else {
        res.status(404).json({ message: "ToDo not found" });
    }
    
};

module.exports = {
    getAllTodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo,
};