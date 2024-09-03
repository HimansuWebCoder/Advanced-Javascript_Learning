"use strict";
function weird() {
	height = 50; // not declared var , let and const
	var height = 50;
	// I have to use var or variable
	return height;
}

weird(); // 50;

// Leakage of global variable
// weired js
// after use strict is show height is not defined

var heyhey = function doodle() {
	// do something
	doodle(); // we can only access it here
	return "heyhey";
};

heyhey();
// doodle(); // doodle is not defined
