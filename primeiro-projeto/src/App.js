import logo from './logo.svg';
import './App.css';

function App() {
  
    const name = 'Jefferson'
    const newname = name.toUpperCase() 

     // Jeito correto de fazer gerando funcões
    function upercase(name){
      return name.toUpperCase()
    }

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
/*
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
*/
          

        >
          <p>{name} </p>
          <p>{newname} </p>

          Primeiro Projeto React
          <p>{upercase('jefferson barbosa lima')} </p>
           
        </a>
      </header>


    </div>
  );
}

export default App;
