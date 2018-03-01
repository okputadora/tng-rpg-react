import React, { Component } from 'react'
import Character from './Character'
class CharacterBox extends Component{
  render(){
    var characters = this.props.characters.map((character, i) => {
      return(
        <Character
          name={character.name}
          image={character.image}
          health={character.image}
          onClick={this.props.onClick}
          key={i}
        />
      )
    })
    return (
        <div>{characters}</div>
    )
  }
}

export default CharacterBox
