// Pure Functions
// A function has to always return the same output, give the same input, and the function cannot modify anything outside of itself
// No side effects
// no side effects
// input ----> output
// No matter how many time we call this

const array = [1, 2, 3];
// Mutates & modifies this array that lives outside of itself in the global object.
// and this is called a side effects
function mutateArray(arr) {
	arr.pop();
}

function mutateArray2(arr) {
	arr.forEach((item) => {
		arr.push(1);
	});
}

mutateArray(array);
// mutateArray(array); // my array is modified again
mutateArray2(array);
console.log(array);
// this function has side effect and modify anythign outside of itself
