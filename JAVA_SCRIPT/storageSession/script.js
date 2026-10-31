let form = document.querySelector("#nameForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.querySelector("#name").value.trim();

    let valid = true;

    if (name === "") {
        valid = false;
    }

    for (let i = 0; i < name.length; i++) {

        let char = name[i];
        if (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            char === " "
        ) {
            continue;
        }
        else {
            valid = false;
            break;
        }
    }

    if (valid) {
        console.log("Valid Name");
    }
    else {
        console.log("Invalid Name");
    }

});









