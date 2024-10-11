const a = 1;
const b = 10;
const c = 100;

// call stack
console.log("1");
console.log("2");
console.log("3");

const one = () => {
	const two = () => {
		console.log("4");
	};
	two();
};

console.log("4");
two();
one();
// CALL STACK
// First in last out
// JS is single threaded

// Stack overflow
function foo() {
	foo();
}

foo(); // RangeError: Maximum call stack size exceeded
// recursion here

// async
console.log("1");
// setTimeout(() => {
// 	console.log("2");
// }, 2000);
// console.log("3");

setTimeout(() => {
	console.log("2");
}, 0);
console.log("3");

setTimeout(() => {
	console.log("2");
}, 2000); // pop out and when empty then
// console.log('3');
callback();
// CALL STACK

setTimeout(), 2000;
// WEB API

// callback()
// CALLBACK QUEUE

// EVENT LOOP

element.addEventListener("click", () => {
	console.log("click");
});
