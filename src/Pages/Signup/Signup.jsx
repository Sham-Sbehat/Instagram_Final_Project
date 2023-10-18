import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { Button, Grid, TextField } from "@mui/material";
import  './Signup.modules.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import axios from "axios";

export default function OverlappingPhotosLayout() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: ""
  });

  function handleSubmit(e) {
    e.preventDefault()

    axios.post("http://16.170.173.197/users/signup", userData)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token)
        navigate("/Home")

      }).catch((error) => {
        console.log(error)
      })
  }

  return  (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src='images/Screen1.png'
            alt="Screen1"
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
          backgroundColor: "black", 
          marginTop:"45px",
          marginRight:"30px"

        }}
      >
        <Box
          sx={{
            backgroundColor: "#1D1D1D", 
            marginLeft: "0px",
            marginRight: "200px",
            marginTop: "15px",
            borderRadius: "10px",
            padding: "15px",
            width: "500px",
          }}
        >
          <img src='images/instagram_logo.png' alt="instagram" width={"150px"} style={{textAlign:"center", marginLeft:"155px"}} ></img>
          <p style={{marginLeft:"100px", textAlign:"center",width:"55%" ,color:"gray"}}>Sign up to see photos and videos
 from your friends </p>
 <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor:"#0095F6", color :"white"}}
            
            sx={{ mt: 3, mb: 2 }}
          >
            <FacebookIcon style={{marginRight:"3px"}}></FacebookIcon> Login with Facebook
          </Button>
          <p className='or'>Or</p>
          <form noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  value={userData.email}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value })
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  value={userData.userName}
                  onChange={(e) => {
                    setUserData({ ...userData, userName: e.target.value })
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
                Sign Up
            </Button>
          </form>
         

          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
            }}
          >
           <p style={{textAlign:"center",width:"70%", marginLeft:"80px" ,color :"grey"}}> By signing up, you agree to our Terms, Data
Policy and Cookies Police</p>
          </div>
        </Box>
        {/* <div style={{
            backgroundColor: "#1D1D1D", 
            color:"gray",
            marginLeft: "0px",
            marginRight: "200px",
            marginTop: "15px",
            borderRadius: "10px",
            padding: "15px",
            width: "500px",
            textAlign:"center"
          }}>
           {/* <p > Have an account?  <a href="Components/Login/Login.jsx" style={{color:"#0095F6" , textDecoration:"none"}}>Log In</a></p> */}
            {/* </div> */} 
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
                <Link to="/" >
                  <div>Already have an account?<strong style={{color:''}}>Log in</strong> </div>
                </Link>
              </Grid>
            </Grid>
          </Box>
      </Box>
    </div>
  );
}