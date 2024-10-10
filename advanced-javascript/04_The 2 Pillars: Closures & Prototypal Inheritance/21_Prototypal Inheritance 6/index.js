// Prototypal Inheritance 6
function multiplyBy5(num) {
	return num * 5;
}

multiplyBy5.prototype; // {}
// multiplyBy5.__proto__; // f ()  { [native code] }
Function.prototype; // f () { [native code] } same
// multiplyBy5.__proto__.__proto__ // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
Object.prototype; // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …} same
// multiplyBy5.__proto__.__proto__.__proto__ // null
typeof Object; // 'function'
typeof Function; // 'function'
typeof {}; // object // this is now an actual object not Object constructor
typeof Object.prototype; // object  // very last object
// see in mdn standards built in objects section
// constructor start with capital letter and this is a function

const obj = {};
obj.prototype; // undefined
const arr = [];
arr.prototype; // undefined
"string".prototype; // undefined
// because that is a primary type not a prototype of anything
String.prototype; // String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …} // all string methods
Boolean.prototype; // Boolean {false, toString: ƒ, valueOf: ƒ} ALL METHODS IN HERE boolean all methods
