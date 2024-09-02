// setTimeout(() => {
// 	console.log("1", "is the loneliest number");
// }, 0);
// setTimeout(() => {
// 	console.log("2", "can be as bad as one");
// }, 10);
// console.log("3", "is a crowd");

// result order and check also in browser
// 3 is a crowd
// 1 is the loneliest number
// 2 can be as bad as one

// or now

// setTimeout(() => {
// 	console.log("1", "is the loneliest number");
// }, 1000);
// setTimeout(() => {
// 	console.log("2", "can be as bad as one");
// }, 10);
// console.log("3", "is a crowd");

// result
// 3 is a crowd
// 2 can be as bad as one
// 1 is the loneliest number

// or now

setTimeout(() => {
	console.log("1", "is the loneliest number");
}, 0);
Promise.resolve("hi").then(() => console.log("2"));
console.log("3", "is a crowd");

// result
// 3 is a crowd
// 2
// 1 is the loneliest number
