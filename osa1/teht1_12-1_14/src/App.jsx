import { useState } from 'react'

const Button = (props) => {
	return(
	<button onClick={props.handleClick}>
		{props.text}
	</button>
	)
}

const MostVotes = (props) => {
	const {anecdotes, votes} = props
	return(
		<div>
			<h1>Anecdote with most votes</h1>
			<p>{anecdotes}</p>
			<p>Votes: {votes}</p>
		</div>
	)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
	const initialVotes = new Uint8Array(8)
	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState(initialVotes)
	const [highestValueIndex, setHighestValueIndex] = useState(0)

	function randomIntFromInterval(min, max) { 
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	const handleRandomClick = () => setSelected(randomIntFromInterval(0, anecdotes.length-1))

	//Async, joten ei välttämättä toimi samalla votella, jolla menee muiden yli
	//Jätän tämän nyt silti tälläiseksi, sillä se toimii
	const updateIndex = () => setHighestValueIndex(votes.indexOf(Math.max(...votes)))

	const handleVoteClick = () => {
		const copyVotes = [...votes]
		copyVotes[selected] += 1
		setVotes(copyVotes)
		updateIndex()
	}
   


  return (
    <div>
			{anecdotes[selected]}
			<br />
			<p>Votes: {votes[selected]}</p>
			<Button handleClick={handleVoteClick} text="vote"/>
			<Button handleClick={handleRandomClick} text="next anecdote"/>
			<MostVotes anecdotes={anecdotes[highestValueIndex]} votes={votes[highestValueIndex]}/>
    </div>
  )
}

export default App