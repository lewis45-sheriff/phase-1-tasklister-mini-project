document.addEventListener("DOMContentLoaded", (e) => {
  document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    handleTask(e.target.newtaskdescription.value);
  });
});

function handleTask(todo) {
  let taskList = document.getElementById('tasks');

  let newTask = document.createElement('p');
  newTask.textContent = todo;

  let btn = document.createElement("button");
  btn.textContent = 'x';
  btn.addEventListener('click', handleDelete);

  newTask.appendChild(btn);
  taskList.appendChild(newTask);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
