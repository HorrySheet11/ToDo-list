import "./style.css";
import { ToDo } from "./toDo.js";
import { editToDoItem, applyEdit } from "./openToDoItem.js";

let toDoList = document.querySelector(".toDo-list");

// function openToDoItem() {
//   toDoList.addEventListener("click", function (event) {
//     // make the clickedElement the only item clicked

//     const clickedElement = event.target.closest(".toDo-items");
//     // console.log(thisIndex(clickedElement));
//     // console.log(event.target);
//     clickedElement.classList.toggle("open");
//     editToDoItem();
//   });
// }
function openToDoItem() {
  toDoList.addEventListener("click", function (event) {
    const clickedElement = event.target.closest(".toDo-items");
    if (clickedElement) {
      // Remove the 'open' class from all other items
      const allItems = document.querySelectorAll(".toDo-items");
      allItems.forEach(item => item.classList.remove("open"));
      // Add the 'open' class to the clicked item
      clickedElement.classList.add("open");
      editToDoItem(thisIndex(clickedElement));
    }
  });
}

openToDoItem();
document.querySelector("#editToDoBtn").addEventListener("click", () => {
  applyEdit();
  closeEditDialog();
});

function thisIndex(theIndex) {
  return Array.from(theIndex.parentElement.children).indexOf(theIndex);
}

const toDoDialog = document.getElementById("add-toDo-dialog");

document.getElementById("submit").addEventListener("click", () => {
  const inputValues = {};
  const inputs = document.querySelectorAll(
    'input[name="title"], input[name="dueDate"], textarea[name="description"], select[name="priority"]'
  );
  event.preventDefault;
  inputs.forEach((input) => {
    inputValues[input.name] = input.value;
  });
  if (inputValues["title"] == "") {
    return;
  }
  const newTodo = new ToDo(
    inputValues.title,
    inputValues.description,
    inputValues.dueDate,
    inputValues.priority
  );
  toDoList.replaceWith(newTodo.addToDo());
  toDoList = document.querySelector(".toDo-list");
  closeDialog();
  openToDoItem();
});

function closeDialog() {
  toDoDialog.close();
  document.querySelector("#editDialog").close();
  document.querySelector("form").reset();
}

function closeEditDialog() {
  closeDialog();
  document.querySelectorAll(".toDo-items").forEach((item) => {
    item.classList.remove("open");
  });
}
const addToDo = document.getElementById("add-toDo");
addToDo.addEventListener("click", () => toDoDialog.showModal());

const cancelButton = document.getElementById("cancel-button");
cancelButton.addEventListener("click", () => closeDialog());

const overlay = document.getElementById("cancelEdit");
overlay.addEventListener("click", (event) => {
  closeEditDialog()
});
