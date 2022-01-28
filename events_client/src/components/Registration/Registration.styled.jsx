import { styled, Button, TextField } from "@mui/material";

export const LoginBox = styled('div')({
    display: 'flex', 
    flexDirection: 'column'
});

export const LoginTextField = styled(TextField)({
    fontSize: '8px',
    marginBottom: '5px',
    top: '+8px'
});

export const SubmitButton = styled(Button)({
    width: '100px',
    marginTop: '20px',
    alignSelf: 'center',
    color: '#ffffff',
    backgroundColor: '#2196f3',
    '&.Mui-disabled': {
        backgroundColor: '#83c3f7',
        color: '#ffffff'
    }
});

export const AuthForm = styled('div')({
    display: 'flex',
    flexDirection: 'column'
})