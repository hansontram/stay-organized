class TodoService {
  userTaskUrl = "http://localhost:8083/api/todos/byuser/";
  addTaskURL ="http://localhost:8083/api/todos"

  // GET
  async getAllUserTask(selectedUserId) {
    return fetch(`${this.userTaskUrl}${selectedUserId}`).then((response) =>
      response.json()
    );
  }
  async add(task) {
    try {
      // create a requestInfo object
      const requestInfo = {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-type": "application/json;charset=UTF-8" },
      };

      const response = await fetch(this.addTaskURL, requestInfo);

      if (!response.ok) {
        throw new Error(`Failed to add task: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error("Error adding task:", error);
      throw error; // rethrow the error to propagate it to the caller
    }
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
