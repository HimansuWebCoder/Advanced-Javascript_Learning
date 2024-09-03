// Hoisting:- is the behavior of moving the variables or function
// declarations to the top of their respective environments.
// During compilation phase, variables are partially hoisted and function
// declarations are hoisted.

// console.log("1---------");
// console.log(teddy);
// console.log(sing());
// var teddy = "bear";
// function sing() {
// 	console.log("ohhh la la la");
// }

// during creation phase
// variables are partially hoisted
// underneath the hood this is what it might look like with hoisting
// console.log("1---------");
// var teddy = undefined;
// function sing() {
// 	console.log("ohhh la la la");
// }
// console.log(teddy);
// console.log(sing());
// var teddy = "bear";

// console.log("1---------");
// console.log(teddy);
// console.log(sing());
// var teddy = "bear";
// (function sing() {
// 	console.log("ohhh la la la");
// });

// sing is not defined because this was not hoisted

// console.log("1---------");
// console.log(teddy);
// console.log(sing());
// let teddy = "bear"; // (let or const)
// (function sing() {
// 	console.log("ohhh la la la");
// });

// Cannot access 'teddy' before initialization (in node)
// teddy is not defined; (in console)

console.log("1-------");
console.log(teddy);
// console.log(sing());
// console.log(sing2()); // if we move this after assigned function below
// console.log(sing2) // undefined
var teddy = "bear";

// function expression
var sing2 = function () {
	console.log("uhh la la la");
};
console.log(sing2());

// function declaration
function sing() {
	console.log("ohhh la la la");
}
