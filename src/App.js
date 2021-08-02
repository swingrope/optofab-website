import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainForm from './features/form/MainForm';
import Spdt from './features/form/types/Spdt';
import Optic from './features/form/types/Optic';
import Photonic from './features/form/types/Photonic';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <MainForm />
        </Route>
        <Route path='/spdt' component={Spdt}/>
        <Route path='/optic' component={Optic}/>
        <Route path='/photonic' component={Photonic}/>
      </Switch>
    </Router>
  );
}

export default App;
