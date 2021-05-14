import Signup from './components/signup/Signup';
import Profile from './components/profile/Profile';
import Login from './Login';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>  
          <Route exact path='/profile' component={Profile}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
