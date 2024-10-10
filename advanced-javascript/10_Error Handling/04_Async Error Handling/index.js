// how to handle error in promises async await

// Promise.resolve("asyncfail")
// 	.then((response) => {
// 		console.log(response); // asyncfail
// 		return response;
// 	})
// 	.then((response) => {
// 		console.log(response); // asyncfail
// 	});

// Promise.resolve("asyncfail")
// 	.then((response) => {
// 		throw new Error("#1 fail");
// 		return response;
// 	})
// 	.then((response) => {
// 		console.log(response);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// or

// Promise.resolve("asyncfail")
// 	.then((response) => {
// 		throw new Error("#1 fail");
// 		return response;
// 	})
// 	.then((response) => {
// 		console.log(response);
// 	})
// 	.catch((err) => {
// 		// return err;
// 		throw new Error("#2"); // then the final error show
// 	})
// 	.then((response) => {
// 		// console.log(response);
// 		console.log(response.message); // #1 fail
// 	})
// 	.catch((err) => {
// 		console.log("final error"); // never going to run
// 	});

// Promise.resolve("asyncfail")
// 	.then((response) => {
// 		throw new Error("#1 fail");
// 		return response;
// 	})
// 	.then((response) => {
// 		console.log(response);
// 	});

// different runtime show differently

// or Promise inside another Promise

// Promise.resolve("asyncfail")
// 	.then((response) => {
// 		Promise.resolve().then(() => {
// 			throw new Error("#3 fail");
// 		});
// 		return 5;
// 	})
// 	.then((response) => {
// 		console.log(response);
// 	})
// 	.catch((err) => {
// 		throw new Error("#2");
// 	})
// 	.then((response) => {
// 		console.log(response.message);
// 	})
// 	.catch((err) => {
// 		console.log("final error");
// 	});

// if return 5 then come 5 instead of undefined
// 5
// undefined
// VM14:17 final error
// Promise {<fulfilled>: undefined}

// or if i remove withing catch block
// we should catch block Promise inside any Promise that must to add catch
// Promise.resolve("asyncfail")
// 	.then((response) => {
// 		Promise.resolve()
// 			.then(() => {
// 				throw new Error("#3 fail");
// 			})
// 			.catch(console.log);
// 		return 5;
// 	})
// 	.then((response) => {
// 		console.log(response);
// 	})
// 	.then((response) => {
// 		// console.log(response.message);
// 		console.log(response); // if remove message then show undefined
// 	})
// 	.catch((err) => {
// 		console.log("final error");
// 	});
// 5
// Error: #3 fail
// final error // still have final erro why is that
// tricky error handling in this

// after remove message
// 5
// Error: #3 fail
// undefined
// We don't receive any responses

Promise.resolve("asyncfail")
	.then((response) => {
		Promise.resolve()
			.then(() => {
				throw new Error("#3 fail");
			})
			.catch(console.log);
		return 5;
	})
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.log("final error", err);
	});
// 5
// Error: #3 fail
// now is good everything
// keep our promises individually
