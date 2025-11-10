import {toDos} from './toDo.js';

let itemIndex = 0;
let itemObject = {};

function overwriteToDos(index,object){
  toDos[index].title = object.title;
  toDos[index].description = object.description;
  toDos[index].dueDate = object.dueDate;
  toDos[index].priority = object.priority;  
  console.log(toDos);
  
}

export function editToDoItem(index) {
  itemIndex = index;
  const toDoItems = document.querySelectorAll('.toDo-items');
  toDoItems.forEach(item => {
      if (item.classList.contains('open')) {
        // Retrieve the details of the selected toDo item
        const title = item.querySelector('#title').textContent;
        const description = item.querySelector('#description').textContent;
        const dueDate = item.querySelector('#date').textContent;
        const priority = item.querySelector('#priority').textContent;

        // Populate the dialog with the details
        const editDialog = document.querySelector('#editDialog');
        editDialog.querySelector('#editTitle').value = title;
        editDialog.querySelector('#editDescription').value = description;
        editDialog.querySelector('#editDueDate').value = dueDate.replace('Due: ', '');
        editDialog.querySelector('#editPriority').value = priority.replace('Priority: ', '');

        editDialog.showModal();
      } else {
        item.classList.toggle('open');
      }
    
  });
}

export function applyEdit() {
  const editDialog = document.querySelector('#editDialog');
  const title = editDialog.querySelector('#editTitle').value;
  const description = editDialog.querySelector('#editDescription').value;
  const dueDate = editDialog.querySelector('#editDueDate').value;
  const priority = editDialog.querySelector('#editPriority').value;
  

  const toDoItem = document.querySelector('.open');
  if(description || dueDate || priority){
    toDoItem.classList.remove('small');
  }else if(!description && !dueDate && !priority){
    toDoItem.classList.add('small');
  }
  console.log(toDoItem);
  toDoItem.querySelector('#title').textContent = title;
  toDoItem.querySelector('#description').textContent = description;
  toDoItem.querySelector('#date').textContent = `Due: ${dueDate}`;
  toDoItem.querySelector('#priority').textContent = `Priority: ${priority}`;

  itemObject = {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
  }
  overwriteToDos(itemIndex,itemObject);
}