// Prototypal Inheritance 2
// let dragon = {
// 	name: "Tanya",
// 	fire: true,
// 	fight() {
// 		return 5;
// 	},
// 	sing() {
// 		return `I am ${this.name}, the breather of fire`;
// 	},
// };

let dragon = {
	name: "Tanya",
	fire: true,
	fight() {
		return 5;
	},
	sing() {
		if (this.fire) {
			return `I am ${this.name}, the breather of fire`; // // undefined becaue lizard doesn't have fire to true
		}
	},
};

dragon.sing();
dragon.fight();

let lizard = {
	name: "Kiki",
	fight() {
		return 1;
	},
};

// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard()); // I am Kiki, the breather of fire
// undefined becaue lizard doesn't have fire to true

// lizard.__proto__ = dragon;
lizard.sing(); // 'I am Kiki, the breather of fire'
lizard.fire; // true
lizard.fight(); // 1
lizard.dance(); // TypeError: lizard.dance is not a function

// dragon.__proto__; // prototype of dragon {} original base object

const dragon = {};
// dragon.__proto__ // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
dragon.isPrototypeOf(lizard); // true
lizard.isPrototypeOf(dragon); // false
