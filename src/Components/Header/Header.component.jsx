import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/logo.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import './Header.style.scss';

const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link to="/" className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link to='/contact' className='option'>
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
                    :
                    <Link className='option' to='/sign-in'>Sign In</Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        currentUser: state.user.currentUser
    }
}


export default connect(mapStateToProps)(Header);