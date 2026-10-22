// function addTask(){
//     const newTask = document.getElementById("taskInput").ariaValueMax.trim();

//     const LI = document.createElement("li");
//     LI.classList.add("p-3");

//     const SPAN = document.createElement("span");

// }





function addTask() {
  const newTask = document.getElementById("taskInput").value.trim();

  const LI = document.createElement("li");
  LI.classList.add("p-3");

  const SPAN = document.createElement("span");
  SPAN.textContent = newTask;

  const BUTTON = document.createElement("button");
  BUTTON.classList.add("btn", "btn-danger", "btn-sm", "ms-3");
  BUTTON.textContent = "Delete";
  BUTTON.onclick = () => LI.remove();


  const BUTTON1 = document.createElement("button");
  BUTTON1.classList.add("btn", "btn-primary", "btn-sm", "ms-3");
  BUTTON1.textContent = "Edit";
  BUTTON1.onclick = () => LI.remove();


  BUTTON1.onclick = () => {
    const updatedTask = prompt("Edit your task:", SPAN.textContent);

    if (updatedTask !== null && updatedTask.trim() !== "") {
        SPAN.textContent = updatedTask.trim();
    }
};

  LI.appendChild(SPAN);
  LI.appendChild(BUTTON1);
  LI.appendChild(BUTTON);

  document.getElementById("taskList").appendChild(LI);

  document.getElementById("taskInput").value = "";
}