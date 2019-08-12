import React from 'react';
import './App.css';
import Dice from './dice'
import RollCount from './rollCount'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      num: Math.floor(Math.random()*6 + 1),
      logRoll: []
    }
  }
  diceChange = (newNum) => {
    this.setState({num: newNum})
  }
  addRoll = (roll) => {

    this.setState({logRoll: [roll,...this.state.logRoll]})
  }
  render = () =>{
    return(
      <div style={{maxHeight:"400px",overflowWrap: "break-word", textAlign:"center"}}>
        <h1>Dice Roller</h1>
        <h5>Click the dice to roll</h5>
          <div style={{display: "flex", justifyContent: "center"}}>
            <Dice change={this.diceChange} dice={this.state.num} addRoll={this.addRoll}/>
            <RollCount logs={this.state.logRoll}/>
          </div>
      </div>

    )
  }
}

export default App;
