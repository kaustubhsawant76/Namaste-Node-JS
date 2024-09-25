const fs=require("fs");
const a=100;

setImmediate(() => console.log("seImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",() =>{
    console.log("File reading cb");
    
});

setTimeout(()=> console.log("Timer expired")

,0);

process.nextTick(()=>console.log("process.Nexttick"));

function printA() {
    console.log("a=",a);
    
}

printA();
console.log("Last line of the file");

//1)a=100
//2)Last line of code
//3)process.tick
//4)promise.resolve
//5)set timeout
//6)setImmediate is called though poll[io operation is before it] but since reading operation takes time
//7)file reading db