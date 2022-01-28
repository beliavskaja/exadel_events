import React, { useState } from 'react';
import { 
    LoginTextField,
    SubmitButton,
    LoginBox,
    AuthForm
} from './Registration.styled';
import { useForm } from "react-hook-form";
import login from '../../services/api/axios';


export default function Registration() {
    
    const {
        register,
        formState: {
            errors,
            isValid
        },
        reset,
    } = useForm({
        mode: "onBlur"
    });

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
            <AuthForm onSubmit={handleSubmit}>
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
                />
                <div style={{height: 20}}>
                    {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                </div>
                <LoginTextField
                {...register('password', {
                    required: "Please enter password",
                    minLength: {
                        value: 8,
                        message: "Password must contain at least 8 characters"
                    }
                })}
                    label="Password"
                    value={formValue.password}
                    onChange={handleChange}
                />
                <div style={{height: 20}}>
                    {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                </div>
                <LoginTextField
                    label="Confirm password"
                />
                <SubmitButton type="submit" disabled={!isValid} variant="contained" size='small' onClick={handleSubmit}>Sign up</SubmitButton>
            </AuthForm>
        </LoginBox>
    )
}