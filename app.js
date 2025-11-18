let tasks = [];

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTask = input.value.trim();

  if (newTask === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  tasks.push(newTask);
  input.value = "";
  renderTasks();
});

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("btn", "edit");
    editBtn.onclick = () => editTask(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.classList.add("btn", "hapus");
    deleteBtn.onclick = () => deleteTask(index);

    li.appendChild(taskText);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newTask = prompt("Edit tugas:", tasks[index]);
  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask.trim();
    renderTasks();
  } else {
    alert("Tugas tidak boleh kosong!");
  }
}