import React from 'react';
class EncendidoApagado extends React.Component {

  /*Con bindeo*/
  // constructor(props){
  //   super(props);
  //   this.state= {isToggleOn: true};

  //   /* Acá bindeamos para hacer que this funciones como callback*/

  //   this.handleClick= this.handleClick.bind(this);
  // }

  // handleClick() {
  //   this.setState(state => ({
  //     isToggleOn: !this.state.isToggleOn
  //   }));
  //   // console.log(`Estoy ${this.state.isToggleOn}`)
  //   console.log(`Estoy ${this.state.isToggleOn ? 'Encendido' :'Apadado'}`)
  // }

  
  /*Sin bindeo */
  // state= {isToggleOn: true}; el estado puede ser así
  constructor(props){
    super(props);
    this.state= {isToggleOn: true};
  }

  handleClick = () =>{
    this.setState(state => ({
      isToggleOn: !this.state.isToggleOn
    }));
    // console.log(`Estoy ${this.state.isToggleOn}`)
    console.log(`Estoy ${this.state.isToggleOn ? 'Encendido' :'Apadado'}`)
  }


  render() {
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Encendido' :'Apadado'}
      </button>
    )
  }

}

export default EncendidoApagado;