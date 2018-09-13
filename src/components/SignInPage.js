import React, { Component } from 'react';
import SignInForm from './SignInForm'




import './SignInPage.css';


class SignInPage extends Component {
    render() {
      return (
        <div>
             <h1>sign in page</h1>
          <hr/>
           <SignInForm />
          
        </div>
      );
    }
  }
  
  export default SignInPage;