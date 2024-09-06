// Exercise
function callMeMaybe() {
	const callMe = "Hi! I am new here!";
	setTimeout(function () {
		console.log(callMe);
	}, 4000);
}

callMeMaybe(); // Hi! I am new here! // I get a callback

// If you have guessed closures good you've been paying attention
// because we have a function in here that
// If you remember the way setTimeout works is it gets sent to the Web API to start a timer for 4 seconds
// and then once that timer is gone, we send this piece of code to the callback queue and the callback
// queue is going to wait there until the call stack is empty.
// So call me, maybe has been called. It's now popped off the stack and the event loop
// is going to push this function onto the stack and run it.

// But because of closures and yes, even if some of the functions go all the way out to the Web API world.
// well, they still use closures and we're able to remember this variable because of closures.

// or if we do this what will happen

function callMeMaybe() {
	setTimeout(function () {
		console.log(callMe);
	}, 4000);
	const callMe = "Hi! I am new here!";
}

callMeMaybe(); // Hi! I am new here!
// still give us we got it back
// well, because it doesn't matter where we define this variable.
// yes, even it is const, that doesn't hoisted;
// We don't care about hoisting here.
// Instead, this piece of code goes all the way into Web API world gets put on the
// callback queue. The Event loop pushes it back onto the stack, but by that time we already
// ran this function.
// const call me, has already been created and assigned and because it sees that there's an enclosing
// function that is using it, it's going to create a closure.
// How cool is that ?
// Let's take a break and do some more exercises.

A1s2h3i454s5@58
545737750010
388059524324