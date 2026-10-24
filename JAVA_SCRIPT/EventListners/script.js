const showAssBtn = document.getElementById("showAssingmentNotification");
const showAttBtn = document.getElementById("showAttendenceNotification");
const stopAssBtn = document.getElementById("StopAssingmentNotification");

const assPara = document.getElementById("AssingmentNotification");
const attPara = document.getElementById("AttandanceNotification");

// Assignment notification
function ShowAssingment() {
    assPara.textContent = "Your assignment deadline is approaching!";
}

showAssBtn.addEventListener("click", ShowAssingment);

// Attendance notification
showAttBtn.addEventListener("click", () => {
    attPara.textContent = "Please check your attendance status!";
});

// Stop assignment notification
stopAssBtn.addEventListener("click", () => {
    assPara.textContent = "";
});





//     assPara.textContent = "Your assingment deadline is approching!";
// });