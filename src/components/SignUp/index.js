import React from 'react'
import {FormContainer, FormBody, FormLogBox, FormForm, FormH1, FormInputPass, FormInputButton } from './SignupElements'
import { BackendURL } from '../BackendURL'
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';



const SignUp = () => {
    var csrftoken = Cookies.get('csfrtoken');
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {}
        let firstname = e.target.firstname.value;
        data["firstname"] = firstname
        let lastname = e.target.lastname.value;
        data["lastname"] = lastname
        let email = e.target.email.value;
        data["email"] = email
        let password = e.target.password.value;
        data["password"] = password
        let password2 = e.target.password2.value;
        data["password2"] = password2
        let redi = fetch(BackendURL + "api/register/",{
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                'HTTP_X_CSRFTOKEN': csrftoken
             },
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => {
            return res.json()
        }).then(handler => {
            console.log(handler)
            if (handler['status'] == 'ok'){
                console.log(document.cookie)
                // window.location.replace("/");
            }
        })
        console.log(redi)
        return redi
 
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
