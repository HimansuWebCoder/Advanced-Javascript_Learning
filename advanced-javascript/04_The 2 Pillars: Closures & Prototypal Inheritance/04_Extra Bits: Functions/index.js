// for (let i = 0; i < 5; i++) {
// 	function a() {

// 	}
// 	a()
// }

// you should be careful instead of initialize the function in a loop 5 times in loop
// we should be moving in top

// function a() {}
// for (let i = 0; i < 5; i++) {
// 	a();
// }

// cause an error reference error
// function a() {
// 	return param
// }

// a()

// function a(param) {
// 	return param;
// }

// a(); // undefined

// this is good than above
// default parameter
function a(param = 6) {
	return param;
}

a(); // 6
