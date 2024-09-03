// var x = "x";
// function findName() {
// 	console.log(x);
// 	var b = "b";
// 	return printName();
// }

// function printName() {
// 	console.log(x);
// 	var c = "c";
// 	return "Himansu Naik";
// }

// function sayMyName() {
// 	var a = "a";
// 	return findName();
// }

// sayMyName();

/* In Javascript our lexical scope (available data + 
variable where the function was defined) determines our available variables. Not
where the function is called (dynamic scope)*/

function sayMyName() {
	var a = "a";
	return function findName() {
		var b = "b";
		// console.log(a);
		console.log(c); // c is not defined
		return function printName() {
			var c = "c";
			// console.log(c);
			// console.log(b);
			// console.log(a);
			return "Himansu Naik";
		};
	};
}

sayMyName()()(); // try one by one ()
// global scope is the outer most scope
