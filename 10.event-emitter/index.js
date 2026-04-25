const EventEmitter = require("events");
const myFirstEmitter = new EventEmitter();

//registering an event listener
myFirstEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}! Welcome to the event emitter lecture.`);
}); 

//emitting the event
myFirstEmitter.emit("greet", "Kivers Dube");