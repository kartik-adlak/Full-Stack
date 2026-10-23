function ShowAlert (){
    alert("Click me button clicked using HTML Events")
}

document.getElementById("clickButton").addEventListener("click", ShowAlert2);

function ShowAlert2() {
    alert("Click me button clicked using js Events")
}


document.getElementById("box").addEventListener("click", () => {
    document.getElementById("box").innerText = "The Box Was Clicked";
});


// document.getElementById("h1").addEventListener("dblclick", ()=> {
//     document.getElementById("h1").style.color = "red";
// });

document.getElementById("h1").addEventListener("dblclick", () => {
    document.getElementById("h1").style.color = "red";
}); 



document.getElementById("box2").addEventListener("mouseleave", () => {
    document.getElementById("box2").style.backgroundColor = "red";
});


document.getElementById("nameSubmit").addEventListener("click", ()=> {
    console.log(document.getElementById("fillName").ariaValueMax.trim());
    
});

document.getElementById("fullName").addEventListener("keydown", (e)=> {
    console.log();
    
})

