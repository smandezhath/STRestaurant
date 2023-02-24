import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/system';
import { TextField, Button } from '@mui/material';
import displaypage from "./components/displaypage";
import Login from './components/login';
function App() {
  return (
    <Routes>
			{user && <Route path="/" exact element={<Login />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
		  <Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>

  );
}

export default App;
