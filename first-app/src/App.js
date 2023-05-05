import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's see what React has to offer.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a 
        target="_blank"
        href="https://github.com/yelosolutions"
        rel="noopener noreferrer"
        >Follow Me</a>
      </header>
    </div>
  );
}

export default App;
