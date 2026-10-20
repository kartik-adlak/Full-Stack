const ar = ["Rahul", "Amit", "Nikhil", "Kartik", "Neha"];

const list = document.createElement("ol");

ar.forEach((item) => {
    const l = document.createElement("li");
    l.textContent = item;
    list.appendChild(l);
});

document.getElementById("myList").appendChild(list);