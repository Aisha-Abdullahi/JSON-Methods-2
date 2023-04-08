// JSON.parse(): converts a JSON string to a JavaScript object.
// JSON.stringify(): converts a JavaScript object to a JSON string.
// JSON.parse() and JSON.stringify() methods can be used to transfer data between a client and a server, or between different systems that communicate with JSON.


// Convert a JavaScript object to a JSON string
const myObj = { name: "Aisha", age: 40, city: "Nairobi" };
const myJSON = JSON.stringify(myObj);

// Output the JSON string
console.log(myJSON); // Output: {"name":"John","age":30,"city":"New York"}

// Convert a JSON string to a JavaScript object
const myObj2 = JSON.parse(myJSON);

// Output the JavaScript object
console.log(myObj2); // Output: { name: "John", age: 30, city: "New York" }


