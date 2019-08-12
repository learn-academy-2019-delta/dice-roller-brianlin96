import React from 'react';

export default class RollCount extends React.Component{
    
    render(){
        return(
            <div>
                <p style={{maxHeight:"400px", writingMode:"vertical-lr", textOrientation:"upright", direction:"ltr", flexWrap: "wrap"}}>{this.props.logs}</p>
            </div>
        )
    }
}