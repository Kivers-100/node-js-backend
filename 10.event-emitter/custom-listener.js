const EventEmitter = require("events");

class MyCustomEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = "Hello, welcome to the custom event emitter lecture!";
    }

    greet(name) {
        this.emit("greet",`${this.greeting},${name}`);
    }
}

const myCustomEmitter = new MyCustomEmitter();

//registering an event listener
myCustomEmitter.on("greet", (input) => {
    console.log("Greeting event received:", input);
});

//emitting the event
myCustomEmitter.greet("Kivers Dube");