import './App.css';
import { useState } from 'react';
import AllPosts from './componants/AllPosts/AllPosts';


function App() {
  return (
    <div className="App">
      <AllPosts></AllPosts>
      <Players name='Ronaldo' club='united' country='Portugal'></Players>
      <Players name='Neymar' club='psg' country='Brazil'></Players>
      <Players name='Messi' club='psg' country='Argentina'></Players>
    </div>
  );
}

function Players(props) {
  const [goal, setPower] = useState(1)
  const IncresePower = () => {
    setPower(goal + 1)
  }
  const DecresePower = () => {
    if (goal <= 0) {
      return
    }
    setPower(goal - 1)
  }

  return (
    <div className='player-container'>
      <h2>Name: {props.name}</h2>
      <h3>Country: {props.country}</h3>
      <h3>Club: {props.club}</h3>
      <h4>Goal: {goal}</h4>
      <button onClick={IncresePower}>Increse Power</button>
      <button onClick={DecresePower}>Decrese Power</button>
    </div>
  )
}

export default App;
