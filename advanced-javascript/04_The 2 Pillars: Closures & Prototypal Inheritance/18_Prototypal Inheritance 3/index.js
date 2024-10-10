// Prototypal Inheritance 3

let dragon = {
	name: "Tanya",
	fire: true,
	fight() {
		return 5;
	},
	sing() {
		if (this.fire) {
			return `I am ${this.name}, the breather of fire`;
		}
	},
};

let lizard = {
	name: "Kiki",
	fight() {
		return 1;
	},
};

// lizard.__proto__ = dragon;
// for (let prop in lizard) {
// 	console.log(prop); // name fight fire sing
// }

// only lizard property
for (let prop in lizard) {
	if (lizard.hasOwnProperty(prop)) {
		console.log(prop); // name fight
	}
}

lizard.ahha(); // typeerror lizard.ahha() is not a function
lizard.ahha; // undefined

// const obj = {}
// obj.__proto__ // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// obj.__proto__.__proto__ // null
