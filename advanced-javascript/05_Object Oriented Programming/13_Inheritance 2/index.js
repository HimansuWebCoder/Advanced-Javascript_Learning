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

// Ogre.prototype.makeFort =

const prashant = new Elf("Prashant", "Cloth", "House");
console.log(prashant);
console.log(prashant.attack());

const shrek = new Ogre("Shrek", "club", "green");
console.log(shrek);
console.log(shrek.makeFort());

// console.log(Ogre.isPrototypeOf(shrek)); // false
// console.log(Ogre.prototype.isPrototypeOf(shrek)); // true
// console.log(Character.prototype.isPrototypeOf(Ogre.prototype)); // true
// console.log(Ogre.prototype.isPrototypeOf(Character)); // false

console.log(prashant instanceof Elf); // true
console.log(prashant instanceof Ogre); // false
console.log(prashant instanceof Character); // true
