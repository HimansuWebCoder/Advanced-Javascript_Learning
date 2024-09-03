// function marry(person1, person2) {
// 	console.log("arguments", arguments);
// 	console.log(Array.from(arguments));
// 	return `${person1} is now married to ${person2}`;
// }

// marry("Tim", "Tina");
// arguments [Arguments] { '0': 'Tim', '1': 'Tina' }
// [ 'Tim', 'Tina' ]

function marry2(...args) {
	console.log("arguments", args);
	console.log(Array.from(arguments));
	return `${args[0]} is now married to ${args[1]}`;
}

marry2("Tim", "Tina");
// arguments [ 'Tim', 'Tina' ] in node so return not show result in here ok!
// [ 'Tim', 'Tina' ]

var canada = () => {
	console.log("cold");
};

// Function Declaration
function india() {
	console.log(arguments);
	console.log("warm");
}

// Function Invocation/Call/Execution
// canada();
india(); // {} warm
