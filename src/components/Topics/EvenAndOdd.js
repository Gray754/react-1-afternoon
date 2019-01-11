import React, { Component } from 'react';

class EvenAndOdd extends Component{
    constructor() {
        super();
        this.state={
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    
    handleChange=(e)=>{
        this.setState({userInput:e}) 
    }

    handleClick=()=>{
        var splitStr = this.state.userInput.split(',')
        var even = []
        var odd = []
        for(let i=0;i<splitStr.length;i++){
            console.log(splitStr[i])
            splitStr[i]%2===0 ? even.push(+splitStr[i]) : odd.push(+splitStr[i])
        }
        console.log(even, odd)
        this.setState({evenArray:even, oddArray:odd})
    }

    render(){
        console.log(this.state)
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Even and Odds</h4>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.handleClick()}>Split</button>
                <span className="resultsBox">Even: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odd: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}


export default EvenAndOdd;