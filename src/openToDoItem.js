export function openToDoItem() {
    const toDoItems = document.querySelectorAll('.toDo-items');
    toDoItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');
            editToDoItem();
        });
    });
}

function editToDoItem() {
  const toDoItems = document.querySelectorAll('.toDo-items');
  toDoItems.forEach(item => {
    item.addEventListener('click', () => {
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
        editDialog.querySelector('#editDueDate').value = dueDate;
        editDialog.querySelector('#editPriority').value = priority;

        editDialog.showModal();
      } else {
        item.classList.toggle('open');
      }
    });
  });
}