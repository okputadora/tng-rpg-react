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
      opponent: [],
      instruction: "Choose a player",
      enemyH2: "",
      opponentH2: "",
    }
    this.gameOn = false
    this.oppSelected = false
  }
  componentDidMount(){
    // initialization that requires DOM or request to remote endpoint
    // should go here
  }

  selectCharacter(name){
    if (!this.gameOn){
      this.gameOn = true
      var yourCharacter
      var instruction = "Select your first opponent from enemies"
      // find the clicked character in the array of character objects
      characters.forEach((elem, i) => {
        if(elem.name === name){
          yourCharacter = elem
          characters.splice(i, 1)
        }
      })
      this.setState({
        yourCharacter: [yourCharacter],
        enemies: characters,
        instruction: instruction,
        enemyH2: "Enemies"
      })
    }
  }
  selectOpponent(name){
    if (this.gameOn && !this.opSelected){
      this.gameOn = true
      var instruction = "Begin Attacking"
      var opponent = []
      console.log(name)
      characters.forEach((elem, i) => {
        if(elem.name === name){
          console.log(elem)
          console.log("names match")
          opponent.push(elem)
          characters.splice(i, 1)
        }
      })
      this.setState({
        opponent: opponent,
        enemies: characters,
        instruction: instruction,
        opponentH2: "Opponent"
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TNGRPG w/ react</h1>
        </header>
        <h1>{this.state.instruction}</h1>
        <CharacterBox characters={this.state.yourCharacter} onClick={(name) => this.selectCharacter(name)}/>
        <h2>{this.state.opponentH2}</h2>
        <CharacterBox characters={this.state.opponent} />
        <h2>{this.state.enemyH2}</h2>
        <CharacterBox characters={this.state.enemies} onClick={(name) => this.selectOpponent(name)}/>
      </div>
    );
  }
}

export default App;
