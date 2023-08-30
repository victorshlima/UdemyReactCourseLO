import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
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

      <div>
        <p> Olá </p>      
      </div>
      </header>
      <body>

      <div>
        <p> I'm am the body </p>      
      </div>
      </body>
    </div>


    <div className="App2">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {1 +1 } Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      <div>
        <p> Olá </p>      
      </div>
      </header>
      <body>

      <div>
        <p> I'm am the body </p>      
      </div>
      </body>
    </div>
    </>
  );
}

export default App;
