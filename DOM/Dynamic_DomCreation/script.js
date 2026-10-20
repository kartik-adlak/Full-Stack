const H = document.createElement("h2");

const P = document.createElement("p");

const B = document.createElement("button");

H.classList.add("text-info");

H.textContent = "Sub Headign";

P.textContent = "ajfsdndsnvjsdnvfdvnfiobnfoibnfoibnfdbfndbdfbnbfdkbmfkvnfvknnfjv";
B.classList.add("btn", "btn-primary");
B.innerText = "submit";

const div = document.getElementById("task1");

div.appendChild(H);
div.appendChild(P);
div.appendChild(B);

// H.remove();







