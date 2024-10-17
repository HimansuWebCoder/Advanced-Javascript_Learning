// HOF (you can see this in mathematics)
// this return another function
// const hof = () => () => 5;
const hof = (fn) => fn(5);
hof(function a(x) {
	return x;
});
// hof()();
// console.log(hof()()); // 5
// console.log(hof(function a(x){return x})) // 5
// Closure
const closure = function () {
	let count = 0;
	return function increment() {
		count++;
		return count;
	};
};

closure();
const incrementFn = closure();
// incrementFn();
// incrementFn();
// incrementFn();
console.log(incrementFn());
console.log(incrementFn());
console.log(incrementFn());

const closure = function () {
	let count = 55; // private variable inside closure
	// let dontTouch = 55;
	return function getCounter() {
		return count;
	};
};

const getCounter = closure();
getCounter();
getCounter();
getCounter();
