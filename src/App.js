import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/system';
import { TextField, Button } from '@mui/material';
function App() {
  return (
    <div className="App">
      <Container maxWidth="sm"  >
        <h2>LOGIN PAGE</h2>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <br></br>
        <Button variant="contained">Contained</Button>
      </Container>
    </div>
  );
}

export default App;
