import React from 'react';

function Eventos() {
  function handleClick(e) {
    e.preventDefault();
    // document.write('The link was clicked.');
    console.log('The link was clicked.');
  }
  
  return(
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  )
}

export default Eventos;