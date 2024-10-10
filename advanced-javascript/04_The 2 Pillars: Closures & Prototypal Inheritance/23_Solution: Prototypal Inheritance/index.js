// Solution Prototypal Inheritance
// Solution - extend the functionality of a built in object

//#1
// Date object => to have new method .lastYear() which show you last year
// 'YYYY' format.

Date.prototype.lastYear = function () {
	return this.getFullYear() - 1; // 1899
};

// if use () => function
// Date.prototype.lastYear = () => {
// 	console.log(this); // function that we called lexically scoped  ** Date Object
// 	return this.getFullYear() - 1; // TypeError: this.getFullYear is not a function
// };
new Date("1900-10-10").lastYear();
// '1899'

// or current date
new Date().lastYear(); // 2023

// #Bonus // little tricky
// Modify .map() to print 'map' at the end of each item.
Array.prototype.map = function () {
	let arr = [];
	for (let i = 0; i < this.length; i++) {
		arr.push(this[i] + "map"); // because of type coercion we need wrap it ()
	}
	return arr;
};
console.log([1, 2, 3].map());
// 1map, 2map, 3map

/* Using all that knowledge, I have two questions here that I'm going to warn you are a little bit difficult.
// You might not get them. You might have to google aroung and search around and remember, there's no such thing as a perfect programmer.
 We can't know everything. So use Google if you need to.*/
