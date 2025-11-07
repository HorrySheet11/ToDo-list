let toDos = [];

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
    this.addToDOM();
  }

  addToDOM() {
    const toDoList = document.getElementById('toDo-list');
    toDos.map((toDo) => {
      const toDoItem = document.createElement('div');
      toDoItem.classList.add('toDo-items');
      toDoItem.innerHTML = `
        <h3 id="title">${toDo.title}</h3><input id="completed" type="checkbox" />
        <h4 id="date">${toDo.dueDate}</h4>
        <h4 id="priority">${toDo.priority}</h4>
        <p id="description">${toDo.description}</p>
      `;
      toDoList.appendChild(toDoItem);
    });
    return toDoList;

  }
}