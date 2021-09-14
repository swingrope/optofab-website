import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainForm from "./features/form/MainForm";
import React, { useState } from "react";
import Feedback from "./features/form/Feedback";
import Modify from "./features/form/Modify";
import Track from "./features/form/Track";
import CustomerInfo from "./features/form/components/CustomerInfo";
import HomePage from "./Home";

function App() {
  const [part, setPart] = useState(1);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <HomePage />
          </div>
        </Route>
        <Route path="/request">
          <MainForm part={part} setPart={setPart} />
        </Route>
        <Route path="/error">Error</Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Route path="/modify">
          <Modify />
        </Route>
        <Route path="/customer">
          <CustomerInfo part={part} />
        </Route>
        <Route path="/track">
          <Track />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
