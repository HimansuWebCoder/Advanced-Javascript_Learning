// function scope
// vs
// block scope
// scope means what variables we have access to

if (5 > 4) {
	var secret = "12345";
}

secret; // 12345

// but in function scope we can't access the secret

// function a() {
// 	var secret = "12345";
// }

// secret(); // secret is not defined

// let and const
if (5 > 4) {
	let secret = "12345";
}

secret; // 12345
