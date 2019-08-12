import React from 'react';

export default class Dice extends React.Component{
    updateDice = ()=> {
        let diceNum = Math.floor(Math.random()*6 + 1)
        this.props.change(diceNum)
        this.props.addRoll(diceNum)
    }
    render(){
        return(
            <div>
                <button style={{fontSize:"25px", textAlign:"center", height: "90px", width: "90px", border: "2px solid black"}} onClick={this.updateDice}>{this.props.dice}</button>
            </div>
        )
    }
}