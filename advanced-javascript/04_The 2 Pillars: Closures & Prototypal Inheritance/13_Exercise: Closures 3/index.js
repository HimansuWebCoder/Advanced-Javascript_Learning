// most commonly asks interview questions for js developers
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
	setTimeout(function () {
		console.log("I am at index " + i);
	}, 3000);
}
// Output
// 4
// I am at index 4
// I am at index 4
// I am at index 4
// I am at index 4
