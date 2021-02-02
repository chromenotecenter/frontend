import styled from 'styled-components';

export const FormBody = styled.div`
    background: #00000080;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
`


export const FormContainer = styled.div`

    display: -webkit-flex;
    display: flex;
    height: 100%; 
    width: 100%;
`

export const FormLogBox = styled.div`
  margin: 200px auto;
  width: 340px;
  height: 300px;
  background-color: #fff;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25); 
`

export const FormForm = styled.form`
    height:100%;
    padding-top: 80px;
`
export const FormH1 = styled.h1`
    text-align: center;
    font-size: 175%;
    color: #757575;
    font-weight: 300;
`

export const FormInputPass = styled.input`
    width: 75%;
    height: 50px;
    display: block;
    margin: 0 auto 15px;
    padding: 0 15px;
    border: none;
    border-bottom: 2px solid #ebebeb;
    &:focus{
        outline: none;
        border-bottom-color: #58c791 !important;
    }
    &:hover{
        border-bottom-color: #dcdcdc;
    }
    &:invalid{
        box-shadow: none;
    }
`

export const FormInputButton = styled.input`
    position: relative;
    width: 85%;
    height: 50px;
    display: block;
    margin: 30px auto 30px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    border-radius: 5px;
    color: white;
    background-color: #58c791;
    border: none;
    -webkit-box-shadow: 0 5px 0 #3aad73;
    -moz-box-shadow: 0 5px 0 #3aad73;
    box-shadow: 0 5px 0 #3aad73;
    &:hover{
        top: 2px;
        -webkit-box-shadow: 0 3px 0 #3aad73;
        -moz-box-shadow: 0 3px 0 #3aad73;
        box-shadow: 0 3px 0 #3aad73;        
    }
    &:active{
        top: 5px;
        box-shadow: none;       
    }
    &:focus{
        outline:none;
    }
`