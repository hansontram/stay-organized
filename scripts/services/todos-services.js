class TodoService {
    async fetchUsers(usersUrl) {
        return fetch(usersUrl)
            .then(response => response.json())
            .then(data => {
                data.forEach(user => {
                    const userNameInput = document.getElementById("userNameSelect");

                    let newOption = document.createElement("option");
                    newOption.value = user.id;
                    newOption.innerText = user.name;
                    userNameInput.appendChild(newOption);
                });
            });
}}