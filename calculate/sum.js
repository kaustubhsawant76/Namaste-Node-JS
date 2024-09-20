 //export
  var x="kaustubh sawant";
//export
 function calculateSum (a,b){
    const sum = a + b;
    console.log(sum);
    

}

// module.exports = calculateSum;//single export
module.exports = { x: x, //x
    calculateSum : calculateSum,  //calculateSum
 
};//multiple export wrapped in a object
//module.exports.x= x;
//module.exports.calculateSum= calculateSum;//since module.exports is an empty object


//module protect their variables and function var x created in one module is different than other module until there is no export import included 
//due to this every model has its private place