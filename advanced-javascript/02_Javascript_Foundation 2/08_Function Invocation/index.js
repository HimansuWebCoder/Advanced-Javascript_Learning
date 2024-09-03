// Function Expression
// var canada = function () {
// 	console.log("cold");
// };

// or  using arrow function

var canada = () => {
	console.log("cold");
};

// Function Declaration
function india() {
	console.log("warm");
}

// Function Invocation/Call/Execution
canada();
india();

function marry(person1, person2) {
	console.log("arguments", arguments);
	return `${person1} is now married to ${person2}`;
}

marry("Tim", "Tina");

// arguments; // arguments is not defined

// not to use arguments before said
