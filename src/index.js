import './style.css';
import { ToDo } from './toDo.js'


try {
    console.log('script loaded');
    ToDo;
} catch (error) {
    console.log(error);
}

let toDoList = document.querySelector('.toDo-list');
export default toDoList;
const titleInput = document.getElementById('toDo-title');
const descriptionInput = document.getElementById('toDo-description');
const dueDateInput = document.getElementById('toDo-dueDate');
const priorityInput = document.getElementById('toDo-priority');

const toDoDialog = document.getElementById('add-toDo-dialog');
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
    toDoList = document.querySelector('.toDo-list');
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    const newTodo = new ToDo(title, description, dueDate, priority);
    toDoList.replaceWith(newTodo.addToDo());
    
    closeDialog();
})

function closeDialog() {
    toDoDialog.close();
    titleInput.value = descriptionInput.value = dueDateInput.value = priorityInput.value = '';
}
const addToDo = document.getElementById('add-toDo'); 
addToDo.addEventListener('click', () => toDoDialog.showModal());

const cancelButton = document.getElementById('cancel-button');
cancelButton.addEventListener('click',() => closeDialog());
