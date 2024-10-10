// Prototypal Inheritance 4
const obj = { name: "Sally" };
obj.hasOwnProperty("name"); // true
obj.hasOwnProperty("hasOwnProperty"); // false

function a() {}
a.hasOwnProperty(""); // false
a.hasOwnProperty("call"); // false
a.hasOwnProperty("apply"); // false
a.hasOwnProperty("bind"); // false
a.hasOwnProperty("name"); // true
a.name; // "a"

// A function is a special type of object is a callable object

function multiplyBy5(num) {
	return num * 5;
}

// multiplyBy5.__proto__ // f () { [native code]}
// right click the native above and select store as global variable option
// temp1
// temp1. (all properties show)
// temp1.apply or bind or call

// multiplyBy5.__proto__; // f () { [native code] }
Function.prototype; // f () { [native code] } same

Object.prototype; // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// Object.prototype.__proto__; // null

const array = []
[].hasOwnProperty('map') // false
// array.__proto__.hasOwnProperty('map') // true
Array.prototype // [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
// array.__proto__ // [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …] same

