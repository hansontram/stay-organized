let todoService;

document.addEventListener("DOMContentLoaded", function () {
  todoService = new TodoService();
  populateUserDropdown();
});

function populateUserDropdown() {
  let userNameInput = document.getElementById("userNameSelect");

  usersUrl = "http://localhost:8083/api/users";

  fetch(usersUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        let newOption = document.createElement("option");
        newOption.value = user.id;
        newOption.innerText = user.name;
        userNameInput.appendChild(newOption);
      });

      userNameInput.addEventListener("change", function () {
        let selectedUserId = userNameInput.value;

        filterTasks(selectedUserId);
      });
    });
}

function filterTasks(selectedUserId) {
  console.log(selectedUserId);
  todoService
    .getAllUserTask(selectedUserId)
    .then((tasks) => {
      displayRows(tasks);
    })
    .catch((error) => {
      console.error("Error fetching tasks:", error);
    });
}

function displayRows(tasks) {
  document.getElementById("itemRows").innerHTML = "";

  tasks.forEach((task) => {
    displayRow(task);
  });
}

function displayRow(task) {
  const itemRows = document.getElementById("itemRows");

  const row = itemRows.insertRow(-1);
  const idCell = row.insertCell(0);
  idCell.innerText = task.id;
  const userCell = row.insertCell(1);
  userCell.innerText = task.userid;
  const descriptionCell = row.insertCell(2);
  descriptionCell.innerText = task.description;
  const categoryCell = row.insertCell(3);
  categoryCell.innerText = task.category;
  const deadlineCell = row.insertCell(4);
  deadlineCell.innerText = task.deadline;
  const priorityCell = row.insertCell(5);
  priorityCell.innerText = task.priority;
  console.log(task.priority);
  const completedCell = row.insertCell(6);
  completedCell.innerText = task.completed;
}
