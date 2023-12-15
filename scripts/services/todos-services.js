class TodoService {
  userTaskUrl = "http://localhost:8083/api/todos/byuser/";

  // GET
  async getAllUserTask(selectedUserId) {
    return fetch(`${this.userTaskUrl}${selectedUserId}`).then((response) =>
      response.json()
    );
  }
}
// TODO: Convert to using services after:
// async fetchUsers(usersUrl) {
//     return fetch(usersUrl)
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(user => {
//                 const userNameInput = document.getElementById("userNameSelect");

//                 let newOption = document.createElement("option");
//                 newOption.value = user.id;
//                 newOption.innerText = user.name;
//                 userNameInput.appendChild(newOption);
//             });
//         });
