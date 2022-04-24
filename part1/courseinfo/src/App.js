import { useState } from "react";

const App = () => {
	let [counter, setCounter] = useState(0);
	const increaseByOne = () => setCounter(counter + 1);
	const setZero = () => setCounter(0);
	return (
		<div>
			<h1>Counter: {counter}</h1>
			<button onClick={increaseByOne}>plus</button>
			<button onClick={setZero}>zero</button>
		</div>
	);
};

export default App;
