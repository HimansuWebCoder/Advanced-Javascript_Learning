// function loop() {
// 	for (var i = 0; i < 5; i++) {
// 		console.log(i);
// 	}
// 	console.log("final", i);
// }

// loop();

// function loop() {
// 	for (var i = 5; 5 < 5; i++) {
// 		console.log(i);
// 	}
// 	console.log("final", i); // final 5
// }

// loop();

// using let
function loop() {
	for (let i = 5; 5 < 5; i++) {
		console.log(i);
	}
	console.log("final", i); // i is not defined // can't access the block scope let
}

loop();
