let todoService;

document.addEventListener("DOMContentLoaded", function () {
  todoService = new TodoService();
  populateUserDropdown();
  populateCategoryDropdown();

  const saveButton = document.getElementById("saveButton");
  saveButton.addEventListener("click", function (event) {
    saveNewTask(event);
  });
});

function populateUserDropdown() {
  let userNameInput = document.getElementById("usernameSelect");

  usersUrl = "http://localhost:8083/api/users";

  fetch(usersUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        let newOption = document.createElement("option");
        newOption.value = user.id;
        newOption.innerText = user.username;
        userNameInput.appendChild(newOption);
      });

      userNameInput.addEventListener("change", function () {
        let selectedUserId = userNameInput.value;
        console.log(selectedUserId);
      });
    });
}

function populateCategoryDropdown() {
  let categoryInput = document.getElementById("categorySelect");

  categoryUrl = "http://localhost:8083/api/categories";

  fetch(categoryUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((category) => {
        let newOption = document.createElement("option");
        newOption.value = category.name;
        newOption.innerText = category.name;
        categoryInput.appendChild(newOption);
      });

      categoryInput.addEventListener("change", function () {
        let selectedCategoryId = categoryInput.value;
        // Handle category change if needed
      });
    });
}

async function saveNewTask(event) {
  event.preventDefault();

  const selectedUserId = parseInt(document.getElementById("usernameSelect").value);
  const category = document.getElementById("categorySelect").value;
  const urgency = document.getElementById("urgencySelect").value;
  const description = document.getElementById("description").value;
  const deadline = document.getElementById("deadline").value;

  const task = {
    "userid": selectedUserId,
    "category": category,
    "priority": urgency,
    "description": description,
    "deadline": deadline,
  };

  console.log(task);

  try {
    const newTask = await todoService.add(task);
    location.href = "/todos.html";
  } catch (error) {
    console.error("Error saving new task:", error);
  }
}
