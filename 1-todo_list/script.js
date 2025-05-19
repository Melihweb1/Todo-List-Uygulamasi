let addBtn = document.getElementById("addButon");
let inputField = document.getElementById("inputField");
let todoContainer = document.getElementById("todoContainer");
addBtn.addEventListener("click", () => {
  var paragraph = document.createElement("li");
  paragraph.innerHTML = inputField.value;
  todoContainer.appendChild(paragraph);
});
