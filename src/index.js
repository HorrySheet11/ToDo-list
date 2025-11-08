import './style.css';
import { ToDo } from './toDo.js'
import { openToDoItem } from './openToDoItem.js'


try {
    console.log('script loaded');
    ToDo;
} catch (error) {
    console.log(error);
}

let toDoList = document.querySelector('.toDo-list');

const toDoDialog = document.getElementById('add-toDo-dialog');
const submitButton = document.getElementById('submit');

const form = document.querySelector('form');
const inputValues = {};
const inputs = document.querySelectorAll('input[name="title"], input[name="dueDate"], textarea[name="description"], select[name="priority"]');
submitButton.addEventListener('click', () => {
    event.preventDefault;
    toDoList = document.querySelector('.toDo-list');
    inputs.forEach((input) => {
        inputValues[input.name] = input.value;
    });
    if (inputValues['title'] == ''){
        return;
    }
    const newTodo = new ToDo(inputValues.title, inputValues.description, inputValues.dueDate, inputValues.priority);
    toDoList.replaceWith(newTodo.addToDo());
    closeDialog();
})

function closeDialog() {
    toDoDialog.close();
    form.reset();
}
const addToDo = document.getElementById('add-toDo'); 
addToDo.addEventListener('click', () => toDoDialog.showModal());

const cancelButton = document.getElementById('cancel-button');
cancelButton.addEventListener('click',() => closeDialog());
