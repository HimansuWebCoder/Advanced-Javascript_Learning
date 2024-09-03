// quite comes in javascript interview

// var favouriteFood = "grapes";

// var foodThoughts = function () {
// 	console.log("Original favourite food: " + favouriteFood);

// 	var favouriteFood = "sushi";

// 	console.log("New favourite food: " + favouriteFood);
// };
// foodThoughts();

// Original favourite food: undefined
// New favourite food: sushi

// lets see under the hood
// creation phase

// var favouriteFood = undefined;
// var foodThoughts = undefined;

// execution phase

// favouriteFood = "grapes";

// foodThoughts = function () {
// 	// new creation phase again (little world again)
// 	var favouriteFood = undefined;
// 	console.log("Original favourite food: " + favouriteFood);

// 	favouriteFood = "sushi";

// 	console.log("New favourite food: " + favouriteFood);
// };

// foodThoughts();

// avoid var as much as possible

const favouriteFood = "grapes";

const foodThoughts = function () {
	console.log("Original favaourite food: " + favouriteFood);

	const favouriteFood = "sushi";

	console.log("New favourite food: " + favouriteFood);
};

foodThoughts(); // favouriteFood is not defined
//  Cannot access 'favouriteFood' before initialization
