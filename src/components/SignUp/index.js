import React from 'react'
import {FormContainer, FormBody, FormLogBox, FormForm, FormH1, FormInputPass, FormInputButton } from './SignupElements'
import { BackendURL }from '../BackendURL'


const SignUp = () => {
    const signInCallback = (authResult) => {
        fetch("https://abe9f0b95a9d.ngrok.io/api/google_signup", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              credentials: 'include',
              body: JSON.stringify(authResult)
        }).then((res) => {
            console.log(res.json())
        })
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        window.gapi.load('auth2', function() {
            let auth2 = window.gapi.auth2.init({
              client_id: '425769475738-ue64qfeithd259asjpk33hrhssjim76n.apps.googleusercontent.com',
              scope: 'email'
            });
            auth2.grantOfflineAccess().then(signInCallback);
          });
    }
    return (
        <FormBody>
            <FormContainer>
               <FormLogBox>
                    <FormForm onSubmit={handleSubmit}  >
                        <FormH1>Create Account</FormH1>
                        <FormInputPass placeholder="First Name" type="text" name="firstname" autoFocus="autofocus" required="required" />
                        <FormInputPass placeholder="Last Name" type="text" name="lastname" autoFocus="autofocus" required="required" />
                        <FormInputPass placeholder="Email" type="email" name="email" autoFocus="autofocus" required="required" />
                        <FormInputPass placeholder="Password" type="password" name="password" autoFocus="autofocus" required="required" />
                        <FormInputPass placeholder="Confirm Password" type="password" name="password2" autoFocus="autofocus" required="required" />
                        <FormInputButton type="submit" value="Sign me up!" />
                    </FormForm>  
               </FormLogBox>
            </FormContainer>
        </FormBody>
    )
}


export default SignUp
