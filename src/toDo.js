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

  addToDo(title, description, dueDate, priority) {
    const newToDo = new ToDo(title, description, dueDate, priority);
    toDos.push(newToDo);
    this.addToDOM();
  }

  addToDOM() {
    const toDoList = document.getElementById('toDo-list');

    toDoList.map((toDo) => {
      const toDoItem = document.createElement('div');
      toDoItem.classList.add('toDo-item');
      toDoItem.innerHTML = `
        <input type="checkbox" id="completed" ${toDo.completed ? 'checked' : ''} onclick="toggleCompleted(${toDo.id})">
        <h3>${toDo.title}</h3>
        <h4>${toDo.description}</h4>
        <p>Due: ${toDo.dueDate}</p>
        <p>Priority: ${toDo.priority}</p>
      `;
      toDoList.appendChild(toDoItem);
    });
    return toDoList;

  }
}