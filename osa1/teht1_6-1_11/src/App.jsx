import { useState } from 'react'

const StatisticLine = (props) => {
	const {text, value} = props
	return(
			<tr>
				<td>{text}:</td>
				<td>{value}</td>
			</tr>
	)
}

const Button = (props) => {
	return(
	<button onClick={props.handleClick}>
		{props.text}
	</button>
	)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
	const [total, setTotal] = useState(0)
	const [average, setAverage] = useState(0)
	const [positive, setPositive] = useState(0)

	

	const handleGoodClick = () => {
		setGood(good + 1)
		const updatedGood = good + 1
		setTotal(updatedGood+neutral+bad)
		const updatedTotal = total + 1
		setAverage(((updatedGood-bad)/updatedTotal).toFixed(2))
		setPositive((updatedGood/updatedTotal*100).toFixed(2))
	}

	const handleNeutralClick = () => {
		setNeutral(neutral + 1)
		const updatedNeutral = neutral + 1
		setTotal(good+updatedNeutral+bad)
		const updatedTotal = total + 1
		setAverage(((good-bad)/updatedTotal).toFixed(2))
		setPositive((good/updatedTotal*100).toFixed(2))
	}

	const handleBadClick = () => {
		setBad(bad + 1)
		const updatedBad = bad + 1
		setTotal(good+neutral+updatedBad)
		const updatedTotal = total + 1
		setAverage(((good-updatedBad)/updatedTotal).toFixed(2))
		setPositive((good/updatedTotal*100).toFixed(2))
	}
	

  return (
    <div>
      <h1>Give feedback</h1>
			<Button handleClick={handleGoodClick} text="Good" />
			<Button handleClick={handleNeutralClick} text="Neutral" />
			<Button handleClick={handleBadClick} text="Bad" />
			<h1>Statistics</h1>
			<table>
				<tbody>
					<StatisticLine text="Good" value={good} />
					<StatisticLine text="Neutral" value={neutral} />
					<StatisticLine text="Bad" value={bad} />
					<StatisticLine text="Total" value={total} />
					<StatisticLine text="Average" value={average} />
					<StatisticLine text="Positive" value={positive} />
				</tbody>
			</table>
			
    </div>
  )
}

export default App