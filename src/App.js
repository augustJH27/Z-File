import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import LandingPage from './components/pages/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/ayodonasi' component={Services} />
          <Route path='/bukadonasi' component={Products} />
          <Route path='/tentangkami' component={Products} />
          <Route path='/login' component={Login} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
