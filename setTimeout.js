console.log("Hello World");

var a = 1078698;
var b = 20986;

//setTimeout has trust issues if any synchronous task takes much time till then setTimeout will wait and then execute
//this callback will be only pushed to call stack in v8 once the call stack is empty
setTimeout(()=>{
    console.log("execute immediately");
    
},0);

setTimeout(()=>{
    console.log("execute after 3 seconds");
    
},3000);

function multiplyFn(a,b){
    const result =a + b;
    return result;
}


var c=multiplyFn(a,b);

console.log("Multiplication result is :" ,c);

