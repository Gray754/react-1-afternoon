import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObj from '../Topics/FilterObject';
import FilterStr from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';

class TopicBrowser extends Component{
    render(){
        return(
            <div>   
                <p>Hello World</p>
                <EvenAndOdd/>
                <FilterObj/>
                <FilterStr/>
                <Palindrome/>
                <Sum/>
            </div>
        )
    }
}

export default TopicBrowser