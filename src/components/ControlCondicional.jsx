import React from 'react';
import Condicional from './Condicional';

function LoginButton(props) {
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function  LogoutButton(props) {
  return(
  <button onClick={props.onClick}>
    Logout
  </button>
  );
}

class ControlCondicional extends React.Component {
  constructor(props){
    super(props);
    this.state={isLoggedIn: false}
  }
  
  handleLoginClick =()=>{
    this.setState({isLoggedIn: true})
  }
  
  handleLogoutClick = ()=>{
    this.setState({isLoggedIn: false})
  }

  /* If else*/
  // render(){
  //   const isLoggedIn = this.state.isLoggedIn;
  //   let button;
  //   if(isLoggedIn) {
  //     button = <LogoutButton onClick ={this.handleLogoutClick} />
  //   } else {
  //     button= <LoginButton onClick = { this.handleLoginClick} />
  //   }
  //   return(
  //     <div>
  //       <Condicional isLoggedIn={isLoggedIn}/>
  //       {button}
  //     </div>
  //   )
  // }
  
  /* operador ternario*/
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    {isLoggedIn 
      
      ? button = <LogoutButton onClick ={this.handleLogoutClick} /> 
      : button= <LoginButton onClick = { this.handleLoginClick} />
    }
    return(
      <div>
        <Condicional isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}

export default ControlCondicional;