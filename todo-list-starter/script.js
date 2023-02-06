let todoTasksText = [
    "Buy milk",
    "Eat dinner",
    "Nail JS",
];

let todoTasksStatus = [false, false, false];

//Grab the "ul" element
let todoList = document.getElementById("todo-list");

function createNewTaskElement(task, index) {

    // Create a new <p> element and set the text of the new <p> element
    let newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    //Mark the task as complete if status is true
    if (todoTasksStatus[index] === true) {
        newTodoTaskTextElement.classList.add("complete");
}

    //create a new <li> element and append the <p> element to it
    let newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    //Create a new <button> element and append it to the <li> element
    let completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function() {
    toggleComplete(index);
}
newTodoTaskElement.appendChild(completeButtonElement);

return newTodoTaskElement;

}

function addTask() {

    let newTask = document.getElementById("new-task-text")
    if(newTask.value) {
        todoTasksText.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = "";
        updateTodoList();
    }

    let dueToDoTask = document.getElementById("due-task-text")
    if(dueToDoTask.value) {
        todoTasksText.push(newTask.value);
        todoTasksStatus.push(false);
        dueToDoTask.value = "";
        updateTodoList();
    }
}

function updateTodoList() {
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    // Loop through the toDoTasksText array
    todoTasksText.forEach((task, index)=> {
        let newTodoTaskElement = createNewTaskElement(task,index);
        //Append the <li> element to the <ul> element
        todoList.appendChild(newTodoTaskElement);

    });
}

function createNewTodoItemElement(todoItem, index) {}

function toggleComplete(index) {
    if (todoTasksStatus[index] === false) {
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    updateTodoList();
}

updateTodoList()