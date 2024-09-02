// Memory Leak
let array = [];
for (let i = 5; i > 1; i++) {
	array.push(i - 1);
}

// console.log(array);
// check in browser this crash browser

// keep in mind that the execution of the loop also aided in the crash

// Global Variable
var a = 1;
var b = 1;
var c = 1;

// Event Listeners
var element = document.getElementById("button");
element.addEventListener("click", onClick);

// setInterval
setInterval(() => {
	// referencing objects...
});

// checkout soundcloud.com website the had a memory leak
// while it kept adding data to memory
