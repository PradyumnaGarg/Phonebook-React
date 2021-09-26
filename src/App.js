import React from 'react';
import Register from './pages/signup/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/"><Login /></Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App;