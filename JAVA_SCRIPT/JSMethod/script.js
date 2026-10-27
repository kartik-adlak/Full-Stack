const str = "JavaScript";

console.log(str.charAt(3));
console.log(str.at(-1));


const str2 = str.slice(4);
console.log(str2);

const S_Str = str.substring(4,1);
console.log(S_Str);





const js = "javaScript";
console.log(js);




const text = "Learn JavaScript";

console.log(text.indexOf("Java"));
console.log(text.indexOf("Script"));
console.log(text.indexOf("Python"));





const a = Math.random();


// const arr = [10,24,32,53,46,76,89];
// console.log(arr(3));





console.log("===== 1. toString() =====");

let num = 250;
console.log(num.toString());
console.log(typeof num.toString());


console.log("\n===== 2. toLocaleString() =====");

let amount = 1234567.89;

console.log(amount.toLocaleString("en-IN"));
console.log(amount.toLocaleString("en-US"));

console.log(amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
}));


console.log("\n===== 3. toFixed() =====");

let price = 125.6789;

console.log(price.toFixed(0));
console.log(price.toFixed(2));
console.log(price.toFixed(3));


console.log("\n===== 4. toPrecision() =====");

let value = 123.456;

console.log(value.toPrecision(3));
console.log(value.toPrecision(5));


console.log("\n===== 5. toExponential() =====");

let number = 12345;

console.log(number.toExponential());
console.log(number.toExponential(2));


console.log("\n===== 6. Number.isInteger() =====");

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));
console.log(Number.isInteger("10"));


console.log("\n===== 7. Number.isNaN() =====");

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(100));
console.log(Number.isNaN("hello"));


console.log("\n===== 8. Number.isFinite() =====");

console.log(Number.isFinite(100));
console.log(Number.isFinite(10.5));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));


console.log("\n===== 9. Number.isSafeInteger() =====");

console.log(Number.isSafeInteger(100));
console.log(Number.isSafeInteger(10.5));
console.log(Number.isSafeInteger(9007199254740991));
console.log(Number.isSafeInteger(9007199254740992));


console.log("\n===== 10. Number.parseInt() =====");

console.log(Number.parseInt("250"));
console.log(Number.parseInt("25.9"));
console.log(Number.parseInt("250px"));
console.log(Number.parseInt("1010", 2));


console.log("\n===== 11. Number.parseFloat() =====");

console.log(Number.parseFloat("25.75"));
console.log(Number.parseFloat("100"));
console.log(Number.parseFloat("25.75kg"));
console.log(Number.parseFloat("hello"));


console.log("\n===== 12. Number() =====");

console.log(Number("123"));
console.log(Number("12.5"));
console.log(Number("hello"));
console.log(Number("")); 


console.log("\n===== 13. Number.isFinite() vs global isFinite() =====");

console.log(Number.isFinite("100"));
console.log(isFinite("100"));


console.log("\n===== 14. valueOf() =====");

let marks = new Number(85);

console.log(marks.valueOf());
console.log(typeof marks);
console.log(typeof marks.valueOf());



