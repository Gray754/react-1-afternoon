import React, {Component} from 'react';

class Sum extends Component{

    constructor(){
        super();
        this.state={
            number1:0,
            number2:0,
            sum: null
        }
    }

    handleChange=(e)=> this.setState({number1:e})
    handleChange2=(e)=> this.setState({number2:e})

    handleClick=()=>{
        var num1 = parseInt(this.state.number1)
        var num2 = parseInt(this.state.number2)

        var total=num1+num2
        this.setState({sum:total})
    }
    
    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>
                <input className="inputLine" onChange={(e)=>this.handleChange2(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.handleClick()}>Check</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;