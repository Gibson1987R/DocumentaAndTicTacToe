import React from 'react';

import LevelState from './LevelState';
import LevelStateInput from './LevelStateInput';

/* version-4 Agregando funciones de conversión  y Levantando el estado de los LevelStateInput que son importados*/

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) *5 / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class LevelStateCalculador extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      calc: {
        temperature: '',
        scale: 'c'
      }
    };
  }

  handleCelsiusChange = (temperature) => {
    this.setState({
      calc: {
        ...this.state.calc,
        temperature,
        scale: 'c'
      },
    });
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({
      calc: {
        ...this.state.calc,
        temperature,
        scale: 'f'
      },
    });
  };
  
  render(){
    const scale = this.state.calc.scale;
    const temperature = this.state.calc.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return(
      <div>
        <LevelStateInput 
        scale = 'c'
        temperature = {celsius}
        onTemperatureChange = {this.handleCelsiusChange}/>
        <LevelStateInput 
        scale = 'f'
        temperature = {fahrenheit}
        onTemperatureChange = {this.handleFahrenheitChange}
        />
        <LevelState
        celsius ={parseFloat(celsius)}/>
      </div>
    )
  }
}

export default LevelStateCalculador;

// class LevelStateCalculador extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       calc: {
//         temperature: ''
//       }
//     };
//   }

//   handleOnChange = (e) => {
//     this.setState({
//       calc: {
//         ...this.state.calc,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   render(){
//     const temperature = this.state.calc.temperature;
//     return(
//       <fieldset>
//         <legend>Enter temperature in Celsius:</legend>
//         <input
//         name='temperature'
//         value={temperature}
//         onChange={this.handleOnChange}/>
//         <LevelState
//         celsius ={parseFloat(temperature)}/>
//       </fieldset>
//     )
//   }
// }

/*  version-2 Descomposición y otra entrada en Fahrenhit*/

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// class LevelStateInput extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       calc: {
//         temperature: ''
//       }
//     };
//   }

//   handleOnChange = (e) => {
//     this.setState({
//       calc: {
//         ...this.state.calc,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   render(){
//     const temperature = this.state.calc.temperature;
//     const scale = this.props.scale;
//     return(
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input
//         name='temperature'
//         value={temperature}
//         onChange={this.handleOnChange}/>
//         <LevelState
//         celsius ={parseFloat(temperature)}/>
//       </fieldset>
//     )
//   }
// }

// class LevelStateCalculador extends React.Component{
//   render(){
//     return(
//       <div>
//         <LevelStateInput scale = 'c'/>
//         <LevelStateInput scale = 'f'/>
//       </div>
//     )
//   }
// }

// /* version-3 Agregando funciones de conversión  y Levantando el estado de los LevelStateInput*/

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) *5 / 9;
// }
// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if(Number.isNaN(input)){
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }


// class LevelStateInput extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   handleOnChange = (e) => {
//     this.props.onTemperatureChange([e.target.name] = e.target.value);
//   };

//   render(){
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return(
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input
//         name='temperature'
//         value={temperature}
//         onChange={this.handleOnChange}/>
//       </fieldset>
//     )
//   }
// }

// class LevelStateCalculador extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       calc: {
//         temperature: '',
//         scale: 'c'
//       }
//     };
//   }

//   handleCelsiusChange = (temperature) => {
//     this.setState({
//       calc: {
//         ...this.state.calc,
//         temperature,
//         scale: 'c'
//       },
//     });
//   };

//   handleFahrenheitChange = (temperature) => {
//     this.setState({
//       calc: {
//         ...this.state.calc,
//         temperature,
//         scale: 'f'
//       },
//     });
//   };
  
//   render(){
//     const scale = this.state.calc.scale;
//     const temperature = this.state.calc.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//     return(
//       <div>
//         <LevelStateInput 
//         scale = 'c'
//         temperature = {celsius}
//         onTemperatureChange = {this.handleCelsiusChange}/>
//         <LevelStateInput 
//         scale = 'f'
//         temperature = {fahrenheit}
//         onTemperatureChange = {this.handleFahrenheitChange}
//         />
//         <LevelState
//         celsius ={parseFloat(celsius)}/>
//       </div>
//     )
//   }
// }

// export default LevelStateCalculador;
