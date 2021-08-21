import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainForm from './features/form/MainForm';
import React, { useState } from 'react';

function App() {

  const [part, setPart] = useState(0)

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <MainForm part={part} setPart={setPart}/>
        </Route>
        <Route path='/error'>
            Error
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
