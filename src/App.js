import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Messages from './Pages/Messages/Messages.jsx';
import Explore from './Pages/Explore/Explore.jsx';
import Home from './Pages/Home/Home.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import PageNotFound  from './Pages/PageNotFound/PageNotFound.jsx';
import Login from './Pages/Login/Login.jsx';
import Signup from './Pages/Signup/Signup.jsx'
import {Routes,Route} from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    fontFamily: ['Poppins', 'sans - serif'].join(',')
  }

});
export default function App() {
  return (

    <div>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Profile/> */}
    <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/Signup" element={<Signup />} />
            < Route path='/Home' element={<Home />}/>
            < Route path='/Explore' element={<Explore />} />
            < Route path='/Profile' element={<Profile />} />
            < Route path='/Messages' element={<Messages />} />
            <Route path='*' element={<PageNotFound />} />   
     </Routes>
    </ThemeProvider>

  </div>

  )
}
