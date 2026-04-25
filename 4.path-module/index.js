

const path = require("path");

console.log("Directory name:", path.dirname(__filename) );
console.log("File name:", path.basename(__filename));
console.log("file extension:", path.extname(__filename));

const joinPath = path.join("/users", "documents", "node","projects");
console.log("Joined path:", joinPath);

const resolvePath = path.resolve("users", "documents", "node","projects");
console.log("Resolved path:", resolvePath);

