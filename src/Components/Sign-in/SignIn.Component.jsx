import React, { Component } from 'react';
import FormInput from '../Form Input/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';
import {SignInWithGoogle} from '../../firebase/firebase.utils'
import './SignIn.Style.scss';

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
        email: '',
        password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState=> (
            {
                email: '',
                password: ''
            }
        ))
    }

    handleChange = (e) =>{
        const {name, value}= e.target;

        this.setState(
            prevState => (
                {
                    [name]: value
                }
            )
        )

    }
   render(){
       return(
           <div className='sign-in'>
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                   <FormInput 
                   name='email'
                   value={this.state.email}
                   required
                   type='email'
                   handleChange={this.handleChange}
                   label='email'
                   />

                   <FormInput 
                   name='password'
                   value={this.state.password}
                   required
                   type='password'
                   handleChange={this.handleChange}
                   label='password'
                   />
                    <div className='buttons'>
                   <CustomButton type="submit"> Sign In </CustomButton>
                   
                   <CustomButton type="button" onClick={SignInWithGoogle} isGoogleSignIn>
                       {''}
                        Sign In With Google {''}
                        </CustomButton>
                    </div>
               </form>
           </div>
       )
   }

}

export default SignIn;