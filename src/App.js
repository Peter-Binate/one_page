import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch> {/*Permet d'éviter que des erreurs s'affiche partout*/}
          <Route path='/one_page/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/signUp' exact component={SignUp} />   
        </Switch>
      </Router>
    </>
  );
}

export default App;
