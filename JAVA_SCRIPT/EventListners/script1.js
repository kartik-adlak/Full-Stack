
const assignmentButton = document.getElementById("assignmentButton");
const attendanceButton = document.getElementById("attendanceButton");
const themeButton = document.getElementById("themeButton");
const clearButton = document.getElementById("clearButton");

const assignmentMessage = document.getElementById("assignmentMessage");
const attendanceMessage = document.getElementById("attendanceMessage");
const themeMessage = document.getElementById("themeMessage");

// Show assignment notification
assignmentButton.addEventListener("click", function() {
    assignmentMessage.textContent =
        "Your assignment deadline is approaching. Submit it on time!";
});

// Show attendance notification
attendanceButton.addEventListener("click", function() {
    attendanceMessage.textContent =
        "Please check your attendance. Maintain at least 75% attendance.";
});

// Toggle dark mode
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeMessage.textContent = "Dark mode is enabled.";
    } else {
        themeMessage.textContent = "Light mode is enabled.";
    }
});

// Clear all notifications
clearButton.addEventListener("click", function() {
    assignmentMessage.textContent = "No new notification.";
    attendanceMessage.textContent = "Check your attendance status.";
    themeMessage.textContent = "Change the dashboard appearance.";
});
