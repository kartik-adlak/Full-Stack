const ary = ["Apple", 2.5, 99, "Himachal", "a"];

console.log("with foe each");

ary.forEach((element) => {
    if(typeof element === "number"){
        return element;     
    }
});

console.log("X = ", x);


const ar2 = ["Apple", 2.5, 99, "Himachal", "a"];

var F = ar2.filter((item) => item !== 99);
console.log("F = ", F);

const fruitss = ["Apple", "Mango", "Banana", "Orange"];

fruits.push("Grapes");

console.log(fruitss);

console.log("Total fruits:", fruits.length);

fruits.forEach((fruit) => {
    console.log(fruit);
});