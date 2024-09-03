const a = function () {
	console.log("a", this);
	const b = function () {
		console.log("b", this);
		const c = {
			hi: function () {
				console.log("c", this);
			},
		};
		c.hi();
	};
	b();
};

a();

// window.a(b());
// like this

// const obj = {
// 	name: "Billy",
// 	sing() {
// 		console.log("a", this);
// 		var anotherFunc = function () {
// 			console.log("b", this);
// 		};

// 		anotherFunc();
// 	},
// };

// obj.sing(); // check in console

// this keyword is dynamically scoped
// so how to solve this issue

// const obj = {
// 	name: "Billy",
// 	sing() {
// 		console.log("a", this);
// 		// arrow function
// 		var anotherFunc = () => {
// 			console.log("b", this);
// 		};

// 		anotherFunc();
// 	},
// };

// obj.sing();
// problem solved

const obj = {
	name: "Billy",
	sing() {
		console.log("a", this);
		// arrow function
		var anotherFunc = () => {
			console.log("b", this);
		};

		return anotherFunc.bind(this);
	},
};

obj.sing();
obj.sing()();

// anohter way to solve the this issue and tricky

const obj = {
	name: "Billy",
	sing() {
		console.log("a", this);
		var self = this;
		var anotherFunc = () => {
			console.log("b", this);
		};

		// return anotherFunc();
		// or
		return anotherFunc;
	},
};

// obj.sing();
obj.sing()();
