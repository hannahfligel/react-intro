import {useState} from "react";
import logo from '../../src/logo.svg';

function _template(){
    // const[name, setName] = useState( null );
    
    return(
        <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
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
        </div>
    )
}

export default _template