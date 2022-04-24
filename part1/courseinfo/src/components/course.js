const Header = ({ text }) => <h1>{text}</h1>;

const Part = ({ part }) => (
	<p>
		{part.name} {part.exercises}
	</p>
);

const Content = ({ parts }) => (
	<>
		{parts.map((part) => (
			<Part key={part.id} part={part} />
		))}

		<b>Total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises</b>
	</>
);

const Course = ({ course }) => {
	return (
		<>
			<Header text={course.name} />
			<Content parts={course.parts} />
		</>
	);
};

export default Course;
