class AuthenticationError extends Error {
	constructor(message) {
		super(message);
		this.name = "authenticationError";
		this.favouriteSnack = "grapes";
	}
}

class DatabaseError extends Error {
	constructor(message) {
		super(message);
		this.name = "DatabaseError";
		this.message = "grapes";
	}
}

class PermissionError extends Error {
	constructor(message) {
		super(message);
		this.name = "PermissionError";
		this.favouriteSnack = "grapes";
	}
}

// throw new authenticationError("oopsie");
// authenticationError: oopsie
// const a = new AuthenticationError("oopsie");
// a.favouriteSnack;

const a = new DatabaseError("oopsie");
// a.message; // grapes
a instanceof DatabaseError; // true

// These Class are reusable
