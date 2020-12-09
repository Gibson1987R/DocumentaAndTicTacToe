import React from 'react';

function Avatar (props) {
  return(
    <img src={props.user.avatarUrl} 
    alt={props.user.name} // Recibiendo en el hijo
    className="Avatar"/>
  )
}

export default Avatar;