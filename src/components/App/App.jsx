import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
//importing components
import Feelings from './Feelings/Feelings';
import Understanding from '../Understand/Understanding'

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <Route path='/questions/feelings'>
          <Feelings />
        </Route>

        <Route path='/questions/understanding'>
          <Understanding />
        </Route>
      </header>
    </div>
    </Router>
  );
}

export default App;
