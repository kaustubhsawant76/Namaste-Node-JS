const fs=require("fs");
const a=100;

setImmediate(() => console.log("seImmediate"));

fs.readFile("./file.txt","utf8",() =>{
    console.log("File reading cb");
    
});

setTimeout(()=> console.log("Timer expired")

,0);

function printA() {
    console.log("a=",a);
    
}

printA();
console.log("Last line of the file");

//1)a=100
//2)Last line of code
//3)set timeout
//4)setImmediate is called though poll[io operation is before it] but since reading operation takes time
//5)file reading db