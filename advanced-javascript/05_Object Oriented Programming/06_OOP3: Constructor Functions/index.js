// Constructor Functions
// Constructor Functions strt with capital letter
// function Elf(name, weapon) {
// 	this.name = name;
// 	this.weapon = weapon;
// }

// not working
// const peter = elf("Peter", "stones");
// console.log(peter.attack())
// const sam = elf("Sam", "fire");
// console.log(sam.attack())

// but

// this works
// const peter = new Elf("Peter", "stones");
// const sam = new Elf("Sam", "fire");
// sam.name;
// console.log(sam.name);
// console.log(peter.name);

// if start in new keyword that is constructor function start
// and function should be start from capital letter

// const Elf1 = new Function(
// 	"name",
// 	"weapon",
// 	`this.name = name; this.weapon = weapon;`,
// );

// const sarah = new Elf1("Sarah", "fireworks");
// sarah
// console.log(sarah);
// console.log(sarah.name);
// console.log(sarah.weapon);

function Elf(name, weapon) {
	this.name = name;
	this.weapon = weapon;
}

// Elf.prototype.attack = function () {
// 	return "attack with " + this.weapon;
// };

// is use arrow function () =>
Elf.prototype.attack = () => {
	return "attack with " + this.weapon;
};
// this give undefined we have seen this before
// because arrow function are lexically scoped in this case this is global object

const himansu = new Elf("Himansu", "stones");
console.log(himansu.attack());
const prashant = new Elf("Prashant", "fire");
console.log(prashant.attack());
// sam.name;
// sam.attack();
console.log(prashant.name); // Prashant
console.log(prashant.attack()); // attack with fire
