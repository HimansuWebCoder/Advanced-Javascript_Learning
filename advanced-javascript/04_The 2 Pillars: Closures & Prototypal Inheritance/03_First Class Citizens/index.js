// Functions are first class citizens in JS
//1
var stuff = function () {};
//2
function a(fn) {
	fn();
}

// a(function () {
// 	console.log("hi there"); // hi there
// });

// a("function () {console.log('hi there')}"); // fn is not a function

//3
function b() {
	return function c() {
		console.log("bye");
	};
}

b(); // [Function: c]
b()(); // bye

// or

var d = b();
d(); // bye
