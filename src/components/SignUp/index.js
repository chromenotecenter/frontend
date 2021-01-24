import React from 'react'
import { FormContainer, FormBody, FormLogBox, FormForm, FormH1, FormInputPass, FormInputButton } from './SignupElements'
import { GoogleLogin } from 'react-google-login';


const SignUp = () => {

    const ress = (output) => {
        console.log(output)
    }
    const authIt = (e) => {
        e.preventDefault();
        window.gapi.load('auth2', function () {
            let auth2 = window.gapi.auth2.init({
                client_id: '425769475738-5nsmqrlatdene4ih1qfkj6grmt5bf18i.apps.googleusercontent.com',
            });
            auth2.grantOfflineAccess().then(ress)
        });

    }


    return (
        <FormBody>
            <FormContainer>
                <FormLogBox>
                    <FormForm onSubmit={authIt}>
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
