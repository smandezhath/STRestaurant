import React from "react";
import { Container } from '@mui/system';
import { TextField, Button } from '@mui/material';

const SignUpPage = () => {
    return (
        <div className="App">
          <Container maxWidth="sm"  >
            <h2>SIGNUP PAGE</h2>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" type label="Password" variant="outlined" />
            <br></br>
            <Button variant="contained">Sign Up</Button>
          </Container>
        </div>
      );
};


export default SignUpPage;