import React from "react";
import { AppBar,Toolbar,Container, TextField,Button,Box,MenuItem} from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from "axios";

const displaypage = () => {
    const navigate = useNavigate();
    const handleChange= () => {
        navigate("/PostPage");
    }
    return(
        <AppBar position = "fixed">
            <Toolbar>
                <Button  onChange={handleChange}  type ="submit" variant="contained" color = "primary"> Add Restaurant</Button>
            </Toolbar>
        </AppBar>
    )
}
export default displaypage;