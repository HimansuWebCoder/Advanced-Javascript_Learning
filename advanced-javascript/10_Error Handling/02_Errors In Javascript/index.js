// Errors in JS
// in js we have native error constructor function
// Error  // f Error () { [native code] }

new Error("oopie"); // Error: oopsie
throw new Error(); // VM14:1 Uncaught Error

throw "string"; // Uncaught string
throw true; // Uncaught true
throw Error; // Uncaught f Error() {[native code]}
throw new Error(); // Uncaught Error at <anonymous>:1:7
throw new Error();
4 + 3; // Error stop after this error

const myError = new Error("oopsie");
myError; // Error: oopsie at
myError.name; // "Error"
myError.message; // "oopsie"
myError.stack; // "Error: oopsie at <anonymous>:1:7"
// anonymous at means global execution context
function a() {
	const b = new Error("what??");
	return b;
}

a();
// Error: what??
// at a (<anonymous>:2:12)
// at <anonymous>:6:1

// also we access
a().stack; // 'Error: what??\n    at a (<anonymous>:2:12)\n    at <anonymous>:1:1'
new SyntaxError(); // SyntaxError
// at <anonymous>:1:1
new ReferenceError(); // ReferenceError
// at <anonymous>:1:1

something; // VM34:1 Uncaught ReferenceError: something is not defined
// at <anonymous>:1:1
