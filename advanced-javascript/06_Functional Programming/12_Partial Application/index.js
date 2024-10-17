// Partial Application
// It's the process of producing a function with a smaller no of parameters.
// It means taking a function, applying some of its arguments into the function.
// So he remembers those parameters.
// And then it uses closures to later on be called with all the rest of the arguments.

const multiply = (a, b, c) => a * b * c;
// const curriedMultiply = (a) => (b) => (c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5);
// curriedMultiply(3)(4)(10);
partialMultiplyBy5(4, 10);
console.log(partialMultiplyBy5(4, 10)); // 200
// I have partially applied
