const fs = require("fs");
const path = require("path");

// Define the directory path to create a directory asynchronously
const dirPath = path.join(__dirname, "data", "files");
const filePath = path.join(dirPath, "output.txt");

fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    console.error("Error creating directory:", err);
  }
  console.log("Directory created successfully!");

  //Create file asynchronously
  fs.writeFile(filePath, "Hello, this is an asynchronous file!", (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File written successfully!");
    }
  });

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
    } else {
      console.log("File content:", data);
    }
  });
});
