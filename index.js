import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import MainQuiz from "./components/menu";
import Menu from './components/menu';


function App() {
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
