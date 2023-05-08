// var

// var a=10;
// var a=20;
// console.log(a)//variable at line 3


// let a=10;
// let a=20;
// console.log(a);


// console.log(a);
// var a=10;


// console.log(a);
// let a=10;


// let a=20;
// a=30;
// console.log(a);s


// const b=20;
// b=30;
// const b=30;

     
//  spread operator
// let s=[1,4,5,6,7];
// let p=[3,4,5,6,7,8];
// console.log([...s,...p]);

// function add(...s){
//    console.log(s);
//    let sum = 0;
//    for (let a of s){
//     sum +=a;
//    }
//    console.log(sum);
// }
// add(2,3,3,54,56,7);


// let person = {
//     name :"Tajuddin",
//     place : "Kadapa",
//     mobileNo : "9696969696",
// };
            // //changing name
            // //person['name']="Mohammed";
            // //person.name="Mohammed";

// function change(key,value) {
//     return{...person,[key]:value };
// }
// console.log(change("place","Mohammed"));

 
// const str = ["my","name", "is","Tajuddin"];
// console.log(...str);


// function strFun(...str){
//     let returnStr =[];
//     for(let a of str){
//          returnStr.push(a.length);
        // // returnStr =[...returnStr,a.length];
//     }
//     return returnStr;
// }
// console.log(strFun("mynuddin", "nizamuddin","tajuddin","ismail"));



// ARROW FUNCTIONS
// const strFun = (...str) =>{
// let returnStr =[];
//     for(let a of str){
//          returnStr =[...returnStr,a.length];
//     }
//     return returnStr;
// };
// console.log(strFun("mynuddin", "nizamuddin","tajuddin","ismail"));


//object Destructure
// let a ="hello";
// let b ="world";
  
// console.log(`${a}  ${b} the add`);
//output:  hello  world the add


// let a ="hello";
// let b ="world";
//   const templatereuse =(str) => str + " updated successfully";


// let person = {
//     name :"Tajuddin",
//     place : "Kadapa",
//     mobileNo : "9696969696",
// };

// let {name,place} = person;
// console.log(name,place);
// output:Tajuddin Kadapa



// console.log(
//  (function(...str)  {
//     let returnStr =[];
//     for(let a of str){
//      returnStr =[...returnStr,a.length];
//      }

//     return returnStr;
//      })("mynuddin", "nizamuddin","tajuddin","ismail")
// );
//output:[8, 10, 8, 6]


class person {
    constructor(name,year) {
      this.name = name;
      this.age = year;
    }
    eligible(){
        if(this.age>18){
            return 'Eligible'
        }else{
            return 'Not Eligible'
        }
    }
}
let person1  = new person("Tajuddin",27);
console.log(person1.eligible());
console.log(person1);
 





































































