function two() {
	var isValid; // undefined
}

function one() {
	var isValid = true; // local env
	two(); // new EC (execution context created)
}

var isValid = false;
one();

// two() -- undefined   and pop up below one by one
// one() -- true
// global() --false
// we also have 'one' and 'two' functions in the global variable environment.

// Keep in mind, each execution context has its own variable environment.
