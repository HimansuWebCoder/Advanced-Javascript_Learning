// Javascript Engine

// eval() can be very problematic
// arguments
// for in
// with
// delete
// Hidden classes
// Inline caching

// these are the things that make our code less optimized


// inline caching

function findUser(user) {
	return `found ${user.firstName} ${user.lastName}`
}

const userData {
	firstName: 'Johnson',
	lastName: 'Junior'
}

findUser(userData) // 'found Johnson Junior' over and over again and again caching


// hidden classes
function Animal(x, y) {
	this.x = x;
	this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

obj1.a = 30;
obj2.b = 100;
obj2.b = 30;
obj2.a = 100;

delete obj1.x = 30;