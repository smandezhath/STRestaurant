import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/system';
import { TextField, Button } from '@mui/material';
import displaypage from "./components/displaypage";
import Login from './components/login';
import { BrowserRouter as Router, Switch,Route, Routes, Navigate, Redirect, } from "react-router-dom";
function App() {
  return (
    <Routes>
			{user && <Route path="/" exact element={<Login />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/displaypage" exact element={<displaypage />} />
		  <Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>

  );
}

export default App;
