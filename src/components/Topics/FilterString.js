import React, {Component} from 'react';

class FilterString extends Component{

constructor(){
    super()
    this.state = {
        unFilteredArray: ["hello", "hi", "im tired"],
        userInput : '',
        filteredArray : []
    }
}

handleOnchange=(e)=>this.setState({userInput:e})

handleOnclick=(userInput)=>{
    var random = this.state.unFilteredArray;
    var filteredRan = [];

    for(var i=0;i<random.length;i++){
        if(random[i].includes(userInput)){
            filteredRan.push(random[i]);
        }
    }
    this.setState({filteredArray:filteredRan});
}

    render(){
        console.log(this.state.filteredArray)
        return(
            <div className="puzzleBox filterStringDB">
                <h4>Filter String</h4>
                <span className="puzzleTest">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e)=>this.handleOnchange(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.handleOnclick()}>Filter String</button>
                <span className="resultsBox filterStringDB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;