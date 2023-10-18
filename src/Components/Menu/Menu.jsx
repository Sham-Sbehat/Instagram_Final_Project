import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material/styles";
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Modal,Typography,Input } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SearchIcon from '@mui/icons-material/Search';
import SlidshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';


const drawerWidth = 250;
function ResponsiveDrawer({setPosts}) {
//const { window } = ;
// const [Open, setOpen] = React.useState(false);
// const [openM, setOpenM] = React.useState(false);
// const handleOpenM = () => setOpenM(true);
// const handleCloseM = () => setOpenM(false);

// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });
const [openModal, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [description, setdescription] = React.useState("");
  const [image, setImage] = React.useState(null)
  const [imageCover, setImageCover] = React.useState(null);

  const token = localStorage.getItem("token")

  const handledescriptionChange = (event) => {
    setdescription(event.target.value);
  };

  const handleImageChange = (event) => {
    if (event.target && event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImageCover(reader.result);
    };
    reader.readAsDataURL(file);
  }
  };

  let formData = new FormData();

  formData.append("description", description)
  formData.append("image", image)
  
  function handleSubmit(event) {
    event.preventDefault();


    axios.post("http://16.170.173.197/posts", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }).then((response) => {
      console.log("🚀 ~ file: CreatePost.jsx:59 ~ handleSubmit ~ response:", response)
      setPosts((prevPosts) => [...prevPosts, response.data])
    }).catch((error) => {
      console.log("Error:", error)
    })

    handleClose()
  }





const drawer = (
    <div>
      <Toolbar style={{marginTop:-20}}/>
      <img src="images/instagram_Logo.png" alt='instagram-logo' width={100} style={{marginLeft:18,marginBottom:8}}/>
      <List>
        {['Home', 'Search', 'Explore', 'Reels','Messages','Notification','Create','Sham Sbehat'].map((text, index) => (
        <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon style={{ color: "white"}}>
          <Link  to='/Home'> {text === "Home" && <HomeIcon style={{color:'white'}} />}</Link>
          {text === "Search" && <SearchIcon />}
          <Link to='/Explore'> {text === "Explore" && <ExploreIcon style={{color:'white'}}/>}</Link>
          {text === "Reels" && <SlidshowIcon />}
          <Link to='/Messages'> {text === "Messages" && <ChatIcon style={{color:'white'}} />}</Link>
          {text === "Notification" && <FavoriteBorderIcon />}
          { text=== "Create" && <AddCircleOutlineIcon  onClick={handleOpen} style={{width:"230px", paddingRight:"205px",marginRight:"-200px", textAlign:"end"}}/> }

          <Link to='/Profile'> {text ==="Sham Sbehat" && <img src="images/Ellipse.png" alt='myprofilepic'/>}</Link>
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
        ))}
        <ListItem>
        <MenuIcon style={{fontSize:"25px", position:"absolute",bottom:"-180px",left:"14px" ,color:"white"}}/>
            <p  style={{fontSize:"16px",position:"absolute",bottom:"-195px",left:"50px" ,color:"#ffffff"}}>Menu</p>
        </ListItem>
      </List>
      


      <div>
    
    <Modal
  open={openModal}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "#f2f2f2",
      boxShadow: 24,
      p: 4,
      borderRadius: "20px",
      backgroundColor:'#1D1D1D'
    }}
  >
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Create a New Post
      <hr />
    </Typography>
    <form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content horizontally
          justifyContent: "center", // Center content vertically
          backgroundColor:'#1D1D1D'
        }}
      >
        Description
        <Input
          type="text"
          placeholder=""
          value={description}
          onChange={handledescriptionChange}
          required
          fullWidth
          sx={{
            mb: 2,
            backgroundColor: "#353535",
            borderRadius: "10px",
            height: "120px",
          }}
        />
        {imageCover && (
          <img
            src={imageCover}
            alt="Uploaded"
            style={{ width: "100%", marginBottom: "1rem" }}
          />
        )}

<input
  type="file"
  id="image-upload"
  onChange={handleImageChange}
  style={{ display: 'none' }}
/>
<label htmlFor="image-upload">
  <Button
    variant="contained"
    component="span"
    sx={{
      fontFamily: 'Signika',
      width: '100%',
      textAlign: 'left',
      fontWeight: 900,
      marginBottom: '5px',
      paddingTop: '5px',
      paddingBottom: '5px',
      borderRadius: '10px',
      fontSize: '14px',
      color: 'white',
      backgroundColor: '#0095F6',
      ':hover': {
        bgcolor: '#0095F70',
        color: 'white',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0095F6',
        color: 'white',
      },
    }}
  >
    Choose Image
  </Button>
</label>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            fontWeight: 900,
            paddingTop: "5px",
            fontFamily: "Signika",
            paddingBottom: "5px",
            borderRadius: "10px",
            fontSize: "14px",
            color: "white",
            backgroundColor: "#0095F6",
            ":hover": {
              bgcolor: "#0095F71",
              color: "white",
            },
            "&:active": {
              boxShadow: "none",
              backgroundColor: "#0095F6",
              color: "white",
            },
          }}
        >
          Post
        </Button>
      </Box>
    </form>
  </Box>
        </Modal>
  </div> 
    </div>






);
// const container = window !== undefined ? () => window().document.body : undefined;
  return (
<Box sx={{ display: 'flex' }}>
  <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">

<Drawer  variant="temporary" open={openModal} onClose={() => setOpen(!openModal)}
    ModalProps={{ keepMounted: true, }}
    sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    }}
   
>
    {drawer}
</Drawer>
<Drawer
    variant="permanent"
    sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    }}
   
    open
>
    {drawer}
</Drawer>
  </Box>
</Box>


);
}

export default ResponsiveDrawer;
