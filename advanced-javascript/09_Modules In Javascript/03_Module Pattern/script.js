// var user = {}; // global namespace
// // var user = {name:};
// // var user = {nickName:};

// function signin(user) {
// 	var textfield = 'hehehe'
// }

// function isHuman(user) {
// 	...
// }

// // tight coupling

// var harry = "potter";
// var voldemort = "He who must not be named";

// function fight(char1, char2) {
// 	var attack1 = Math.floor(Math.random() * char1.length);
// 	var attack2 = Math.floor(Math.random() * char2.length);
// 	console.log(attack1);
// 	return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
// }

// fight(harry, voldemort);

// Global Scope
// Module Scope
// Function Scope
// Block Scope - let and const

//IIFE
// Module Pattern
var fightModule = (function () {
	// all code here written are private
	// private variables
	var harry = "potter";
	var voldemort = "He who must not be named";
	// var privateFunctioN() we can also do for private like this

	function fight(char1, char2) {
		var attack1 = Math.floor(Math.random() * char1.length);
		var attack2 = Math.floor(Math.random() * char2.length);
		console.log(attack1);
		return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
	}
	// console.log(fight(harry, voldemort));
	return {
		fight: fight,
	};
})();

// fightModule in console checkout or you can use this in any other places
// fightModule.fight("ron", "hagrid")
// fightModule.fight("himansu", "rohit")
// ohhh wow

// we removed global namespace
