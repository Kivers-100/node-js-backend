
const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder created"); 
}

const filePath = path.join(dataFolder, 'example.txt');

//syncronous way of creating
fs.writeFileSync(filePath, "This is an example file created using Node.js file system module.");
console.log("file created successfully");

const readFileContent = fs.readFileSync(filePath, "utf-8");
console.log("File content:", readFileContent);

fs.appendFileSync(filePath, "\nThis line is appended to the file.");
console.log("line appended successfully");

//asyncronous way of creating and reading file
const asyncFilePath = path.join(dataFolder, 'async-example.txt');
fs.writeFile(asyncFilePath, "This is an example file created asynchronously.", (err) => {
    if(err){
        console.error("Error creating file:", err);
        return;
    }
    console.log("Async file created successfully");


    fs.readFile(asyncFilePath, "utf-8", (err, data) => {
        if(err){
            console.error("Error reading file:", err);
            return;
        }
        console.log("Async file content:", data);
    });


    fs.appendFile(asyncFilePath, "\nThis line is appended to the async file.", (err) => {
        if(err){
            console.error("Error appending to file:", err);
            return;
        }
        console.log("Line appended to async file successfully");

        fs.readFile(asyncFilePath, "utf-8", (err, updatedData) => {
            if(err){
                console.error("Error reading file:", err);
                return;
            }
            console.log("Updated async file content:", updatedData);
        });
    });
});