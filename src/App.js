import React, { useEffect } from 'react';
import Register from './pages/signup/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { LoadingProvider } from './contexts/loaderContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <LoadingProvider>
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
      </LoadingProvider>
      <ToastContainer />
    </div>
  )
}

export default App;