
const EventEmitter = require("events");
const emitter = new EventEmitter(); 

emitter.on("greet", (name) => {
  console.log(`Hello, ${name} Welcome to our event!`);
});

emitter.emit("greet", "Kivers");
