import React, { Component } from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'

const state = {
    robots: robots,
    searchfield: ""
}

export App extends Component {
    return(<div className = "tc">
    <h1> My Robo-Pals </h1>
        <SearchBox/>
        <CardList robots = {robots}/>
        </div>
    );
}


export default App 