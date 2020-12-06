import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const name ='Samuel Rosales';
// const element = <h1>Hello, world!... Soy {name}</h1>

// -------- fin de la clase 2
// function formatName (persona) {
//   return `${persona.firstName}  ${persona.lastName}`
// }

// const persona = {
//   firstName : 'Adixon',
//   lastName : 'Matar'
// }

// const element = (
// <h1>
//   Hello, world!... Soy {formatName(persona)} !
// </h1>)

// ReactDOM.render(
  //   element,
  //   document.getElementById('root')
  // );
  
  // function getGreeting(persona) {
  //   if (persona) {
  //     return <h1> Hello, {formatName(persona)}</h1>;
  //   }
  //   return <h1>Hellos, Strager.</h1>;
  // }
  
  
  // ReactDOM.render(
  //   getGreeting(persona),
  //   document.getElementById('root')
  //   );
  
  // function tick () {
    //   const element =(
      //     <div>
      //       <h1> Hello, world!</h1>
      //       <h2> It is {new Date().toLocaleTimeString()}</h2>
      //     </div>
      //   );   
      //   ReactDOM.render(
        //     element,
        //     document.getElementById('root')
        //     );
        // }
        // -------- fin de la clase 3
    
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
