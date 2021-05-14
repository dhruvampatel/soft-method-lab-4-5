import Signup from './components/signup/Signup';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/signup' component={Signup}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
