// function openToDoItem() {
//   console.log('openToDoItem loaded');
//     const toDoItems = document.querySelectorAll('.toDo-items');
//     toDoItems.forEach(item => {
//         item.addEventListener('click', () => {
//             item.classList.toggle('open');
//             editToDoItem();
//         });
//     });
// }

export function editToDoItem() {
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
  
  // Update the toDo item with the new details
  const toDoItem = editDialog.closest('.toDo-items');
  toDoItem.querySelector('#title').textContent = title;
  toDoItem.querySelector('#description').textContent = description;
  toDoItem.querySelector('#date').textContent = dueDate;
  toDoItem.querySelector('#priority').textContent = priority;
  
  // Close the dialog
  editDialog.close();
}