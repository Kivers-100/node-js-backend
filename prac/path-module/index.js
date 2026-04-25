
const path = require('path');

//joining path segments
const joinedPath = path.join('folder1', 'folder2', 'file.txt');
console.log('Joined Path:', joinedPath);

//getting the directory name of a path
const dirName = path.dirname('folder1/folder2/file.txt');
console.log('Directory Name:', dirName);

//getting the base name of a path
const baseName = path.basename('folder1/folder2/file.txt');
console.log('Base Name:', baseName);

//getting the extension of a path
const extName = path.extname('folder1/folder2/file.txt');
console.log('Extension:', extName);

//OR

/*
//getting the directory name of a path
const dirName = path.dirname(__filename);
console.log('Directory Name:', dirName);

//getting the base name of a path
const baseName = path.basename(__filename);
console.log('Base Name:', baseName);

//getting the extension of a path
const extName = path.extname(__filename);
console.log('Extension:', extName);
 */