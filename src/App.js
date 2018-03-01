import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterBox from './components/CharacterBox'

// would like to get this from an external file or request to the server
const characters = [
  {
    name: "Captain Picard",
    image: "/images/picard.jpg",
    health: 190,
    power: 13
  },
  {
    name: "The Borg",
    image: "/images/borg.jpg",
    health: 200,
    power: 19
  },
  {
    name: "Data",
    image: "/images/data.jpg",
    health: 150,
    power: 28
  },
  {
    name: "Q",
    image: "images/q.jpg",
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
      defender: [],
      instruction: "Choose a player"
    }
    this.gameOn = false
  }
  componentDidMount(){
    // initialization that requires DOM or request to remote endpoint
    // should go here
  }

  handleClick(name){
    console.log(name)
    if (!this.gameOn){
      this.gameOn = true
      var yourCharacter
      characters.forEach((elem, i) => {
        if(elem.name == name){
          console.log("names match")
          yourCharacter = elem
          characters.splice(i, 1)
        }
      })
    }
    this.setState({
      yourCharacter: [yourCharacter],
      enemies: characters
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TNGRPG w/ react</h1>
        </header>
        <h1>{this.state.instruction}</h1>
        <CharacterBox characters={this.state.yourCharacter} onClick={(name) => this.handleClick(name)}/>
        <CharacterBox characters={this.state.enemies} />
        <CharacterBox characters={this.state.defender} />

      </div>
    );
  }
}

export default App;
