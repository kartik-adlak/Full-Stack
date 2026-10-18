const headingText = document.getElementById("heading");

const paraText = document.getElementById("studentMessage");

const btnLabel = document.getElementById("courseButton");

console.log(headingText);
console.log(paraText);
console.log(btnLabel);


headingText.textContent = "Hello Nikhil Bhai kya hal chal";



function UpdateMyname(){
    const myName = document.getElementById("myName").value;
    paraText.innerText = "Welcome to your Learning Portal"
}





const pic = document.querySelector("img");

pic.src = "https://images.unsplash.com/photo-1773543335818-adc6efd62948?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";