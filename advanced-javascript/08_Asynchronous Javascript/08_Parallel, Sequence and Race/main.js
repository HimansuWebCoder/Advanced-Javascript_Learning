// 3
// parallel
// sequencial
// race

const promisify = (item, delay) =>
	new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
// const b = () => promisify("b", 5000);
const b = () => promisify("b", 0); // lets faster than a
const c = () => promisify("c", 3000);
// console.log(a, b, c);
// () => promisify("a", 100) () => promisify("b", 5000) () => promisify("c", 3000)

// Parallel
async function parallel() {
	const promises = [a(), b(), c()];
	const [output1, output2, output3] = await Promise.all(promises);
	return `parallel is done: ${output1} ${output2} ${output3}`;
}

// parallel().then(console.log); // parallel is done: a b c

// race
async function race() {
	const promises = [a(), b(), c()];
	const output1 = await Promise.race(promises);
	return `race is done: ${output1}`;
}

// race().then(console.log); // race is done b

// sequence one after one execute waiting
async function sequence() {
	const output1 = await a();
	const output2 = await b();
	const output3 = await c();
	return `sequence is done ${output1} ${output2} ${output3}`;
}

parallel().then(console.log);
sequence().then(console.log); // sequence is done a b c
race().then(console.log);

// race is done: b
// parallel is done: a b c
// sequence is done a b c

// choose what the best for you and according to your project use
