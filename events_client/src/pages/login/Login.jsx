import React, { useState } from 'react';
import Authorization from '../../components/Authorization/Authorization';
import Registration from '../../components/Registration/Registration';
import { 
    ContainerBox, 
    LoginCard, 
    LoginNavigationBox, 
    LoginButton, 
} from './Login.styled';

export default function Login() {
    const [showRegistration, setShowRegistration] = useState(false);
    const onClick = () => setShowRegistration(!showRegistration);

    return (
      <ContainerBox>
                <LoginCard>
                    <LoginNavigationBox>
                        <LoginButton disabled={!showRegistration} onClick={ onClick} variant="text">Sign in</LoginButton>
                        <LoginButton disabled={showRegistration} onClick={ onClick} variant="text">Sign up</LoginButton>
                    </LoginNavigationBox>
                    { !showRegistration ? <Authorization/> :
                    <Registration/> }
                </LoginCard>
      </ContainerBox>
    );
  }