let todoService;

document.addEventListener('DOMContentLoaded', function() {
    populateUserDropdown();
});


function populateUserDropdown() {
    let userNameInput = document.getElementById("userNameSelect");

    usersUrl = 'http://localhost:8083/api/users';

    fetch(usersUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                let newOption = document.createElement("option");
                newOption.value = user.id;
                newOption.innerText = user.name;
                userNameInput.appendChild(newOption);
            });
        });
}
