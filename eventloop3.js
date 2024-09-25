//last line of the file
//process.nextTick
//promise
//setTimeout
//setImmediate
//file reading cb
//2nd process.nextTick
//2nd setImmediate
//2nd setTimeout



const fs=require("fs");

setImmediate(() => console.log("setImmediate"));
setTimeout(()=> console.log("Timer expired"),0);
Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",() =>{
    setTimeout(()=> console.log(" 2nd Timer expired"),0);

    process.nextTick(()=>console.log("2nd process.Nexttick"));
    setImmediate(() => console.log(" 2nd setImmediate"));
    console.log("File reading cb");
    
});



process.nextTick(()=>console.log("process.Nexttick"));

console.log("last line of the file");
