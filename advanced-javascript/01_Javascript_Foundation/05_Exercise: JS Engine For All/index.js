// What problem do you see with everybody creating their own engines in javascript?

// Javascript Engine
// write our own simple engine
function jsengine(code) {
	return code.split(/\s+/);
}

jsengine("var a = 5"); // ['var', 'a', '=', '5']
