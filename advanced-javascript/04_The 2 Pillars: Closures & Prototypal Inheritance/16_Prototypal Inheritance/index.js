// Prototypal Inheritance
const array = [];
// array.__proto__; // [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
// when doubt something see in console that inheritance and prop related apply what should be apply that method available
// array.__proto__.__proto__ // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// array.toString() // "" // prototype chain

function a() {} // undefined
// a.__proto__; // f () { [native code] } // the base function from which all function made
// a.__proto__.__proto__ // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}

const obj1 = {}; // undefined
// obj1.__proto__ // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// base object
