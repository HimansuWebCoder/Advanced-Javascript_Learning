// most commonly asks interview questions for js developers
// const array = [1, 2, 3, 4];
// for (let i = 0; i < array.length; i++) {
// 	// change var to let
// 	setTimeout(function () {
// 		// console.log("I am at index " + i);
// 		console.log("I am at index " + array[i]);
// 	}, 3000);
// }
// Output
// 4
// I am at index 0
// I am at index 1
// I am at index 2
// I am at index 3

// or solve using IIFE and var
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
	(function (closureI) {
		setTimeout(function () {
			console.log("I am at index " + array[closureI]);
		}, 3000);
	})(i);
}

// undefined
// I am at index 1
// I am at index 2
// I am at index 3
// I am at index 4
