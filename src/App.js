import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/system';
import { TextField, Button } from '@mui/material';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import {SignUpForm}  from "./components/SignUpForm";
import { SignInForm } from './components/SignInForm.js';

function App() {
  return (
    <div className="App">
        {/* <Container maxWidth="sm"  >
          <h2>LOGIN PAGE</h2>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <br></br>
          <Button variant="contained">Contained</Button>
        </Container> */}
        {/* *<SignUpPage/> */}
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
          </div>
        </div>
    </div>
  );
}

export default App;
