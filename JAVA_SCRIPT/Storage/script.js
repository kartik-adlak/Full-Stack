const jsonData = {
    title: "Myphone 16",
    description: "very good phone is deep beetroot color",
    button1: "25000",
    button2: "buynow",
};

const dataReadyToStore  = JSON.stringify(jsonData);

localStorage.setItem("myNewData", dataReadyToStore);
localStorage.setItem("myName",  "Kartik Adlak");
localStorage.setItem("your Name", "Nikhil");

const getLSData = localStorage.getItem("myNewData");


document.querySelector("body")
        .appendChild((document.createElement("div").innerText = getLSData));



function PasswordVisibility(){
    const IN = document.getElementById("myPassword");
    const BN = document.getElementById("passwordControl");
}




