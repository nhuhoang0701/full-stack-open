const App = () => {
	const course = "Half Stack application development";
	// const part1 = "Fundamentals of React";
	// const exercises1 = 10;
	// const part2 = "Using props to pass data";
	// const exercises2 = 7;
	// const part3 = "State of a component";
	// const exercises3 = 14;
	let parts = [
		{
			name: "Fundamentals of React",
			exercises: 10,
		},
		{
			name: "Using props to pass data",
			exercises: 7,
		},
		{
			name: "State of a component",
			exercises: 14,
		},
	];
	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	);
};

export default App;

const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Part = (props) => {
	let part = props.part;
	return (
		<>
			<p>
				{part.name} {part.exercises}
			</p>
		</>
	);
};

const Content = (props) => {
	let parts = props.parts;
	return (
		<>
			<Part part={parts[0]} />
			<Part part={parts[1]} />
			<Part part={parts[2]} />
		</>
	);
};

const Total = (props) => {
	let parts = props.parts;
	let total = 0;
	for (let index = 0; index < parts.length; index++) {
		total += parts[index].exercises;
	}
	return (
		<>
			<p>Number of exercises {total}</p>;
		</>
	);
};
