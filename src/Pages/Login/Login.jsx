import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Button, Grid, TextField } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import './Login.modules.css';
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
export default function OverlappingPhotosLayout() {


  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  function handleSubmit(e) {
    e.preventDefault()

    axios.post("http://16.170.173.197/users/login", userData)
      .then((response) => {
        console.log("🚀 ~ file: SignIn.jsx:57 ~ .then ~ response:", response)
        const token = response.data.token;
        localStorage.setItem("token", token)
        navigate("/Home")

      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "black",
      }}
    >
    <Box
        sx={{ height: "100vh", backgroundColor: "black"}}>
        <div style={{ position: "relative" }}>
          <img src='images/Screen1.png' alt="Screen1"
            style={{
              width: "300px",
            height: "500px",
              position: "absolute",
              top: "50px",
              left: "250px",
              zIndex:"2"
            }}
          />

          <img
            src='images/Screen2.png'
            alt="Screen2"
            style={{ width: "200px", height: "400px", position: "absolute" ,top:"45px",  left: "220px" }} 
          />
        </div>
    </Box>

      <Box
        sx={{
          backgroundColor: "black", marginTop:"45px",marginRight:"30px"}}>
        <Box
          sx={{
backgroundColor: "#1D1D1D", marginLeft: "0px", marginRight: "200px",marginTop: "15px",borderRadius: "10px", padding: "20px",width: "500px",}}>
          <img src='images/instagram_Logo.png' alt="instagram_logo" width={"150px"} style={{textAlign:"center", marginLeft:"155px"}}></img>

          <form noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Mobile Number or Email"
                  name="email"
                  autoComplete="email"
                  value={userData.email}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value })
                  }}
                  
                />
              </Grid>

              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth

                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={userData.password}
                  onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value })
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:"#0095F6", color :"white",fontWeight:"600"}}

              sx={{ mt: 3, mb: 2 }}
            >
                Login
            </Button>
          </form>
           <p className='or'>Or</p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor:"#0095F6", color :"white"}}
            
            sx={{ mt: 3, mb: 2 }}
          >
        <FacebookIcon style={{marginRight:"3px"}}></FacebookIcon> Login with Facebook
          </Button>

          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
            }}
          >
           <p style={{textAlign:"center" ,color :"grey"}}> Forget Password?</p>
          </div>
        </Box>
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#1D1D1D", // Background color for the right section
            marginLeft: "0px",
            marginRight: "200px",
            marginTop: "10px",
            borderRadius: "10px",
            padding: "20px"

          }}
        >
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/Signup" >
                  <div>Don't have an account?<strong style={{color:'#1976D2'}}>sign up</strong> </div>
                </Link>
              </Grid>
            </Grid>
          </Box>
      </Box>
    </div>
  );
}