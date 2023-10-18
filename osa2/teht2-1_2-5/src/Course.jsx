const Course = ({courses}) => {
	//let totalEx = courses.parts.reduce((accumulated, part) => accumulated + part.exercises, 0)
	return(
		<div>
			{courses.map((course, i) =>
				<div key={i}>
					<h1>{course.name}</h1>
					{course.parts.map((part, i) =>
						<p key={i}>
							{part.name} {part.exercises}
						</p>
					)}
					<p>total of {course.parts.reduce((accumulated, part) => accumulated + part.exercises, 0)} exercises</p>
				</div>
			)}
		</div>
	)
}

export default Course