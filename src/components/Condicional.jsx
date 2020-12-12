import React from 'react';

function UserGreeting(props) {
  return<h1> Welcome back!</h1>
}
function GuestGreeting(props) {
  return<h1> Please sign up.</h1>
}

function Condicional(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting/>;
  }
  return <GuestGreeting/>;
}

export default Condicional;