1 == "1"; // true // it is not predicatble code, right?
1 == 1; // true
1 === "1"; // false
// funky isn't it ?
// it can be confusing
// It could really be a gotcha and trick.
// some people so always use three equals instead of two

// Do all languages have type coercion?
// Yes, they do, because we always need to convert types b/w programs to do things.
// Javascript is dynamically typed

// it is not happening in equals sign also in

if (1) {
	console.log(5); // 5
}

if (o) {
	console.log(5); // 5
}

if (false) {
	console.log(5);
}

if (true) {
	console.log(5);
}

// 1 == true
// 0 == false

-0 === +0; // true // but technically different thing in js
Object.is(-0, +0); // false

NaN === NaN; // false // this should be equal
Object.is(NaN, NaN); // true

// How confusion type coercion can be
// should use === equal as much as possible avoid confusion

// Exercise Type Coercion
// JS can be weird when it comes to type coercion. Try to guess what the output
// for each of the lines below are:

// false == ""
// false == []
// false == {}
// "" == 0
// "" == []
// "" == {}
// 0 == []
// 0 == {}
// 0 == null
