function sum(a,b){
    let c = a+b;
    console.log(c);
}

sum(5,6);



function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4));




// function greet(){
//     console.log("Hello JavaScript😂😂😂😂");
// }

// greet();



// Function Expresion
const greett = function() {
    console.log("Welcome to JavaScript😂😂😂😂");
};

greett();


















// Default Parameter ---->
let pizzaOrder = (size = "medium") => {
    console.log("pizza preparing of size", size);
};

pizzaOrder("large");







//rest parameter ----->    ...rest bachi hui sari chize me accept kar lu

let numbers = (num1 , num2, ...rest) => {
    console.log("we have a numbers->", num1, num2, ...rest);
};
numbers(2,4,5,7,43,6,7,8,82,76,90);


let numberss = (...rest) => {
    console.log("we have a numbers->", ...rest);
};
numberss(2,4,5,7,43,6,7,8,82,76,90);