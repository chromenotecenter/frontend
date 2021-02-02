import React from 'react'
import {FormContainer, FormBody, FormLogBox, FormForm, FormH1, FormInputPass, FormInputButton } from './SignupElements'
import { BackendURL }from '../BackendURL'


const SignUp = ({ open, onClose }) => {
    const signInCallback = (authResult) => {
        
        console.log(authResult)
        // fetch("https://ad44a0cb5b78.ngrok.io/api/google_signup", {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //       },
        //       credentials: 'include',
        //       body: JSON.stringify(authResult)
        // }).then((res) => {
        //     console.log(res.json())
        // })
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        window.gapi.load('auth2', function() {
            let auth2 = window.gapi.auth2.init({
              client_id: '425769475738-5nsmqrlatdene4ih1qfkj6grmt5bf18i.apps.googleusercontent.com',
              scope: 'email'
            });
            auth2.grantOfflineAccess().then(signInCallback);
          });
    }

    if (!open) return null
    return (
        <FormBody onClick={onClose}>
            <FormContainer>
               <FormLogBox>
                    <FormForm onSubmit={handleSubmit}  >
                        <FormH1>Sign up for Sentrilize!</FormH1>
                        
                        <FormInputButton type="submit" value="Sign me up!" />
                    </FormForm>  
               </FormLogBox>
            </FormContainer>
        </FormBody>
    )
}


export default SignUp

