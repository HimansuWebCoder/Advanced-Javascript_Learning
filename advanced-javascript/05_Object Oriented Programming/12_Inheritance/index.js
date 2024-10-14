// class Elf {
// 	constructor(name, weapon) {
// 		this.name = name;
// 		this.weapon = weapon;
// 	}
// 	attack() {
// 		return "attack with " + this.weapon;
// 	}
// }

// const fiona = new Elf("Fiona", "ninja stars");
// console.log(fiona); // Elf { name: 'Fiona', weapon: 'ninja stars' }
// const ogre = { ...fiona };
// console.log(ogre); // { name: 'Fiona', weapon: 'ninja stars' }
// console.log(ogre.__proto__); // [Object: null prototype] {}
// console.log(fiona.__proto__); // {}
// console.log(fiona === ogre); // false
// console.lgo(ogre.attack()); // ogre.attack is not a function

class Character {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
	attack() {
		return "attack with " + this.weapon;
	}
}

class Elf extends Character {
	constructor(name, weapon, type) {
		// console.log(this);
		super(name, weapon); //
		// console.log(this);
		this.type = type; // in herre this refers to Elf not Character so we have a super keyword
		// console.log(this); //  this keyword simply says who am i , who's calling me ?
	}
}

class Ogre extends Character {
	constructor(name, weapon, color) {
		super(name, weapon);
		this.color = color;
	}
	makeFort() {
		return "strongest fort in the world made";
	}
}

// const fiona = new Elf("Fiona", "ninja stars");
// console.log(fiona); // Elf { name: 'Fiona', weapon: 'ninja stars' }
const prashant = new Elf("Prashant", "Cloth", "House");
console.log(prashant); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
console.log(prashant.attack()); // attack with Cloth

const shrek = new Ogre("Shrek", "club", "green");
console.log(shrek);
console.log(shrek.makeFort());
// but if
// console.log(prashant.makeFort()); // prashant.makeFort is not a function
