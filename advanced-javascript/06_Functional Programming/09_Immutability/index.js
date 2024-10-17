// Immutability
// Not changing the state
// Instead copying of states

const obj = { name: "Himansu" };
function clone(obj) {
	return { ...obj }; // this is pure
}

function updateName(obj) {
	const obj2 = clone(obj);
	obj2.name = "Andrei";
	return obj2;
}

// console.log(obj); // {name: 'Himansu'}
// console.log(updateName(obj)); // {name: 'Andrie'}
const updatedObj = updateName(obj);
console.log(obj, updatedObj);
// maintained immutability
// Just to borrow, copy it and make a new one copy of this

// mutation
// obj.name = "Andrei"; // this is mutating the state , data of our program
