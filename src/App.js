import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
// import LandingPage from './components/pages/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import Services from './pages/Services';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

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
          <Route path='/daftar' component={Register} />
          <Route path='/masuk' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
