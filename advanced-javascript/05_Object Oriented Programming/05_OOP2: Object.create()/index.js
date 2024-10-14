// Factory Functions
// const elfFunctions = {
// 	attack() {
// 		return "attack with " + this.weapon;
// 	},
// };

// function createElf(name, weapon) {
// 	return {
// 		name: name,
// 		weapon: weapon,
// 		attack() {
// 			return "attack with " + weapon;
// 		},
// 	};
// }

// const peter = createElf("Peter", "stones");
// // peter.attack();
// peter.attack = elfFunctions.attack;
// const himansu = createElf("Himansu", "Axe");
// // himansu.attack();
// himansu.attack = elfFunctions.attack;

// Object.create()
const elfFunctions = {
	attack() {
		return "attack with " + this.weapon;
	},
};

function createElf(name, weapon) {
	let newElf = Object(elfFunctions);
	// console.log(newElf);
	// console.log(newElf.__proto__);
	newElf.name = name;
	newElf.weapon = weapon;
	return newElf;
}

const peter = createElf("Peter", "stones");
peter.attack();
console.log(peter.attack());
const sam = createElf("Sam", "fire");
sam.attack();
console.log(sam.attack());
