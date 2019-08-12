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
    let joined = this.state.logRoll.concat(roll)
    this.setState({logRoll: joined})
  }
  render = () =>{
    return(
      <div style={{display: "flex", justifyContent: "center"}}>
        <Dice change={this.diceChange} dice={this.state.num} addRoll={this.addRoll}/>
        <div style={{display: "flex", flexDirection: "column", justifyContent:"flex-end"}} ></div>
        <RollCount logs={this.state.logRoll}/>
      </div>

    )
  }
}

export default App;
