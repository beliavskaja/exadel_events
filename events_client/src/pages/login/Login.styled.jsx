import { styled, Button } from "@mui/material";

export const ContainerBox = styled('div')({
   display: 'flex', 
   alignItems: 'center', 
   justifyContent: 'center',
   height: '100vh'
  });

export const LoginCard = styled('div')({
    maxWidth: '300px', 
    display: 'flex', 
    flexDirection: 'column',
    padding: '20px'
});

export const LoginNavigationBox = styled('div')({
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center'
});

export const LoginButton = styled(Button)({
    color: '#2196f3',
    '&.Mui-disabled': {
        color: '#83c3f7'
    }
});