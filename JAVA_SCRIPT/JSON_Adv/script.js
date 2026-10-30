// const ob = {
//     fullName: "kartik",
//     gender: "male",
//     college: "SIRT",
//     year: 4,
//     cgpa: 6.5,
// }

// console.log(ob);
// console.log(Object.keys(ob));
// console.log(Object.values(ob));
// console.log(Object.entries(ob));


// const {fullName, year, cgpa} = ob;


// console.log(ob.gender);


// const ar = [10, 20, 30, 40, 6, 50];
// console.log(...ar);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }



// const xyz = ()=>{
//     console.log({...ob});
     
// }

// xyz();











const ob = {
  fullName: "Patel",
  gender: "male",
  college: "sam",
  year: 3,
  cgpa: 8.2,
};

console.log(ob);
console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob));

const { fullName, year, cgpa } = ob;

console.log(ob.gender);

console.log(year);

const ar = [10, 20, 3, 4, 40, 50];

console.log(...ar);

for (var i = 0; i < ar.length; i++) {
  console.log(ar[i]);
}

const data = [
  {
    title: "MyPhone 18",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "MyPhone 16",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "Ramsungs Fold 7",
    description: "Feel the Book Style Phone which can fold",
    button1: "₹85000",
    button2: "buynow",
  },
  {
    title: "audiocon 18",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "Blueyou 17",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "twominus 18",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "something 4",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "fakeYou 16x",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "kyakiya lumia 825",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
];

console.log(data);
console.log(...data);

const ar2 = [24, 56, ...ar, 47, 21];

console.log(ar2);

function displayStudent(name, ...subjects) {
  console.log("Student:", name);
  console.log("Subjects:", subjects);
}

displayStudent("Aarav", "HTML", "CSS", "JavaScript", "BootStrap", "React");

function Sum(...n) {
  return n.reduce((result = 0, num) => (result += num));
}

const answer = Sum(2, 3, 4, 5, 6, 7, 8, 9);

console.log(answer);