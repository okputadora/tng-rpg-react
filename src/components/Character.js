import React from 'react'
import style from './characterStyle'
function Character(props) {
  return(
    <div className="character" id={props.name} style={style.character} onClick={() => props.onClick(props.name)}>
      <h3 className="name" id={props.name}>{props.name}</h3>
      <img height="200" src={props.image} alt={props.name} />
      <div className="health">Health: <strong>{props.health}</strong></div>
    </div>
  )
}

export default Character
