import React, { Fragment, Component } from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage.component'
import ShopPage from './Pages/ShopPage/Shop.component'
import Header from './Components/Header/Header.component'
import SignInAndOut from './Pages/SignIn-outPage/SignIn-outPage.Component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { connect } from 'react-redux'
import {setCurrentUser} from './Redux/user/user.actions'
import {Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  

  unSub= null;

  componentDidMount(){
    const {setCurrentUser} = this.props

   this.unSub= auth.onAuthStateChanged(async userAuth=>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser(
            {
              id: snapshot.id,
              ...snapshot.data()
            }
          )
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  
  

  componentWillUnmount(){
    this.unSub();
  }

  render() {
  return (
    <Fragment>
    <Header />
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/shop' component={ShopPage} />
    <Route exact path='/sign-in' render={()=>
      this.props.currentUser ? (<Redirect to='/' />):
      (<SignInAndOut />)
    } /> 
    </Switch>
    </Fragment>
    );
  }
}

const mapStateToProps = ({user}) => {
  return(
    {
      currentUser: user.currentUser
    }
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => {
      dispatch(setCurrentUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
