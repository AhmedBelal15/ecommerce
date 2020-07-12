import React, { Fragment } from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage.component'
import ShopPage from './Pages/ShopPage/Shop.component'
import Header from './Components/Header/Header.component'
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Fragment>
    <Header />
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/shop' component={ShopPage} />
    </Switch>
    </Fragment>
    );
}

export default App;
