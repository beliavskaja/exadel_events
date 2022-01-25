import React from 'react';
import { 
    ContainerBox, 
    LoginCard, 
    LoginNavigationBox, 
    LoginButton, 
    LoginTextField,
    SubmitButton,
    LoginBox
} from './Authorization.styled';

export default function Authorization() {
    return (
      <ContainerBox>
            <LoginCard>
                <LoginNavigationBox>
                    <LoginButton variant="text">Sign in</LoginButton>
                    <LoginButton variant="text" disabled>Sign up</LoginButton>
                </LoginNavigationBox>
                <LoginBox>
                    <LoginTextField
                        label="email"
                        name="email"
                    />
                    <LoginTextField
                        label="password"
                        name="password"
                    />
                    <SubmitButton variant="contained" size='small'>Sign in</SubmitButton>
                </LoginBox>
                {/* <LoginBox>
                    <LoginTextField
                        label="full name"
                        name="full name"
                    />
                    <LoginTextField
                        label="email"
                        name="email"
                    />
                    <LoginTextField
                        label="password"
                        name="password"
                    />
                    <LoginTextField
                        label="confirm password"
                        name="confirm password"
                    />
                    <SubmitButton variant="contained" size='small'>Sign up</SubmitButton>
                </LoginBox> */}
            </LoginCard>
      </ContainerBox>
    );
  }