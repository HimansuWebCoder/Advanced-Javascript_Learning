// Array are objects in js

var array = ["1", "2", "3"];

var array = {
	0: "1",
	1: "2",
	2: "3",
};

typeof []; // object

Array.isArray([1, 2, 3]); // true
Array.isArray({}); // false
