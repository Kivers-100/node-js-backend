
const useCase =  require("./functionalities-container");

//addition
const addValues = useCase.add(56,5);
console.log("Addition:", addValues);    

//subtraction
const subtractValues = useCase.subtract(56,5);
console.log("Subtraction:", subtractValues);

//division
const divisionValues = useCase.division(56,5);
console.log("Division:", divisionValues);