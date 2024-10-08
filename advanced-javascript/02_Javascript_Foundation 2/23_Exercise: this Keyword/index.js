var b = {
	name: "jay",
	say() {
		console.log(this);
	},
};

var c = {
	name: "jay",
	say() {
		return function () {
			console.log(this);
		};
	},
};

var d = {
	name: "jay",
	say() {
		return () => console.log(this);
	},
};

b.say(); // {name: 'jay', say: [Function: say]} in node
c.say();
c.say()();
d.say();
d.say()();
