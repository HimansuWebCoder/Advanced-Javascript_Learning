// Prototypal Inheritance 5
// __proto__ =
// we shouldn't use this due various reason performance and other
// safe way to use -->
let human = {
	mortal: true,
};

let socrates = Object.create(human);
console.log(socrates); // {}
console.log(socrates.mortal); // true
socrates.age = 45;
console.log(socrates); // {age: 45}
console.log(human); // {mortal: true}
console.log(human.isPrototypeOf(socrates)); // true
