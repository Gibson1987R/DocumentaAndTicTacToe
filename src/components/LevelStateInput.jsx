import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class LevelStateInput extends React.Component{
  constructor(props){
    super(props);
  }

  handleOnChange = (e) => {
    this.props.onTemperatureChange([e.target.name] = e.target.value);
  };

  render(){
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return(
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
        name='temperature'
        value={temperature}
        onChange={this.handleOnChange}/>
      </fieldset>
    )
  }
}

export default LevelStateInput;