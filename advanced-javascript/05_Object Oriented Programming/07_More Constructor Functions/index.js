// Constructor Functions
function Elf(name, weapon) {
	// console.log("this", this); // here only {} show
	this.name = name;
	this.weapon = weapon;
	// var a = 5; // not add in this constructor function
	// console.log("this", this); // here show
}

console.log(Elf.prototype); // {}
Elf.prototype.attack = function () {
	return "attack with " + this.weapon;
};

// Elf.prototype.build = function () {
// 	return "house";
// };

// Elf.prototype.build = function () {
// 	function building() {
// 		return this.name + " builds a house";
// 	}
// 	// building();
// 	return building.bind(this);
// };

// or even easier by reference
Elf.prototype.build = function () {
	const self = this;
	function building() {
		return self.name + " builds a house";
	}
	return building();
};

const peter = new Elf("Peter", "stones");
// console.log(peter.attack());
// if commented out above Elf.prototype then this show peter.attack is not a function
// console.log(peter.__proto__); // {attack: [Function (anonymous)]}
// console.log(Elf.prototype);
// console.log(peter.prototype); // undefined // because peter is not a function , is an object
// console.log(peter.build()); // house
// console.log(peter.build()); // undefined
// console.log(peter.build()()); // Peter builds a house
console.log(peter.build()); // Peter builds a house
const sam = new Elf("Sam", "fire");
console.log(sam.attack());
