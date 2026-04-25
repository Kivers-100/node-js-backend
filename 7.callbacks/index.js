const fs = require('fs');   

function person(name, callbackFunction){
   console.log(`Hello ${name}`);
   callbackFunction();
   
}

function address(){
    console.log("Zimbabwe");  
}

person("Kivers", address);

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err); 
        return;     
    }
        
    console.log("File content:", data);
    
});