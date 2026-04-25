
const fs = require('fs');
const path = require('path');

// Define the directory path to create a directory synchronously
const directoryPath = path.join(__dirname, 'data');

// Create a directory synchronously
if (!fs.existsSync(directoryPath))  {
  fs.mkdirSync(directoryPath);
  console.log('Directory created successfully!');

}

//Create a file synchronously
const filePath = path.join(directoryPath, "input.txt");
fs.writeFileSync(filePath, "File created by Kivers synchronously!");
console.log('File created successfully!');

//Read a file synchronously
const fileContent = fs.readFileSync(filePath, 'utf-8');
console.log('File Content:', fileContent);