import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterBox from './components/CharacterBox'

// would like to get this from an external file or request to the server
const characters = [
  {
    name: "Darth Maul",
    image: "",
    health: 190,
    power: 13
  },
  {
    name: "Han Solo",
    image: "",
    health: 200,
    power: 19
  },
  {
    name: "Luke Skywalker",
    image: "",
    health: 150,
    power: 28
  },
  {
    name: "Princess Leia",
    image: "",
    health: 60,
    power: 45
  }
]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      yourCharacter: characters,
      enemies: [],
      defender: []

    }
  }
  componentDidMount(){
    // initialization that requires DOM or request to remote endpoint
    // should go here
  }

  handleClick(e){
    console.log("click")
    console.log(e.target.id)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CharacterBox characters={this.state.yourCharacter} onClick={(e) => this.handleClick(e)}/>
        <CharacterBox characters={this.state.enemies} />
        <CharacterBox characters={this.state.defender} />

      </div>
    );
  }
}

export default App;
