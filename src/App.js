import logo from './logo.svg';
import './App.css';
import Login from './Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Route exact path='/login' component={Login}/>
      </Router>
      <Login/>
    </div>
  );
}

export default App;
