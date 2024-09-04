// 5
// typeof 5 // number
// typeof true // boolean
// typeof 'To be or not to be' // string
// typeof undefined // undefined
// typeof null // object
// typeof Symbol('just me') // symbol
// typeof {} // object
// typeof [] // object
// typeof function(){} // function
// true
// 'To be or not to be'
// undefined
// null
// Symbol('just me')
// {}

// functions are objects
// function a() {
// 	return 5;
// }

// a.hi = "hihihihi";
// console.log(a.hi);

//Primitive
// typeof 5
// typeof true
// typeof 'To be or not to be'
// typeof undefined
// typeof Symbol('just me')

//Non-Primitive
// const obj1 = {
// 	a: 'Tom'
// }
// typeof {}
// typeof []
// typeof function(){}

true.toString(); // 'true' // wrapper
Boolean(true).toString();
String("true").toString();

typeof Math; // object
typeof Infinity; // number
