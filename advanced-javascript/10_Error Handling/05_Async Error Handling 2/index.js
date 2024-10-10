// async function() {
// 	try {
// 		await Promise.reject('oopsies')
// 	} catch (err) {
// 		console.log(err)
// 	}
// 	console.log('is this still good?')
// }
// in console and node
// VM24:1 Uncaught SyntaxError: Function statements require a function name

// we can IIFE

// (async function () {
// 	try {
// 		await Promise.reject("oopsies");
// 	} catch (err) {
// 		console.log(err);
// 	}
// 	console.log("is this still good?");
// })();
// oopsies
// is this still good?
// Promise {}

// or multiple Promise

// (async function () {
// 	try {
// 		await Promise.resolve("oopsie #1");
// 		await Promise.reject("oopsies #2");
// 	}
// 	console.log("is this still good?");
// })();

// oopsie #1
// is this still good?

// if missing catch block
// SyntaxError: Missing catch or finally after try

(async function () {
	await Promise.resolve("oopsie #1");
	await Promise.reject("oopsie #2");
	console.log("is this still good?");
})();
// warning UnhandlePromiseRejection
