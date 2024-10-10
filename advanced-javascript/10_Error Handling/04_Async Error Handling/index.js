// how to handle error in promises async await

Promise.resolve("asyncfail").then((response) => {
	console.log(response); // asyncfail
});
