// Lexical Environment
// Lexical scope, Lexical analysis what does means this
// Lexical means where you write something

function printName() {
	return "Himansu Naik";
}

function findName() {
	function a() {}
	return printName();
}

function sayMyName() {
	return findName();
}

window.sayMyName(); // Himansu Naik

// In Javascript our lexical scope (available data + variables
// where the function was defined)
// determines our available variables. Not where the function is called (dynamic scope)
