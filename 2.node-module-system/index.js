
const firstModule = require("./first-module");

console.log( firstModule.add(2,3));

try{

    console.log("try to divide by zero");
    let result = firstModule.divide(10,0);
    console.log(result);
    
    
}
catch(error){
    console.log("an error occured: ", error.message);
}

//module wrapper 
// (function(exports, require, module, __filename, __dirname) {
//     // module code here
// })