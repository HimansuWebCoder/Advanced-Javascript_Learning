var a = 5;
var b = a;

b++;

console.log(a);
console.log(b);

let obj1 = { name: "Yao", password: "123" };
let obj2 = obj1;
let obj2 = "address in memory";

obj2.password = "easypeasy";

console.log(obj1);
console.log(obj2);

// var c = [1, 2, 3, 4, 5];
// var d = c;
// d.push(19037495);
// console.log(d);
// console.log(c);
// c also has changed pass by reference

// pass by reference
var c = [1, 2, 3, 4, 5];
var d = [].concat(c);
d.push(19037495);
console.log(d);
console.log(c);
// now not mutate or modify original c array
// d has changed

// let obj = { a: "a", b: "b", c: "c" };
// let obj2 = obj; // pass by reference

// in Object.assign
// let obj = { a: "a", b: "b", c: "c" };
// let clone = Object.assign({}, obj);
// if we will do
// let clone = obj; // then pass by reference
// let clone2 = { ...obj };

// obj.c = 5;
// console.log("obj", obj);
// console.log("clone", clone); // clone is not affected
// console.log("clone2", clone2);

let obj = {
	// shallow clone copy first level // memory address in memory
	a: "a",
	b: "b",
	c: {
		deep: "try and copy me",
	},
};

let clone = Object.assign({}, obj);
let clone2 = { ...obj };
let superclone = JSON.parse(JSON.stringify(obj));

// obj.c = 5;
obj.c.deep = "hahaha";
console.log("obj", obj);
console.log("clone", clone);
console.log("clone2", clone2);
// so how can we do deep cloning
console.log("superclone", superclone); // deep copy clone
