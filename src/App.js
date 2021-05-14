import Signup from './components/signup/Signup';
import Profile from './components/profile/Profile';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/profile' component={Profile}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;