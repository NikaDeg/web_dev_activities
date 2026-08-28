// {
//     "task": "Buy groceries",
//     "completed": false,
//     "dueDate": "2025-08-30"
// }
 //, deleteOneById) 

let todosArray = [];
let nextId = 1;

function addOne(task, completed, dueDate) {
    // Check if any parameter is empty or undefined
    if (!task || !completed || !dueDate) {
        return false;
    }

    const todoNew = {
        id: nextId++,
        task,
        completed,
        dueDate
    };

    todosArray.push(todoNew); // Adds the new todo to the array
    return todoNew; // Returns the added todo object

} 

function getAll(){
    return todosArray;
}

function findById(id) {
    let numID = Number(id);
    let todo = todosArray.find(item => item.id === numID);
    return todo || false; 
}

function updateByOneId(id, updatedData) {
    const todo = findById(id);
    if (todo) {
        // Update properties only if they are provided in updatedData
        if (updatedData.task) todo.task = updatedData.task;
        if (updatedData.completed) todo.completed = updatedData.complited;
        if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
        return todo; // Returns the updated car object
    }
    return false; // Returns false if the car with the provided ID is not found
}

function deleteOneById(id) {
    const todo = findById(id);
    if (todo){
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(todo => todo.id !== Number(id)); 
        return todosArray.length < initialLength; 
    }
    return false;

}

if (require.main === module) {
    
    let result = addOne("buy smth", 'false', "26.08.26");
    console.log(result);
    result = addOne("read a book", 'false', "14.08.26");
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateByOneId(1, { task: "sell smth", completed: 'true' }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}

const ToDos = {
    getAll,
    addOne,
    findById,
    updateByOneId,
    deleteOneById
};


module.exports = ToDos;

    

