import React from "react";
import { Container } from '@mui/system';
import { TextField, Button } from '@mui/material';

const Login = () => {
    return (        
        <Container maxWidth="sm"  >
            <h2>LOGIN PAGE</h2>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <br></br>
            <Button variant="contained">Login</Button>
        </Container>
    );
};


export default Login;