// senior javascript interview
// call() apply() bind()

// function a() {
// 	console.log("hii");
// }

// a.call(); // hii
// a(); // this is the shorthand
// a.apply();

// const wizard = {
// 	name: "Merlin",
// 	// health: 100;
// 	health: 50,
// 	heal() {
// 		return (this.health = 100);
// 	},
// };

// // how can we borrow heal method in archer
// // DRY

// const archer = {
// 	name: "Robin Hood",
// 	health: 30,
// };

// wizard.heal(); // 100
// not changed

// const wizard = {
// 	name: "Merlin",
// 	// health: 100;
// 	health: 50,
// 	heal() {
// 		return (this.health = 100);
// 	},
// };

// // how can we borrow heal method in archer
// // DRY

// const archer = {
// 	name: "Robin Hood",
// 	health: 30,
// };

// console.log("1", archer);
// wizard.heal.call(archer);
// console.log("2", archer);
// calls a method of an object, substituting another object for the current object.

const wizard = {
	name: "Merlin",
	health: 50,
	heal(num1, num2) {
		return (this.health += num1 + num2);
	},
};

const archer = {
	name: "Robin Hood",
	health: 30,
};

console.log("1", archer);
// wizard.heal.call(archer, 50, 30);
// wizard.heal.apply(archer, 50, 30, 30, 20); // the difference b/w call and apply is in apply more parameters in this or an array of parameters
// wizard.heal.apply(archer, [50, 30]);
// wizard.heal.apply(archer, [100, 30]); // the difference b/w call and apply is in apply more parameters in this or an array of parameters
// wizard.heal.bind(archer, 100, 30); // the difference b/w call and apply is in apply more parameters in this or an array of parameters

const healArcher = wizard.heal.bind(archer, 100, 30);
healArcher();

console.log("2", archer);

const obj = {
	name: "Billy",
	sing() {
		console.log("a", this);
		var anotherFunc = function () {
			console.log("b", this);
		};
		return anotherFunc.bind(this);
	},
};

obj.sing()();
