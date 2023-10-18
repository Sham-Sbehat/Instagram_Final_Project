import { Box, Button, Typography } from '@mui/material'
import React from 'react';
import ResponsiveDrawer from '../../Components/Menu/Menu';

export default function Messages() {
  return (
  <>
    
      <ResponsiveDrawer />
    <Box sx={{display:"flex",flexDirection:"column",width:"50%",height:"100%",justifyContent:"center",alignItems:"center",margin:"auto",gap:"1rem"}}>
      <Box sx={{marginTop:18}}>
        <img src="images/messengar.png" alt="messengar" />
      </Box>
      <Typography variant='h3'> Your Messages </Typography>
      <Typography variant='p' style={{color:'gray'}}> Send private photos and messages to a friend or group </Typography>
      <Button  variant="contained" style={{borderRadius:20,marginLeft:0}} >SEND MESSAGE</Button>
    </Box>
  </>
  )
}
