import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
//importing components
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understand/Understanding'
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Home from '../Home /Home';
import Header from '../Header/Header';

function App() {

  return (
    <Router>
    <div className='App'>
      <Header />

        <Route path='/'>
          <Home />
        </Route>

        <Route path='/questions/feelings'>
          <Feelings />
        </Route>

        <Route path='/questions/understanding'>
          <Understanding />
        </Route>

        <Route path='/questions/support'>
          <Support />
        </Route>

        <Route path='/questions/comments'>
          <Comment />
        </Route>

        <Route path='/questions/review'>
          <Review />
        </Route>

    </div>
    </Router>
  );
}

export default App;
