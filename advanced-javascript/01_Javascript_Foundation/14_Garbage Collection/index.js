// Call Stack + Memory Heap
const number = 610; // allocate memory for number
const string = "some text"; // allocate memory for a string

// human = 5;

function subtractTwo(num) {
	const human = {
		// allocate memory for an object.... and it's values.
		first: "Himansu",
		last: "Naik",
	};
	return num - 2;
}

function calculate() {
	const sumTotal = 4 + 5;
	return subtractTwo(sumTotal);
}
