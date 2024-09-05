// one way to invocking function
function one() {
	return 1;
}

one();

// anothe way is
// const obj = {
// 	two: function () {
// 		return 2;
// 	},
// };

// newEcmascript directly use two()
const obj = {
	two() {
		return 2;
	},
};

obj.two();

// another way is
function three() {
	return 3;
}

three.call();

// one more way
// const four = new Function("return 4"); // function constructor
const four = new Function("num", "return num"); // pass parameter num

four(4); // 4 // I still get 4

// functions are objects

function woohooo() {
	console.log("wooohoooo");
}

wohooo.yell = "ahhhhhh";

// pseudo code here
const specialObj = {
	yell: 'ahhhhhh',
	name: 'woohooo',
	(): console.log('woohooo')
}

// it is working underneath the hood

woohooo.call() // call(), bind(), arguments(), apply() have properties

const obj = {

}

obj.call // i don't have bind, argument, apply in object
// functions are objects 
