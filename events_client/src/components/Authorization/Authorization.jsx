import React, { useState } from 'react';
import { 
    LoginTextField,
    SubmitButton,
    LoginBox,
    LoginForm
} from './Authorization.styled';
import { useForm } from "react-hook-form";
import login from '../../services/api/axios/login.api';


export default function Authorization() {
   const {
    register,
    formState: {
        errors,
        isValid
    },
    reset,
   } = useForm();

   const [formValue, setformValue] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    login(formValue);
    console.log(formValue)
    event.preventDefault();
    reset();
}

const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

    return ( 
    
        <LoginBox>
            <LoginForm onSubmit={handleSubmit}>
                <LoginTextField
                {...register('email', {
                    required: "Please enter email",
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter a valid email',
                    },
                })}
                    label="Email"
                    value={formValue.email}
                    onChange={handleChange}
                    size="small"
                />
                <LoginTextField
                    {...register('password')}
                    type="password" 
                    label="Password"
                    value={formValue.password}
                    onChange={handleChange}
                    size="small"
                />
                <SubmitButton onClick={handleSubmit} type="submit" variant="contained" size='small'>Sign in</SubmitButton>
            </LoginForm>
        </LoginBox>
            
    );
  }