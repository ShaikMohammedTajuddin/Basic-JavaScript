/*1.Ways to print in JavaScript
console.log("Hello World");
alert ("me");
document.write("This is document write");*/


/*2.JavaScript console API
console.log("Hello World");
console.warn("This is warning");
console.error("This is an error")
console.clear()*/


/*3.JavaScript Variables
What are Variables? - containers to store data values
var number1 = 34;
var number2 = 56;
console.log(number1 + number2);
output:90*/


/*4.Data types in JavaScript
//Numbers
    var num1 = 456;
    var num2 = 78.90;

//String
    var str1 = "this is a string";
    var str2 = "this is also a string";

//objects
var marks = {
    Mynuddin:99,
    Nizamuddin:98,
    Tajuddin:80,
    Ismail:75.977
}

//Booleans
    var a = true;
    var b = false;
    console.log(marks);

//var und=undefined
    var und = undefined;
    console.log(und);
//output:undefined

var n = null;
console.log(n);
//output:null*/

/*
At a very high level, there are two types  in JavaScript
1.Primitive Datatypes:undefined, null, number, string, boolean,symbol
2.Reference Datatypes:Arrays and Objects
*/


// var arr =[1,2,"Mynuddin",4,5]
// console.log(arr);


/*Operators in JavaScript
//(i).Arithmetic Operators:AudioDestinationNode,Subtraction,Multiplication,Division
 var a =34;
 var b =56;
 console.log("The value of a + b is ", a+b);
 console.log("The value of a - b is ", a-b);
 console.log("The value of a * b is ", a*b);
 console.log("The value of a / b is ", a/b);*/


/*(ii).Assignment operators
var c = b;
c += 2;
c -= 2; //c =c-2; 
c *= 2;
c /= 2;
console.log(c);*/

/*(iii).Comparison Operators
var x = 34;
var y = 56;
console.log(x == y );
console.log(x >= y );
console.log(x <= y ); 
console.log(x > y );
console.log(x > y );*/


/*(iv).Logical Operators
logical And 
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);*/

/*logical or
console.log(true || true);
console.log(true || false);
console.log(false|| true);
console.log(false|| false);*/

/*logical Not
console.log(!true);
console.log(!false);*/


/*Function in JavaScript
//DRY = Do not Repeat Yourself
function avg(a , b){
    c=(a+b)/2;
    return c;
}
c1 = avg (4 , 6);
c2 = avg (14 , 16);
console.log(c1 , c2);*/


/*Conditionals in JavaScript
 var age = 34;
 // Single  if statement
 if(age >18){
    console.log("You are Major");
 }

 //if-else statement
 if(age >18){
    console.log("You are Major");
 }
 else{
    console.log("You are minor Right now");
 }

 //if-else Ladder
 var age = 34;
if(age < 10){
    console.log("You are a kid");
}
elseif(age < 18){
    console.log("Now you are a minor");
}
elseif(age > 18){
    console.log("Now you are a major");
}
elseif(age > 21){
    console.log("Now you are a major");
}
elseif(age > 25){
    console.log("Now you are to get marriage");
}
else{
    console.log("Now then is your choice");
}
 console.log("End of ladder");*/

/*var arr = [1,2,3,4,5,6,7];
console.log(arr);
for(var i = 0; i<arr.length;i++){
    console.log(arr[i])
}*/


/*var arr = [1,2,3,4,5,6,7];
arr.forEach(function(element){
    console.log(element)
})*/


/*let j = 0;
const ac = 0;
ac++; 
ac=ac+1;*/


/*var arr = [1,2,3,4,5,6,7];
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}*/



/*var arr = [1,2,3,4,5,6,7];
let j = 0;
do{
    console.log(arr[j]);
    j++;
 } while (j < arr.length);*/

//Break Statement
/*var arr = [1,2,3,4,5,6,7];
for(var i = 0; i<arr.length;i++){
    if(i == 2){
        break;
    }
    console.log(arr[i])
}*/

//Continue Statement
/*var arr = [1,2,3,4,5,6,7];
for(var i = 0; i<arr.length;i++){
    if(i == 2){
        continue;
    }
    console.log(arr[i])
}*/


/*let myArr = ["Mynuddin","Nizamuddin", 5, "Ismail6", true];
//Array Methods
console.log(myArr.length);
//myArr.pop();
//myArr.push("Tajuddin")
//myArr.shift()
const newLen = myArr.unshift("Tajuddin")
console.log(newLen);
console.log(myArr);*/
 
/*
//String Methods in JavaScript
let myLovelyString = "Thee Code Technologies Private Limited";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("Technologies"))
//console.log(myLovelyString.lastIndexOf("limited"))
//console.log(myLovelyString.slice(1,4))
// d = myLovelyString.replace("Thee","Alchemy");
console.log(d, myLovelyString)
*/


/*let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());*/


/*DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = " red";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
tn = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendchild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replacechild(createdElement2,createdElement);*/
// removechild(element); -----> removes an element


 /*Selecting using Query
 sel = document.querySelector('.container')
console.log(sel);
sel = document.querySelectorAll('.container')
console.log(sel)*/

/*function clicked(){
    console.log('The button was clicked')
}
window.onload = function(){
    console.log('The document was loaded')
}*/


//Events in JavaScript
/*firstContainer.addEventListener('click',function(){
        console.log("clicked on container");
})

firstContainer.addEventListener('mouseover',function(){
    console.log("mouse on container");
})

firstContainer.addEventListener('mouseout',function(){
    console.log("mouse out of container");
})

firstContainer.addEventListener('mouseup',function(){
    console.log("mouse up of container");
})

firstContainer.addEventListener('mousedown',function(){
    console.log("mouse down of container");
})


firstContainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log("Clicked on container")
})*/


//Arrow Functions
 /*function sum(a, b){
    return a+b;
 }
sum =(a, b)=>{
    return a+b;   
}*/

/*
//SetTimeout and setinterval
logkaro =() =>{
    console.log("Iam your log")
}
//setTimeout(logkaro,2000);
setInterval(logkaro,1000);
//use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
clr=setInterval(logkaro,2000);
*/


//JavaScript localstorage
/*localStorage.setItem('name','tajuddin')
localStorage
localStorage.getItem('name')
localstorage.removeItem('name')
localStorage.clear();*/

//Json:JavaScript Object Notation
/*obj = {name:"tajuddin",length:1,a:{this:`tha"t`}}
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
Parsed.JSON.parse(`{"name":"tajuddin","length":1,"a":{this":"that"}}`)
console.log(parsed);*/


//Template literals-Backticks
a=34;
console.log(`this is my ${a}`)









































































