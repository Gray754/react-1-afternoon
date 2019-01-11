import React, { Component } from 'react';

class FilterObject extends Component{

constructor(){
    super()
    this.state={
        unFilteredArray: [
            {name: 'Commander Shepard', series: "Mass Effect"}, 
            {name: "Sonic", series: "Sonic the Hedgehog"},
            {name: "Garrus", series: "Mass Effect"},
            {name: "Pikachu", series: "Pokemon", quote: "Pika Pika!",  color: "yellow"}
        ],
        userInput: '',
        filteredArray: []
    }
}

handleChange=(e)=>{
    this.setState({userInput:e})
}

handleClick=(prop)=>{
    let gameChars = this.state.unFilteredArray
    let filteredGameChars = []

    for(let i=0;i<gameChars;i++){
        if(gameChars[i].hasOwnProperty(prop)){
            filteredGameChars.push(gameChars[i]);
        }
    }

    this.setState({filteredArray:filteredGameChars})
}


    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span classname="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.handleClick(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;

