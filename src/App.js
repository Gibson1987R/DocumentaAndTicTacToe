import logo from './logo.svg';
import './App.css';
import Funcional from './components/Funcional';
import Clases from './components/Clases';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Funcional
      name ='Gibson'/>
      <Clases
      name ='Samuel'/>
    </div>
  );
}

export default App;
