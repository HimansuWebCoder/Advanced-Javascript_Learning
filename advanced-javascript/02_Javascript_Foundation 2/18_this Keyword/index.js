// this - it is the object that the function is a property of
// obj.someFunc(this)
// in here this refers to the object that the function is a property of

// this // check in console

// function a() {
// 	console.log(this);
// }

// a(); // this refers to window

// window.a(); // a function is the property of window object

// function b() {
// 	"use strict";
// 	console.log(this);
// }

// b(); // undefined

// ES6 Modules have 'use strict' by default

// const obj = {
// 	// name: "Veronica", // or change to any name "Billy"
// 	name: "Billy",
// 	sing: function () {
// 		return "lalala " + this.name; // this.name means obj.name
// 	},
// };

// const obj = {
// 	// name: "Veronica", // or change to any name "Billy"
// 	name: "Billy",
// 	// it also works
// 	sing() {
// 		return "lalala " + this.name; // this.name means obj.name
// 	},
// 	singAgain() {
// 		return "lalala" + this.name + "!";
// 	},
// 	// in here don't repeat yourself (DRY) so
// };

// benefits of using this
//1: gives methods access to their object
//2: execute same code for multiple objects

// const obj = {
// 	// name: "Veronica", // or change to any name "Billy"
// 	name: "Billy",
// 	// it also works
// 	sing() {
// 		return "lalala " + this.name; // this.name means obj.name
// 	},
// 	singAgain() {
// 		return this.sing() + "!";
// 	},
// 	// wer are not repeating ourselves that good (DRY)
// };

// obj.sing(); // 'lalala Veronica'
// obj.sing(); // 'lalala Billy'
// obj.singAgain(); // lalala Billy!

//2: execute same code for multiple objects
// function importantPerson() {
// 	// console.log(window.name);
// 	console.log(this.name); // so
// }

// importantPerson(); referst to window.importantPerson() window object;

function importantPerson() {
	console.log(this.name + "!");
}

// const name = "Sunny";
var name = "Sunny"; // this works in var not in let block scope and can't accessed by global execution context
const obj1 = {
	name: "Cassy",
	importantPerson: importantPerson,
};

const obj2 = {
	name: "Jacob",
	importantPerson: importantPerson,
};

importantPerson(); // Sunny!
obj1.importantPerson(); // Cassy!
obj2.importantPerson(); // Jacob!
