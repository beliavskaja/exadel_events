import React, { useState } from "react";
import {
  LoginTextField,
  SubmitButton,
  LoginBox,
  AuthForm,
} from "./Registration.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import registerUser from "../../services/api/axios/register.api";

export default function Registration() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    passwordConfirm: Yup.string()
      .required("Confirm Password is required")
      .min(6, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });

  const {
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    registerUser(formValue);
    event.preventDefault();
    reset();
  };

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <LoginBox>
      <AuthForm onSubmit={handleSubmit}>
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
        <div>
          {errors?.email && (
            <p
              style={{
                height: 10,
                margin: "5px",
                fontSize: "10px",
                color: "red",
              }}
            >
              {errors?.email?.message || "Error!"}
            </p>
          )}
        </div>
        <LoginTextField
          {...register("password")}
          type="password"
          label="Password"
          value={formValue.password}
          onChange={handleChange}
          size="small"
        />
        <div>
          {errors?.password && (
            <p
              style={{
                height: 10,
                margin: "5px",
                fontSize: "10px",
                color: "red",
              }}
            >
              {errors?.password?.message || "Error!"}
            </p>
          )}
        </div>
        <LoginTextField
          {...register("passwordConfirm")}
          type="password"
          label="Confirm password"
          size="small"
        />
        <SubmitButton
          type="submit"
          disabled={!isValid}
          variant="contained"
          size="small"
          onClick={handleSubmit}
        >
          Sign up
        </SubmitButton>
      </AuthForm>
    </LoginBox>
  );
}
