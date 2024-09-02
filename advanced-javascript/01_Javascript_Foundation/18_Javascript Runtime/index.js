// window
// check in browser
// web apis (asynchronous)

console.log("1");
setTimeout(() => {
	console.log("2"), 1000;
});
console.log("3");

// or

console.log("1");
setTimeout(() => {
	console.log("2"), 0;
});
console.log("3");

// check also in browser who will come first
