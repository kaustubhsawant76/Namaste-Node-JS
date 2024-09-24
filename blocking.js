const crypto=require("node:crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;


//SYNC Function=will block the main thread so never use it
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log("First key is generated");


//pbkdf2=Passwaord Base Key Derivation function 2
//ASYNC Function
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("Second Key is Generated");
    
});

function multiplyFn(a,b){
    const result =a + b;
    return result;
}


var c=multiplyFn(a,b);

console.log("Multiplication result is :" ,c);

