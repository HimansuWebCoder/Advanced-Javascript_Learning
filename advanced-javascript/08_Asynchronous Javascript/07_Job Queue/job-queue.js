//Callback Queue -- Task Queue
setTimeout(() => {
	console.log("1", "is the loneliest number");
}, 0);
setTimeout(() => {
	console.log("2", "can be as bad as one");
}, 10);

// 2 Job Queue -- Microtask Queue
Promise.resolve("hi").then((data) => console.log("2", data));
// It is part of javascript not now web api
// Higher Priority than Task Queue

// Some legacy browser might not have job queue
