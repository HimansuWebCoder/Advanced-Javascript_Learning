// Closures
function a() {
	let grandpa = "grandpa";
	return function b() {
		let father = "father";
		// let random = 128484733;
		return function (c) {
			let son = "son";
			return `${grandpa} > ${father} > ${son}`;
		};
	};
}

a(); // [Function: b]
a()(); // [Function: c]
a()()(); // 'grandpa > father > son'

const one = a();
b();

// function boo(string) {
// 	return function (name) {
// 		return function (name2) {
// 			console.log(`${string} ${name} ${name2}`);
// 		};
// 	};
// }

// using arrow function

const boo = (string) => (name) => (name2) =>
	console.log(`${string} ${name} ${name2}`);

// boo("himansu");
// boo("himansu")("rinky");
// boo("himansu")("rinky")("sipu");
// boo("hi")("tim")("becca");

// And you haven't realized why I get so excited (andrei neagoie) about closures and why you
// should too, is that we can have some hidden powers now.

const boo = (string) => (name) => (name2) =>
	console.log(`${string} ${name} ${name2}`);

const booString = boo("hi");
// 5 years
const booStringName = booString();

// So I can't wait five years and hold on to information in memory;
// this hold in memory even after 5 years
// hold on in memory doesn't get deleted and I can call it whenever I want.
// Let's take a break and revisit this idea some more to understand its true power.
