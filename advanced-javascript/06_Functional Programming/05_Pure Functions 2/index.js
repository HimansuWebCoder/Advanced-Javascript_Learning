// No side effects
// input ---> output

// All these functions have not side effects
const array = [1, 2, 3];
function removeLastItem(arr) {
	const newArray = [].concat(arr);
	newArray.pop();
	return newArray;
}

function multiplyBy2(arr) {
	return arr.map((item) => item * 2);
}

// console.log(removeLastItem(array));
// console.log(multiplyBy2(array));
// console.log(array);

// const array2 = removeLastItem(array);
// const array3 = multiplyBy2(array);
// console.log(array, array2, array3);

// but is this, hmm, have this side effect because this is window specific console
// it effecting this outside of itself
// function a() {
// 	console.log("hi");
// }

// a();

// Referential Transparency
// These have no side effects
function a(num1, num2) {
	return num1 + num2;
}

// a(3, 4);
console.log(a(3, 4));
// again and again run this, not change this

function b(num) {
	return num * 2;
}

// b(a(3, 4))
console.log(b(a(3, 4))); // 14
// if
console.log(b(7)); // 14 no change same input === same output

// Easy to test, compose, no mutation, no shared state, minimize bugs, more predictable
