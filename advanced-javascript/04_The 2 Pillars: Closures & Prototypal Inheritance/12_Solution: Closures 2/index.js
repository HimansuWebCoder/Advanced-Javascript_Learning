// Solution: Closures 2
let view;
function initialize() {
	let called = 0;
	return function () {
		if (called > 0) {
			return;
		} else {
			view = "hill";
			called++;
			console.log("view has been set!");
		}
	};
}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();
console.log(view);
