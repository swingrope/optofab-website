import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainForm from './features/form/MainForm';
import React, { useState } from 'react';
import Feedback from "./features/form/Feedback";
import Modify from "./features/form/Modify";
import Track from "./features/form/Track";

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
          <Route path='/feedback'>
              <Feedback/>
          </Route>
          <Route path='/modify'>
              <Modify/>
          </Route>
          <Route path='/track'>
              <Track/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
