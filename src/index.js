import "./style.css";
import { ToDo } from "./toDo.js";
import { editToDoItem,applyEdit } from "./openToDoItem.js";

try {
  console.log("script loaded");
  ToDo;
} catch (error) {
  console.log(error);
}

let body = document.body;
let toDoList = document.querySelector(".toDo-list");

function openToDoItem() {
  toDoList.addEventListener("click", function (event) {
  const clickedElement = event.target.closest(".toDo-items");
  clickedElement.classList.toggle("open");
  editToDoItem();
  console.log(clickedElement);
  // console.log(toDoList.children[toDoList.children.indexOf(clickedElement)].children[1]);
});}
openToDoItem();
// function openToDoItem() {
//   document.querySelectorAll(".toDo-items").forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("open");
//     editToDoItem();
//     // console.log(toDoList.children.indexOf(item));
//   });
// })}
document.querySelector('#editToDoBtn').addEventListener('click', () => {
  applyEdit();
})

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
  openToDoItem()
});

function closeDialog() {
  toDoDialog.close();
  document.querySelector("form").reset();
}
const addToDo = document.getElementById("add-toDo");
addToDo.addEventListener("click", () => toDoDialog.showModal());

const cancelButton = document.getElementById("cancel-button");
cancelButton.addEventListener("click", () => closeDialog());

const overlay = document.getElementById("cancelEdit");
overlay.addEventListener("click", (event) => {
  closeDialog(); 
  document.querySelectorAll(".toDo-items").forEach((item) => {
    item.classList.remove("open");
  });
});
