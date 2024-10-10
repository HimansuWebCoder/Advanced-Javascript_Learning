// function fail() {
// 	try { // try won't alone not handle error we need catch block
// 		throw new Error("oopsie!!!");
// 		console.log("this works");
// 	}
// }

// fail(); // SyntaxError: Missing catch or finally after try

// function fail() {
// 	try {
// 		// try won't alone not handle error we need catch block
// 		throw new Error("oopsie!!!");
// 		console.log("this works");
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// }

// fail(); // oopsie!!!

// function fail() {
// 	try {
// 		// try won't alone not handle error we need catch block
// 		throw new Error("oopsie!!!");
// 		console.log("this works");
// 	} catch (error) {
// 		console.log(error.message);
// 	} finally {
// 		console.log("still good");
// 		return "returning fail";
// 	}

// 	console.log("!!!!!!!!:"); // never run inside this after finally this
// }

// fail();
// oopsie!!!
// still good
// returning fail

// try {
// 	try {
// 		something();
// 	} catch (e) {
// 		throw new Error(e);
// 	}
// } catch (e) {
// 	console.log("got it", e);
// }

// got it Error: ReferenceError: something is not defined
// at <anonymous>:6:9

// this try catch works with sync error or code

// this is not working with asynchornous code or error
try {
	setTimeout(function () {
		fakevariable;
	}, 1000);
} catch (e) {
	console.log("got it", e);
}

// 1
