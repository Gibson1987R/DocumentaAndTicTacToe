import logo from './logo.svg';
import './App.css';
import Funcional from './components/Funcional';
import Clases from './components/Clases';
import Extraccion from './components/Extraccion';
import Clock from './components/Clock';
import'../node_modules/bootstrap/dist/css/bootstrap-grid.css'



const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Samuelito',
    avatarUrl : 'https://placekitten.com/g/64/64',
  },
};


function App() {
  return (
    <div className='row'>
      <div className="App col-6">
        <header className="App-header ">
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
        <Clock/>
        <Clock/>
        <Clock/>
      </div>
        <div className='col-6'>
          <Funcional
          name ='Gibson'/>
          <Clases
          name ='Samuel'/>
          <Clases
          name ='Anaís'/>
          <Extraccion
          date={comment.date}
          text={comment.text}
          author={comment.author}
          />
        </div>
    </div>
  );
}

export default App;
