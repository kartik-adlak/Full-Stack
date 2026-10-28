const ob = {
    fullName: "kartik",
    gender: "male",
    college: "SIRT",
    year: 4,
    cgpa: 6.5,
}

console.log(ob);
console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob));


const {fullName, year, cgpa} = ob;




const ar = [10, 20, 30, 40, 6, 50];
console.log(...ar);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }



const xyz = ()=>{
    console.log({...ob});
     
}

xyz();


