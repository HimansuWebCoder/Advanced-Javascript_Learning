// function letAdamLogin() {
// 	let array = [];
// 	for (let i = 0; i < 100000000; i++) {
// 		array.push(i);
// 	}
// 	return "Access Granted to Adam";
// }

// letAdamLogin(); // 'Access Granted to Adam'
// yeah! this slow down the system
// there is a little bit time it takes

function letAdamLogin() {
	let array = [];
	for (let i = 0; i < 1000000; i++) {
		array.push(i);
	}
	return "Access Granted to Adam";
}

function letEvaLogin() {
	let array = [];
	for (let i = 0; i < 1000000; i++) {
		array.push(i);
	}
	return "Access Granted to Eva";
}

letAdamLogin();
letEvaLogin();

// function() simple function
// this is repeating not use DRY run
// instead of doing this manually let's

function letUserLogin(user) {
	let array = [];
	for (let i = 0; i < 10000000; i++) {
		array.push();
	}
	return "Access Granted to " + user;
}

letUserLogin("Adam"); // 'Access Granted to Adam'
letUserLogin("Eva"); // 'Access Granted to Eva'

// const giveAccessTo = (name) => "Access Granted to " + name;

// function letUserLogin(user) {
// 	//++ we now tell What data to use.
// 	let array = [];
// 	for (let i = 0; i < 100000; i++) {
// 		array.push(i);
// 	}
// 	return giveAccessTo(user);
// }

// letUserLogin("Eva");

// const giveAccessTo = (name) => "Access Granted to " + name;

// function letUserLogin(user) {
// 	//++ we now tell What data to use.
// 	let array = [];
// 	for (let i = 0; i < 10000000; i++) {
// 		array.push(i);
// 	}
// 	return giveAccessTo(user);
// }

// function letAdminLogin(admin) {
// 	let array = [];
// 	for (let i = 0; i < 50000000; i++) {
// 		array.push(i);
// 	}
// 	return giveAccessTo(user);
// }

// const giveAccessTo = (name) => "Access Granted to " + name;

// function authenticate(verify) {
// 	let array = [];
// 	for (let i = 0; i < verify; i++) {
// 		array.push(i);
// 	}
// 	return true;
// }

// function sing(person) {
// 	return "la lal la my name is " + person.name;
// }

// function letPerson(person, fn) {
// 	// ++ tell it what data to user + function.
// 	if (person.level === "admin") {
// 		fn(500000);
// 	} else if (person.level === "user") {
// 		fn(100000);
// 	}
// 	return giveAccessTo(person.name);
// }

// letPerson({ level: "user", name: "Time" }, authenticate); // 'Access Granted to Time'
// letPerson({ level: "admin", name: "Sally" }, authenticate); // 'Access Granted to Sally'
// letPerson({ level: "admin", name: "Sally" }, sing); // 'Access Granted to Sally'

// or

// const giveAccessTo = (name) => "Access Granted to " + name;

// function authenticate(verify) {
// 	let array = [];
// 	for (let i = 0; i < verify; i++) {
// 		array.push(i);
// 	}
// 	return giveAccessTo(person.name);
// }

// function sing(person) {
// 	return "la lal la my name is " + person.name;
// }

// function letPerson(person, fn) {
// 	// ++ tell it what data to user + function.
// 	if (person.level === "admin") {
// 		return fn(person);
// 	} else if (person.level === "user") {
// 		return fn(person);
// 	}
// }

// letPerson({ level: "user", name: "Time" }, authenticate); // 'Access Granted to Time'
// letPerson({ level: "admin", name: "Sally" }, authenticate); // 'Access Granted to Sally'
// letPerson({ level: "admin", name: "Sally" }, sing); // 'la lal la my name is Sally'

const multiplyBy 

multiplyByTwo
multiplyByTen 
// you try thiskb