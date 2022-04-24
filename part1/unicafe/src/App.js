import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const Feedback = ({ buttons }) => {
	let { good, neutral, bad } = buttons;
	return (
		<>
			<h1>Give Feedback</h1>
			<Button handleClick={good.handleClick} text={good.name} />
			<Button handleClick={neutral.handleClick} text={neutral.name} />
			<Button handleClick={bad.handleClick} text={bad.name} />
		</>
	);
};

const StatisticLine = ({ text, value, optional }) => (
	<tr>
		<td>{text}</td>
		<td>
			{Math.round(value * 100) / 100} {optional}
		</td>
	</tr>
);

const Statistics = ({ feedback }) => {
	let [good, neutral, bad] = feedback;
	const all = good + neutral + bad;
	const averageScore = all !== 0 ? (good - bad) / all : 0;
	const PositiveFeedback = (all !== 0 ? good / all : 1) * 100;
	if (all === 0) {
		return (
			<>
				<h1>Statistics</h1>
				<p>No feedback given </p>
			</>
		);
	}

	return (
		<>
			<h1>Statistics</h1>
			<table>
				<tbody>
					<StatisticLine text="good" value={good} />
					<StatisticLine text="neutral" value={neutral} />
					<StatisticLine text="bad" value={bad} />
					<StatisticLine text="all" value={all} />
					<StatisticLine text="average" value={averageScore} />
					<StatisticLine text="positive" value={PositiveFeedback} optional="%" />
				</tbody>
			</table>
		</>
	);
};

const App = () => {
	// save clicks of each button to its own state
	let [good, setGood] = useState(0);
	let [neutral, setNeutral] = useState(0);
	let [bad, setBad] = useState(0);

	const feedbackButtons = {
		good: {
			name: "good",
			handleClick: () => setGood(good + 1),
		},
		neutral: {
			name: "neutral",
			handleClick: () => setNeutral(neutral + 1),
		},
		bad: {
			name: "bad",
			handleClick: () => setBad(bad + 1),
		},
	};

	return (
		<div>
			<Feedback buttons={feedbackButtons} />
			<Statistics feedback={[good, neutral, bad]} />
		</div>
	);
};

export default App;
