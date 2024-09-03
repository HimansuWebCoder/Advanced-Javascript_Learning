// function currying
function multiply(a, b) {
	return a * b;
	// return 2 * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4)); // 8

let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTen(4)); // 40
