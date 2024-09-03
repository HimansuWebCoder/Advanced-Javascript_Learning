// // during hoisting phase
// one = undefined;

// var one = 1;
// var one = 2;

// console.log(one); // 2

// a();

function a() {
	console.log("hi");
}

a(); // or here

function a() {
	console.log("bye");
}

// a(); // or here

// in global execution context has creation phase and execution phase
