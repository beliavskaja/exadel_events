import React, { useState } from "react";
import Authorization from "../../components/Authorization/Authorization";
import Registration from "../../components/Registration/Registration";
import {
  ContainerBox,
  LoginCard,
  LoginNavigationBox,
  LoginButton,
} from "./Login.styled";
// import { AuthContext } from "../../hooks/context";

export default function Login({ storeUser }) {
  const [showRegistration, setShowRegistration] = useState(false);
  const onClick = () => setShowRegistration(!showRegistration);

  // const { token } = useContext(AuthContext);

  return (
    <ContainerBox>
      <LoginCard>
        <LoginNavigationBox>
          <LoginButton
            disabled={!showRegistration}
            onClick={onClick}
            variant="text"
          >
            Sign in
          </LoginButton>
          <LoginButton
            disabled={showRegistration}
            onClick={onClick}
            variant="text"
          >
            Sign up
          </LoginButton>
        </LoginNavigationBox>
        {!showRegistration ? (
          <Authorization storeUser={storeUser} />
        ) : (
          <Registration />
        )}
      </LoginCard>
    </ContainerBox>
  );
}
