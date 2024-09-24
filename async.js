const fs = require("fs");

const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;


//Synchronous function   Should never be used in real life as it blocks main thread
fs.readFileSync("./file.txt","utf8");
console.log("This will execute only after file read");


https.get("https://dummyjson.com/products/1" , (res) => {
    console.log("Fetched Data Succesfully");
    
});

setTimeout(()=>{
    console.log("set Timeout called afer 5 seconds");
    
},5000);



//ASYNC function
fs.readFile("./file.txt", "utf8", (err,data) =>{
console.log("File Data :",data);

});

function multiplyFn(a,b){
    const result =a + b;
    return result;
}


var c=multiplyFn(a,b);

console.log("Multiplication result is :" ,c);



//1st hello world and synchronous operations will be printed
//then async operations will be printed
//in async operations 1st file read write then second api data is fetched and at last timeout will happen after 5 seconds 

