import React from 'react';

export default class RollCount extends React.Component{
    
    render(){
        return(
            <div>
                <p style={{writingMode:"vertical-rl", textOrientation:"upright", direction:"rtl"}}>{this.props.logs}</p>
            </div>
        )
    }
}