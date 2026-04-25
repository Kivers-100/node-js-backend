const { log } = require("console");
const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const modifyFileData = data.toUpperCase();

  fs.writeFile("output.txt", modifyFileData, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    log("File written successfully");

    fs.readFile("output.txt", "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
      log("File read successfully:", data);
    });
  });
});
