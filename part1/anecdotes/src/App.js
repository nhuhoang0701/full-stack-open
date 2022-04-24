import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const DisplayAnecdote = ({ anecdote, votes }) => {
	return (
		<>
			<h1> Anecdote of the day </h1>
			<p>{anecdote}.</p>
			<DisplayVote vote={votes} />
		</>
	);
};

const DisplayMostVotedAnecdote = ({ anecdote, votes }) => {
	return (
		<>
			<h1> Most voted anecdote </h1>
			<p>{anecdote}.</p>
			<DisplayVote vote={votes} />
		</>
	);
};

const DisplayVote = ({ vote }) => <div> has {vote} votes</div>;

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
	];

	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState([0]);
	const nextAnecdotes = () => {
		if (selected >= anecdotes.length - 1) {
			return;
		}
		// Update length of votes
		const newVotesLength = selected + 2;
		const zerosFilled = newVotesLength - votes.length + 1;
		if (zerosFilled > 0) {
			const newVotes = votes.concat(new Array(zerosFilled).fill(0));
			setVotes(newVotes);
		}
		setSelected(selected + 1);
	};
	const voteAnecdotes = () => {
		let newVotes = [...votes];
		newVotes[selected]++;
		setVotes(newVotes);
	};

	// Find anecdote with most votes
	let maxVote = 0;
	let maxVotedAnecdote = "";
	for (let index = 0; index < votes.length; index++) {
		if (maxVote < votes[index]) {
			maxVotedAnecdote = anecdotes[index];
			maxVote = votes[index];
		}
	}
	return (
		<div>
			<DisplayAnecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
			<br />
			<Button handleClick={voteAnecdotes} text="vote" />
			<Button handleClick={nextAnecdotes} text="next anecdote" />
			<DisplayMostVotedAnecdote anecdote={maxVotedAnecdote} votes={maxVote} />
		</div>
	);
};

export default App;
