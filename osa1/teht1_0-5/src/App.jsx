const Header = (props) => {
	return(
		<div>
			<h1>{props.course.name}</h1>
		</div>
	)

}
const Content = (props) => {
	console.log(props)
	return(
		<div>
			<Part p={props.parts[0]} />
			<Part p={props.parts[1]} />
			<Part p={props.parts[2]} />
		</div>
	)
}
const Total = (props) => {
	return(
		<div>
			<p>
				Total number of exercises: {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}
			</p>
		</div>
	)
}
const Part = (props) => {
	console.log(props)
	return(
		<p>
			Name: {props.p.name} <br />
			Exercises: {props.p.exercises}
			<br />
		</p>
	)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>
      <Header course={course} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
    </div>
  )
}

export default App