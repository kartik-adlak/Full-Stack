
let passwords = [];

let passwordForm = document.getElementById("passwordForm");
let websiteNameInput = document.getElementById("websiteName");
let websiteURLInput = document.getElementById("websiteURL");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");

let passwordList = document.getElementById("passwordList");
let message = document.getElementById("message");
let searchInput = document.getElementById("searchInput");
let toggleFormPassword = document.getElementById("toggleFormPassword");

let editingId = null;


// Show or hide the password in the form
toggleFormPassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleFormPassword.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleFormPassword.textContent = "Show";
    }
});


// Add a new password
passwordForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let websiteName = websiteNameInput.value.trim();
    let websiteURL = websiteURLInput.value.trim();
    let username = usernameInput.value.trim();
    let password = passwordInput.value;

    if (!websiteName || !websiteURL || !username || !password.trim()) {
        showMessage("Please fill in all fields.", "error");
        return;
    }

    let validURL;

    try {
        validURL = new URL(websiteURL);
    } catch {
        showMessage("Please enter a valid website URL.", "error");
        return;
    }

    if (
        validURL.protocol !== "https:" &&
        validURL.protocol !== "http:"
    ) {
        showMessage("URL must start with HTTP or HTTPS.", "error");
        return;
    }

    let newPassword = {
        id: Date.now(),
        websiteName: websiteName,
        websiteURL: websiteURL,
        username: username,
        password: password,
        visible: false
    };

    passwords.push(newPassword);

    renderPasswords();

    passwordForm.reset();

    passwordInput.type = "password";
    toggleFormPassword.textContent = "Show";

    showMessage("Password added successfully!", "success");
});


// Display success or error message
function showMessage(text, type) {
    message.textContent = text;
    message.className = "";

    if (type === "success") {
        message.classList.add("message-success");
    } else {
        message.classList.add("message-error");
    }
}


// Display saved passwords
function renderPasswords() {
    passwordList.textContent = "";

    if (passwords.length === 0) {
        let emptyMessage = document.createElement("p");

        emptyMessage.classList.add("empty-state");
        emptyMessage.textContent =
            "No passwords saved yet. Add your first website credential!";

        passwordList.append(emptyMessage);
        return;
    }

    passwords.forEach(function (item) {
        let card = document.createElement("div");
        card.classList.add("password-card");

        let heading = document.createElement("h3");
        heading.textContent = item.websiteName;

        let website = document.createElement("p");
        website.textContent = "Website: " + item.websiteURL;

        let username = document.createElement("p");
        username.textContent = "Username: " + item.username;

        let passwordText = document.createElement("p");
        passwordText.classList.add("password-value");

        if (item.visible) {
            passwordText.textContent = "Password: " + item.password;
        } else {
            passwordText.textContent = "Password: ••••••••";
        }

        let showButton = document.createElement("button");
        showButton.type = "button";
        showButton.classList.add("btn", "btn-secondary");
        showButton.textContent = item.visible ? "Hide" : "Show";

        showButton.addEventListener("click", function () {
            item.visible = !item.visible;
            renderPasswords();
        });

        let actions = document.createElement("div");
        actions.classList.add("card-actions");

        actions.append(showButton);

        card.append(
            heading,
            website,
            username,
            passwordText,
            actions
        );

        passwordList.append(card);
    });
}


// Show the empty-state message on page load
renderPasswords();
