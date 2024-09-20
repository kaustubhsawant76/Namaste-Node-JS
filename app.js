//import { calculateSum } from "./sum.js";
//import { x } from "./sum.js";

const util=require("node:util"); //a util method given to us by node which has many methods and operation

//util. //util. we get many methods and operation 


require("./abc");    //used as import we used in react there is no need to write export for just console.log
//const {x,calculateSum}=require("./calculate/sum"); //for variables and function we import like this
//const {multiply}=require("./calculate/multiply");
const data=require("./data.json");

const {multiply,calculateSum,x}=require("./calculate"); //imports merged and created a single export in index.js
var name="Kaustubh Sawant";
//other file is also known as module
var a=10;

var b=20;
console.log(data);


calculateSum(a,b); //imported object
//calculateSum(a,b);
multiply(a,b);

//console.log(x);


 console.log(x);

//console.log(x);



// console.log(name);
 //console.log(a+b);

// console.log(global);

// console.log(globalThis);  //universal global object

// console.log(globalThis === global); //true





