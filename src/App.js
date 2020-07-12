import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage.component'
import ShopPage from './Pages/ShopPage/Shop.component'
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/shop' component={ShopPage} />
    </Switch>
    );
}

export default App;
