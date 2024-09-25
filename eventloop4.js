const fs=require("fs");

setImmediate(() => console.log("setImmediate"));
setTimeout(()=> console.log("Timer expired"),0);
Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",() =>{
    console.log("File reading cb");
    
});

process.nextTick(()=>{
process.nextTick(()=>console.log("process.Nexttick"));
console.log("2nd nextTick");
});


console.log("last line of the file");