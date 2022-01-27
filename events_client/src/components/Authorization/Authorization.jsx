import React from 'react';
import { 
    LoginTextField,
    SubmitButton,
    LoginBox
} from './Authorization.styled';
import { useForm } from "react-hook-form";


export default function Authorization() {
   const {

   } = useForm();

    return ( 
    
        <LoginBox>
            <LoginTextField
                label="Email"
            />
            <LoginTextField
                label="Password"
            />
            <SubmitButton type="submit" variant="contained" size='small'>Sign in</SubmitButton>
        </LoginBox>
            
    );
  }