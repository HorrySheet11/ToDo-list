import {saveToDos} from './webStorage.js';
export let toDos = [];

export class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    console.log('toDo.js loaded');
  }
  toggleCompleted() {
    this.completed = !this.completed;
  }
 
  addToDo() {
    const newToDo = new ToDo(this.title, this.description, this.dueDate, this.priority);
    toDos.push(newToDo);
    saveToDos();
    return this.addToDOM();
  }


  addToDOM() {
    const toDoList = document.createElement('div');
    toDoList.classList.add('toDo-list');
    toDos.map((toDo) => {
      const toDoItem = document.createElement('div');
      toDoItem.classList.add('toDo-items');
      if(!toDo.dueDate && !toDo.priority && !toDo.description){ 
        toDoItem.classList.add('small');
      }
      toDoItem.innerHTML = `
          <h2 id="title">${toDo.title}</h2><input id="completed" type="checkbox" />
          <h4 id="date">${toDo.dueDate ? `Due: ${toDo.dueDate}` : ''}</h4>
          <h4 id="priority">${toDo.priority ? `Priority: ${toDo.priority}` : ''}</h4>
          <p id="description">${toDo.description ? toDo.description : ''}</p>
        `;
      toDoList.appendChild(toDoItem);
    });
    return toDoList;
  }
}