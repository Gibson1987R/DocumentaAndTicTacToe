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

// function Clock(props) {
//   return(
//     <div>
//       <h1> Hello, world!</h1>
//       <h2> It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }


// -----pasamos a Clock de función a clase
// class Clock extends React.Component{
//   render() {
//     return(
//     <div>
//       <h1> Hello, world!</h1>
//       <h2> It is {this.props.date.toLocaleTimeString()}</h2>
//     </div>
//     )
//   }
// }

// function tick () {
//   ReactDOM.render(
//     <Clock date={new Date()}/>,
//     document.getElementById('root')
//   );
  
// }

// -----pasando de this.props a this.state en el render y añandiendo state en el constructor
// class Clock extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date()};
//   }

//   render() {
//     return(
//     <div>
//       <h1> Hello, world!</h1>
//       <h2> It is {this.state.date.toLocaleTimeString()}</h2>
//     </div>
//     )
//   }
// }

// -----ciclo de vida componentDidMount() y componentWillUnmount() e integrando tick()
/*class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = { date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return(
    <div>
      <h1> Hello, Adriana</h1>
      <h2> It is {this.state.date.toLocaleTimeString()}</h2>
    </div>
    )
  }
}*/

//----eliminamos la prop date del componente Clock
/*ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
);*/

/*
Flujo de datos desde el estado.

1 PASAMOS el componente al ReactDOM.
2 el componente llama a su constructor.
3 el constructor pasa a react la data inicializada del state.

4 react invoca al render() del componente.
5 react sabe que va a mostrar en pantalla.
6 react actuliza el DOM coincidiendo con la data inicializada a la salida del componente.

7 react invoca componentDidMount() a la salida del componete.
8 este método entonces realiza o llama funcionalidades definidas.

9 las funcionalidades planifican la actualización de la interfaz invocando a setState().

10 react se entera que cambió el estado con setState().

11 react vuelve a invocar al render() del componente.
12 react sabe que debe mostrar en pantalla.
13 react actualiza el DOM pero esta vez this.state en el render() posee data actualizada del estado a la salida del componente. 

14 repite el flujo constantemente.

Si en alguún momento se elimina el componente del DOM entoces react invoca al método componentWillUnmount().

*/


// -------- fin de la clase 5

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
