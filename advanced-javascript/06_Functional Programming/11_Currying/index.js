// currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyBy5 = curriedMultiply(5);
curriedMultiply(5)(3);
curriedMultiplyBy5(4);
curriedMultiplyBy5(4);
// console.log(curriedMultiply(5)(3)); // 15
// console.log(curriedMultiplyBy5(4)); // 20
// console.log(curriedMultiplyBy5(4)); // 20
