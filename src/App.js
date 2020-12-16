import logo from './logo.svg';
import './App.css';
import Funcional from './components/Funcional';
import Clases from './components/Clases';
import Extraccion from './components/Extraccion';
import Clock from './components/Clock';
import'../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import Eventos from './components/Eventos';
import EncendidoApagado from './components/EncendidoApagado';
import Condicional from './components/Condicional';
import ControlCondicional from './components/ControlCondicional';
import LineaCondicional from './components/LineaCondicional';
import NoQuieroCondicional from './NoQuieroCondicional';
import NumberList from './components/NumberList';
import KeysIds from './components/KeysIds';
import FormularioOne from './components/FormularioOne';
import LevelStateCalculador from './components/LevelStateCalculador';



const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Samuelito',
    avatarUrl : 'https://placekitten.com/g/64/64',
  },
};

const messages = ['React', 'Re: React', 'Re: RE: React']

const numbers = [1, 2, 3, 4, 5];

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm'}
];

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
        <NumberList numbers={numbers} />
        <KeysIds posts={posts}/>
      </div>
        <div className='col-6'>
          <EncendidoApagado/>
          <Eventos/>
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
          <Condicional
          isLoggedIn={true}/>
          <ControlCondicional/>
          <LineaCondicional 
          unreadMessages={messages}/>
          <NoQuieroCondicional/>
          <FormularioOne/>
          <LevelStateCalculador/>
        </div>
    </div>
  );
}

export default App;
