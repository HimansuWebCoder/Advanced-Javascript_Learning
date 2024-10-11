// CommonJS and AMD UMD (Asynchronous Module Definitions)

var module1 = require("module1"); // .fight;
var module2 = require("module2"); // .importedFunc2;
// this module are synchronous one by one execute so loading time too much
// so this used in server not frontend
// Node.js project more see this commonjs

function fight() {}

module.exports = {
	fight: fight,
};

// AMD
define(["module1", "module2"], function (module1Import, module2Import) {
	var module1 = module1Import; // .fight
	var fight = module1Import.fight; // or directly
	var module2 = module2Import; // .importedFunc2

	function dance() {}

	return {
		dance: dance,
	};
});

// browserify script.js > bundle.js in terminal
// global name space not affect
// order not matter anymore

//IIFE
// Module Pattern
var fightModule = (function () {
	var harry = "potter";
	var voldemort = "He who must not be named";

	function fight(char1, char2) {
		var attack1 = Math.floor(Math.random() * char1.length);
		var attack2 = Math.floor(Math.random() * char2.length);
		console.log(attack1);
		return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
	}
	return {
		fight: fight,
	};
})();
