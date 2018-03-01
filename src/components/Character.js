import React from 'react'
import style from './characterStyle'
function Character(props) {
  return(
    <div className="character" id={props.name} style={style.character} onClick={() => props.onClick(props.name)}>
      <div className="name" id={props.name}>{props.name}</div>
      <img height="200" src={props.image} />
      <div className="health">Health: <strong>{props.health}</strong></div>
    </div>
  )
}

export default Character
