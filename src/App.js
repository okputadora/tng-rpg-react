import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterBox from './components/CharacterBox'

// would like to get this from an external file or request to the server
const characters = [
  {
    name: "Jean-Luc Picard",
    image: "/images/picard.jpg",
    health: 190,
    power: 13
  },
  {
    name: "The Borg",
    image: "/images/borg.jpg",
    health: 150,
    power: 10
  },
  {
    name: "Data",
    image: "/images/data.jpg",
    health: 150,
    power: 15
  },
  {
    name: "Q",
    image: "images/q.jpg",
    health: 90,
    power: 30
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
    this.initialState = this.state
    this.gameOn = false
    this.oppSelected = false
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
      // add property base power to the character you pick
      // so we know how much to increase its power each time it attacks
      yourCharacter.basePower = yourCharacter.power
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
      var instruction = (
        <button
          className="btn btn-deault"
          // what exactly is going on here, why did I need to bind
          // this
          onClick={this.attack.bind(this)}>Click to Attack
        </button>
      )
      var opponent = []
      characters.forEach((elem, i) => {
        if(elem.name === name){
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
  attack(){
    console.log("attacking")
    console.log(this.state.yourCharacter)
    var yourCharacter = this.state.yourCharacter[0]
    var opponent = this.state.opponent[0]
    opponent.health -= yourCharacter.power
    // check to see if the opponent is beaten
    if (opponent.health <= 0){
      console.log("opponent beaten")
      // if that was the last opponent game is over
      // else select another opponent and reset attack power
      yourCharacter.power = yourCharacter.basePower
      var instruction = (this.state.enemies.length === 0) ?
        "You've won" : "You beat " +opponent.name+" select another enemy"
      this.setState({
        opponent: [],
        instruction: instruction,
        opponentH2: ""
      })
    }
    else{
      // incur the counterAttack
      yourCharacter.health -= opponent.power
      if (yourCharacter.health <= 0){
        this.setState({
          instruction: "You've lost"
          // would be nice if I saved that initialState and then
          // just went back to it
        })
      }
      console.log(yourCharacter.health)
      // increase attack power
      yourCharacter.power += yourCharacter.basePower
      console.log("power "+yourCharacter.power)
      this.setState({
        yourCharacter: [yourCharacter],
        opponent: [opponent],
      })
    }
  }
  // well clearly this doesn't seem like the optimal solution
  doNothing(){

  }
  render() {
    return (
      <div>
        <header className="App-header text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TNGRPG w/ react</h1>
        </header>
        <div className="App container-fluid">
          <h1 className="text-left">{this.state.instruction}</h1>
          <CharacterBox characters={this.state.yourCharacter} onClick={(name) => this.selectCharacter(name)}/>
          <h2 className="text-left">{this.state.opponentH2}</h2>
          <CharacterBox characters={this.state.opponent} onClick={(name) => this.doNothing(name)} />{/* this needs to be unclickable */}
          <h2 className="text-left">{this.state.enemyH2}</h2>
          <CharacterBox characters={this.state.enemies} onClick={(name) => this.selectOpponent(name)}/>
        </div>
      </div>

    );
  }
}

export default App;
