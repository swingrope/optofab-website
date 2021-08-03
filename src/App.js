import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainForm from './features/form/MainForm';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <MainForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
