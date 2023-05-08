// console.log(this);
// output:- Window 


// this.a=10;
// console.log(this.a,a); 
// output:10 10


// this.a=10;
// console.log(window.a); 
// output:10 


// let a={
//     name:"Mynuddin"
// }
// a.age=65
// console.log(a);
// output:{name: 'Mynuddin', age: 65}


// //Functional context
// console.log(this);
// let obj={
//     count:10,
//     nextfun : function() {
//         console.log(this);
//         return this.count;
//     }
// };
// console.log(obj.nextfun());
//output 1:Window 
// output 2:{count: 10, nextfun: ƒ}



//method context 

// "use strict"; //strict mode
// let a ="20";
// let b ="20";
//     if(a == b){
//         console.log("true");
//     }



// "use strict"; 
// x=20;
// console.log(x);
// output:20



// x=20;
// console.log(x);
// myf()
// function myf(){
//     "use strict";
//     y=3.1;
// }


// "use strict";
// function show(){
//     console.log(this);  
// }
// show();
//output:undefined


// "use strict";
// console.log(this);
// function show(){
//     console.log(this);
// }
//output:Window


// let car={
//     brand:"Benz",
//     getBrand : function(brand){
//         this.brand=brand;
//         return this.brand;
//     },
// };
// console.log(car.getBrand("Benz"));
//output:Benz


//Arrow function
// let car={
//     brand:"Benz",
//     getBrand :() => {
//     return this.brand;
//     },
// };
// console.log(car.getBrand());
//output:undefined


// let car={
//     brand:"Benz",
//     Name :"Limousine",
// };
// console.log(car.name);
// console.log(car);
//output:{brand: 'Benz', Name: 'Limousine'}


//constructor program
// function personObj(name,age){
//     this.name = name;
//     this.age =age;
// }
// personObj.prototype.conObj = function (){
//     return "dj";
// };
// let Tajuddin = new personObj("Tajuddin",23);
// console.log(Tajuddin);
//output:{name: 'Tajuddin', age: 23}


//Inheritance program
// class personObj {
//     constructor(name,age){
//     this.name = name;
//     this.age =age;
//   }
//   conObj(){
//     return "dj";
//   };
// }
// let Tajuddin = new personObj("Tajuddin",23);
// console.log(Tajuddin);
//output:{name: 'Tajuddin', age: 23}


//Encapsuation program
// class personObj {
//   constructor(name,age){
//    this.name = name;
//    this.age = age;
//     }
//     addAddress(){
//     return (this.address = address);
//     }
// getDetails(){
//     console.log("name is ${this.name} and age is $(this.age) and address is $(this.address")
//      };
//    }
// let person1 = new personObj("Mynuddin",65);
// person1.addAddress("Chennai");
// person1.getDetails();
































































































