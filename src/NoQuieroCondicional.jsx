import React from 'react';

function WarningBanner(props) {
  if(!props.warn){
    return null;
  } 
  return (
    <div>
      <h4>
        Warning
      </h4> 
    </div>
  ) 
}

class NoQuieroCondicional extends React.Component {
  constructor(props) {
    super(props);
    this.state= {showWarning: true};
  }

  handleToggleClick = () =>{
    this.setState(state=>({
      showWarning: !state.showWarning
    }));
  }

  render(){
    return(
      <div>
        <WarningBanner warn ={this.state.showWarning}/>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide': 'Show'}
        </button>
      </div>
    )
  }
}

export default NoQuieroCondicional;