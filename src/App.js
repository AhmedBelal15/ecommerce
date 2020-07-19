import React, { Fragment, Component } from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage.component'
import ShopPage from './Pages/ShopPage/Shop.component'
import Header from './Components/Header/Header.component'
import SignInAndOut from './Pages/SignIn-outPage/SignIn-outPage.Component'
import {auth} from './firebase/firebase.utils'
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      currentUser: null
    }
  }

  unSub= null;

  componentDidMount(){
   this.unSub= auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unSub();
  }

  render() {
  return (
    <Fragment>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/shop' component={ShopPage} />
    <Route exact path='/sign-in' component={SignInAndOut} />
    </Switch>
    </Fragment>
    );
  }
}

export default App;
