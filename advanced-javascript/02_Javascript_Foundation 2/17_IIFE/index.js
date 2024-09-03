// IIFE

// (function () {})(); // undefined

// function(){}(); //  Function statements require a function name
// we can't invoke this function directly

(function () {
	var a = 1;
})();

a; // a is not defined // can't access now
// IIFE's data can't be accessed by global execution context

// or we will do

(function () {
	var a = 1;
})();

// undefined
// we should follow the rule of js
