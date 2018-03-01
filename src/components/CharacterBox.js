import React, { Component } from 'react'
import Character from './Character'
import style from './characterBoxStyle'
class CharacterBox extends Component{
  render(){
    var characters = this.props.characters.map((character, i) => {
      return(
        <Character

          name={character.name}
          image={character.image}
          health={character.health}
          onClick={this.props.onClick}
          key={i}
        />
      )
    })
    return (
        <div style={style.container}>{characters}</div>
    )
  }
}

export default CharacterBox
