import React from 'react';

import logo from '../logo.svg';
import '../App.css';
import InicialCompact from './InicialCompact';

class Inicial extends React.Component {
  render(){
    return(
      <div>
        <div>
          <div className="App row" >
            <header className="col-6">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                  Learn React
              </a>
            </header>
            <div className="col-6">
              <InicialCompact/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Inicial;