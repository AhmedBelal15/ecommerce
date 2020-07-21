import React from 'react';
import SignIn from '../../Components/Sign-in/SignIn.Component'
import SignUp from '../../Components/Sign-Up/Sign-Up.component'
import './SignIn-outPage.Style.scss';

const SignInAndOut =() =>{
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndOut;