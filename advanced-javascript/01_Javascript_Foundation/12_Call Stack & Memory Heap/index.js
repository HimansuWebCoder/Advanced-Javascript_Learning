// Call Stack + Memory Heap
const number = 610; // allocate memory for number
const string = "some text"; // allocate memory for a string
const human = {
	// allocate memory for an object.... and it's values.
	first: "Himansu",
	last: "Naik",
};

function subtractTwo(num) {
	return num - 2;
}

function calculate() {
	const sumTotal = 4 + 5;
	return subtractTwo(sumTotal);
}

// open browser and run the above code in snippet
// function calculate() {
// 	const sumTotal = 4 + 5;
// 	return sumTotal;
// }

calculate();

calculate();
//callstack

// run the below code in snippet

function subtractTwo(num) {
	return num - 2;
}

function calculate() {
	const sumTotal = 4 + 5;
	return subtractTwo(sumTotal);
}
debugger;
calculate();

// and call stack anonymous  is Global Execution Context

// and then try out without subtractTwo

function subtractTwo(num) {
	return num - 2;
}

function calculate() {
	const sumTotal = 4 + 5;
	return sumTotal;
}
debugger;
calculate();
