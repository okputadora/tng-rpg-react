import React from 'react'

function Character(props) {
  return(
    <div className="character" onClick={props.onClick}>
      <div className="name" id={props.name}>{props.name}</div>
      <div className="image">{props.image}</div>
      <div className="health">{props.health}</div>
    </div>
  )
}

export default Character
