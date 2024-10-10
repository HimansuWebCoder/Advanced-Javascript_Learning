// Encapsulation
const makeNuclearButton = () => {
	let timeWithoutDestruction = 0;
	const passTime = () => timeWithoutDestruction++;
	const totalPeaceTime = () => timeWithoutDestruction;
	const launch = () => {
		timeWithoutDestruction = -1;
		return "Star";
	};

	setInterval(passTime, 1000);
	return {
		// launch: launch, // if remove this
		totalPeaceTime: totalPeaceTime,
	};
};

const ohno = makeNuclearButton();
ohno.totalPeaceTime();
ohno.launch();
ohno.launch(); // when remove TypeError: ohno.launch is not a function
// this hide the info of launch to world
// security principle
ohno.totalPeaceTime(); // access the variable timeWithoutDestruction
// data encapsulation some data don't show and directly access
// one of the benefit of closures
