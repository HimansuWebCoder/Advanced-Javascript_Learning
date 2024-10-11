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

// still here fightModule is a global space variable
// big headeche even this is great private inside this IIFE module pattern
