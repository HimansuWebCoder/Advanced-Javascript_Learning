// Closures and Memory
// Memory Efficient
// Encapsulation

// Memory Efficient
function heavyDuty() {
	const bigArray = new Array(7000).fill("HAAA");
	return bigArray;
	// console.log(bigArray);
}

// or using index to find

function heavyDuty(index) {
	const bigArray = new Array(7000).fill("HAAA");
	console.log("created!");
	// return bigArray[index];
	// console.log(bigArray[index]);
}

heavyDuty(688);
heavyDuty(688);
heavyDuty(688);
const getHeavyDuty = heavyDuty2();
getHeavyDuty(688);
getHeavyDuty(700);
getHeavyDuty(800);

function heavyDuty2() {
	const bigArray = new Array(7000).fill("HAAA");
	console.log("created Again!");
	return function (index) {
		return bigArray[index];
	};
}
