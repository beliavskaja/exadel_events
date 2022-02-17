import React, { useState, useContext } from "react";
import {
  LoginTextField,
  SubmitButton,
  LoginBox,
  LoginForm,
} from "./Authorization.styled";
import { useForm } from "react-hook-form";
import login from "../../services/api/axios/login.api";
import { AuthContext } from "../../hooks/context";

export default function Authorization({ storeUser }) {
  const {
    register,
    formState: { errors, isValid },
    reset,
  } = useForm();

  const [formValue, setformValue] = useState({
    email: "",
    password: "",
  });

  const { setToken } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(formValue).then(({ user, token }) => {
      sessionStorage.setItem("sessionKey", token);
      setToken(token);
      storeUser(user);
    });
    reset();
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <LoginBox>
      <LoginForm onSubmit={handleSubmit}>
        <LoginTextField
          {...register("email", {
            required: "Please enter email",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
          label="Email"
          value={formValue.email}
          onChange={handleChange}
          size="small"
        />
        <LoginTextField
          {...register("password")}
          type="password"
          label="Password"
          value={formValue.password}
          onChange={handleChange}
          size="small"
        />
        <SubmitButton
          onClick={handleSubmit}
          type="submit"
          variant="contained"
          size="small"
        >
          Sign in
        </SubmitButton>
      </LoginForm>
    </LoginBox>
  );
}
