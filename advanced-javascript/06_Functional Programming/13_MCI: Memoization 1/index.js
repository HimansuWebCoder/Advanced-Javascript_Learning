// function addTo80(n) {
// 	console.log("long time");
// 	return n + 80;
// }

// addTo80(5);
// addTo80(5);
// addTo80(5);
// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(5));

// so here we need caching memoization without again and again same thing run
// for optimization using caching

function addTo80(n) {
	console.log("long time");
	return n + 80;
}

// let cache = {
// 	5: 85
// };
// function memoizedAddTo80(n) {
// 	// if (n in cache) or
// 	// if (cache.n)
//    if (n in cache) {
//    	return cache[n];
//    } else {
//    	cache[n] = 5 + 80;
//    }
// }

// memoizedAddTo80(5)

let cache = {};
function memoizedAddTo80(n) {
	// if (n in cache) or
	// if (cache.n)
	if (n in cache) {
		return cache[n];
	} else {
		console.log("long time");
		cache[n] = 5 + 80;
		return cache[n];
	}
}

// memoizedAddTo80(5);
// memoizedAddTo80(5);
// memoizedAddTo80(5);
console.log("1", memoizedAddTo80(5));
console.log("2", memoizedAddTo80(5));
console.log("3", memoizedAddTo80(6));
// console.log(memoizedAddTo80(5));

// Memoization --> is a specific form of caching that involves caching the return value.
// If the parameter of this function doesn't change like it is here, then it's memoized.
// that is, it uses the cache because it's calculated the same thing before with same parameter
// and it will return a cached version of the function it's memozied

// Memoization is simply a way to remember a solution to a problem.
