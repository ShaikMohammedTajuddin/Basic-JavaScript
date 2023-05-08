// function evenorodd(number){
//     // Ternary operator
//     // condition ? true Case : false Case
//    return number % 2 === 0 ? "even" : "odd";
// }

// console.log(evenorodd(3));


// let a =10;
// let b="10";

// console.log(a === b);


//  function posorneg(number){
//     // Ternary operator
//     // condition ? true Case : false Case
//    return number === 0 ? "zero" : number > 0 ?"positive" :"negative";
// }
//let a = [1,2,4,-3,5,-2,-5,0];
// a.forEach((num) => console.log(posorneg(num)));



// let a = [1,2,4,-3,5,-2,-5,0];
// let b=[2,4,5,6];
// let c=[...a,...b];
// console.log(c);


// function add(...number){
//     console.log(number);
//     let sum =0;
//     number.forEach((num) => sum+num);
//     return sum;
// }
// console.log(add(2,3));


// const functionName=(parameters,...) =>{}

const add =(...number) =>{
console.log(number);
    let sum =0;
    number.forEach((num) =>(sum = sum+num));
    return sum;
};












