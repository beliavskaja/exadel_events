import { styled, Button, TextField } from "@mui/material";

export const LoginBox = styled('div')({
    display: 'flex', 
    flexDirection: 'column', 
    alignContent: 'center'
});

export const LoginTextField = styled(TextField)({
    fontSize: '10px',
    marginBottom: '10px'
});

export const SubmitButton = styled(Button)({
    width: '100px',
    margin: 'auto'
});