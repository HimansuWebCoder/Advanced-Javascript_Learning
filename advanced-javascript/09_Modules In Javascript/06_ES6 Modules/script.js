// import module1 from "module1"; // {fight}
// import module2 from "module2";

const harry = "potter";
const voldemort = "He who must not be named";

export function jump() {
	console.log("jump");
} // export named
// function jump() {}  // no export

// export function fight(char1, char2) {
// 	var attack1 = Math.floor(Math.random() * char1.length);
// 	var attack2 = Math.floor(Math.random() * char2.length);
// 	console.log(attack1);
// 	return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
// }

// default export
export default function fight(char1, char2) {
	var attack1 = Math.floor(Math.random() * char1.length);
	var attack2 = Math.floor(Math.random() * char2.length);
	console.log(attack1);
	return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}
