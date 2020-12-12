import React from 'react';

function NumberList(props) {
  const numbers = props.numbers;
/*Sin key nos sale un warning*/
  // const listItems = numbers.map((number)=>
  //   <li>{number}</li>
  // );
/*Con key arreglamos el warning*/
const listItems = numbers.map((number)=>
  <li key={number.toString()}>
    {number}
  </li>
  );
  return(
    <ul>{listItems}</ul>
  )
}

export default NumberList;