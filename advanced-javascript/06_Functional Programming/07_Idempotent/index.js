// Idempotence
function notGood(num) {
	return Math.random(num);
}

notGood(5);

// A function that always returns or does what we expect it to do

// This function that console logs 5 to outside world is still idempotence because multiple calls
// is still going to display the same text, even though it's not pure because well, it communicates with the outside world
function notGood(num) {
	console.log(num);
}

notGood(5);

// You see a lot in APIs like HTTP, get requests, I can do an API call and expect that API Call give some sort of parameters, is always
// going to return the same results even though we are communicating with the outside world.

Math.abs(-50); // 50
Math.abs(Math.abs(-50)); // 50
// No matter again and again run this give same result guarentee
// code predictable
