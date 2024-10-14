// ES6 Class
class Elf {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
	attack() {
		return "attack with " + this.weapon;
	}
}

// const peter = Elf("Peter", "stones");
const peter = new Elf("Peter", "stones"); // instantiation when add new means instance of ...
console.log(peter instanceof Elf); // true
// console.log(Elf instanceof peter);
console.log(peter.attack());
const sam = new Elf("Sam", "fire");
console.log(sam.attack());

// In javascript, classes are still just objects.
// Everything in Javascript is an object.

// So in an interview, if you get asked, Hey, Does Javascript have classes ?
// Well, yes, they do as syntactic sugar, but clas keyword is still just prototype inheritance
// ans some people call this pseudo classical inheritance because it's not real classical inheritance

// you may be asking yourself,  why don't we just add attack to the constructor?
// Why do we just put it outside over there ?
// And this is actually a very interesting question that you might get in interview.
// You see, every time we use new keyword & create or instantiate a clas, the constructor function gets run.
// because this constructor function needs to get run because each elf has a unique name and perhaps a unique weapon
// but attack is shared by all instances of the class.
// If we moved attack to the constructor.
// That's going to take up memory space. right ?
// one function in one location that all these instances can access.

// I hope you start to see the beauty in efficiency.
