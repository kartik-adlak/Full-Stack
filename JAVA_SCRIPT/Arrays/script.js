const arr1 = [1,2,3,4,5,6];
let  arr2 = [10,20,30,40,50];

console.log(arr1);
console.log(arr2);

arr1.push(3344);
arr1.pop(5);


const fruits = ["Apple", "Mango", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

    

const fruitss = ["Apple", "Mango", "Banana", "Orange"];

fruits.push("Grapes");

console.log(fruitss);

console.log("Total fruits:", fruits.length);

fruits.forEach((fruit) => {
    console.log(fruit);
});




















// const form = document.getElementById("loginForm");

// form.addEventListener("submit", function(event) {

//     event.preventDefault();

//     let name = document.getElementById("name").value.trim();

//     let password = document.getElementById("password").value;

//     let nameMsg = document.getElementById("nameMsg");
//     let passwordMsg = document.getElementById("passwordMsg");
//     let result = document.getElementById("result");

//     // Name Validation
//     let namePattern = /^[A-Za-z ]+$/;

//     if (name === "") {

//         nameMsg.textContent = "Please enter your name";

//     } 
//     else if (!namePattern.test(name)) {

//         nameMsg.textContent = "Invalid name! Only letters and spaces allowed";

//     } 
//     else {

//         nameMsg.textContent = "Valid Name";

//     }


//     // Password Validation
//     if (password === "") {

//         passwordMsg.textContent = "Please enter your password";

//     } 
//     else if (password.length < 8) {

//         passwordMsg.textContent = "Password must contain at least 8 characters";

//     } 
//     else {

//         passwordMsg.textContent = "Valid Password";

//     }


//     // Final Result
//     if (
//         name !== "" &&
//         namePattern.test(name) &&
//         password !== "" &&
//         password.length >= 8
//     ) {

//         result.textContent = "Login Form Validated Successfully!";

//     } 
//     else {

//         result.textContent = "Please correct the errors!";

//     }

// });