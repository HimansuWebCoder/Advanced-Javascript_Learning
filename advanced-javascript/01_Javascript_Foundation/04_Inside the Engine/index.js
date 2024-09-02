// Javascript Engine
// write our own simple engine
function jsengine(code) {
	return code.split(/\s+/);
}

jsengine("var a = 5"); // ['var', 'a', '=', '5']
