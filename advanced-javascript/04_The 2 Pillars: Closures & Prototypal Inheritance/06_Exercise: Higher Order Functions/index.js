// const multiplyBy = function (num1) {
// 	return function (num2) {
// 		return num1 * num2;
// 	};
// };

// or more clear and simple using arrow function

const multiplyBy = (num1) => (num2) => num1 * num2;

multiplyBy(4)(6); // 24
// const multiplyByTwo = multiplyBy(2);
// const multiplyByFive = multiplyBy(5);
// multiplyByTwo(4);
// multiplyByTwo(10);
// multiplyByFive(6);

// what is the higher order function here?
// well, the multiply by is higher order function because
// it returns another function
