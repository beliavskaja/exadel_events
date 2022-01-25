import { styled, Button, TextField } from "@mui/material";

export const ContainerBox = styled('div')({
   display: 'flex', 
   alignItems: 'center', 
   justifyContent: 'center',
   height: '100vh'
  });

export const LoginCard = styled('div')({
    maxWidth: '350px', 
    display: 'flex', 
    flexDirection: 'column', 
    alignContent: 'center', 
    padding: '20px'
});

export const LoginBox = styled('div')({
    display: 'flex', 
    flexDirection: 'column', 
    alignContent: 'center'
});

export const LoginNavigationBox = styled('div')({
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center'
});

export const LoginButton = styled(Button)({
    
});

export const LoginTextField = styled(TextField)({
    fontSize: '10px',
    marginBottom: '10px'
});

export const SubmitButton = styled(Button)({
    width: '100px',
    margin: 'auto'
});
