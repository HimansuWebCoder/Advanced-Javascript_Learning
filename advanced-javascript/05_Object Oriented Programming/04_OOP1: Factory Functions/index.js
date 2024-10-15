const elf = {
	name: "Orwell",
	weapon: "bow",
	attack() {
		return "attack with " + elf.weapon;
	},
};

// elf.attack();

const elf2 = {
	name: "Sally",
	weapon: "bow",
	attack() {
		return "attack with " + elf.weapon;
	},
};

elf.attack();
elf2.attack();

// Factory Functions
function createElf(name, weapon) {
	return {
		name: name,
		weapon: weapon,
		attack() {
			return "attack with " + weapon;
		},
	};
}

const peter = createElf("Peter", "stones");
peter.attack();
const himansu = createElf("Himansu", "Axe");
himansu.attack();
