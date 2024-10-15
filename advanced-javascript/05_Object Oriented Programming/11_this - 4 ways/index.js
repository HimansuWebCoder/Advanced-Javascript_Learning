// new binding this
function Person(name, age) {
	this.name = name;
	this.age = age;
}

const person1 = new Person("Himansu", 22);
person1; // person1 would be this, person1 === this keyword
console.log(person1);

// implicit binding - the most common one
const person = {
	name: "himansu",
	age: 22,
	hi() {
		console.log("hi" + this.name);
	},
};

// explicit binding
// const person3 = {
// 	name: "Himansu",
// 	age: 22,
// 	hi: function () {
// 		console.log("hi" + this.setTimeout);
// 	}.bind(window),
// };

// person3.hi(); // hifunction setTimeout() { [native code] }

// this --- dynamically scoped
// arrow function
const person4 = {
	name: "himansu",
	age: 22,
	hi: function () {
		var inner = () => {
			console.log("hi " + this.name); // if here not use arrow function this would be window object
		};
		return inner();
	},
};

person4.hi(); // hi himansu
