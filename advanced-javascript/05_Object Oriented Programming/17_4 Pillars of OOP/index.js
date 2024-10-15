// 4 Pillars of OOP
// Polymorphism
// Inheritance
// Abstraction
// Encapsulation

// Clear + Understandable
// Easy to Extend
// Easy to Maintain
// Memory Efficient
// DRY

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
		super(name, weapon);
		this.type = type;
	}
	attack(cry) {
		// we can also add super in this
		return "attack with " + cry;
	}
}

class Ogre extends Character {
	constructor(name, weapon, color) {
		super(name, weapon);
		this.color = color;
	}

	attack() {
		return "arghhhhhh";
	}

	makeFort() {
		return "strongest fort in the world made";
	}
}

// Ogre.prototype.makeFort =

const prashant = new Elf("Prashant", "Cloth", "House");
const shrek = new Ogre("Shrek", "club", "green");
console.log(prashant.attack("weee")); // attack with weee
console.log(shrek.attack()); // arghhhhh
