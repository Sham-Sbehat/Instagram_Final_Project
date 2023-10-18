import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { Typography, Button ,Grid} from '@mui/material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ResponsiveDrawer from '../../Components/Menu/Menu';
const itemData = [
  {
    img: 'images/postpic4.jpeg',
    title: 'the dom of the rock ',
  },
  {
    img: 'images/postpic5.webp',
    title: 'Palestine Flag',
  },
  {
    img: 'images/postpic2.webp',
    title: 'laptop ',
  },
  {
    img: 'images/postpic1.jpg',
    title: 'sky',
  },
  {
    img: 'images/post.png',
    title: 'picture',
  },
  {
    img: 'images/explore 4.png',
    title: 'car',
  },
];
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
     <ResponsiveDrawer/> 
     <Grid>
    <Box sx={{width:"50%",margin:"auto",marginTop:"2rem"}} >
      <Card sx={{ display: 'flex' }} >
        <CardMedia component="img" sx={{ width: 160 }} image="images/Ellipse.png" alt="Avotor"/>

        <Box sx={{ display: 'flex',flexDirection:"column",gap:"1rem", width: "calc(100% - 160px)" }}>

          <CardContent sx={{ display: "flex", flexDirection: "row",justifyContent:"space-around", width: "100%", height:"fit-content", padding:"0",paddingY:"0px"}}>
            <Typography component="div" variant="h5" sx={{fontWeight:"900",marginTop:"1rem"}}>Sham Sbehat</Typography>
            <Button variant="contained" sx={{ background: "white",marginTop:"1rem",borderRadius:3, "&:hover": { background: "white" } }}>Edit Profile</Button>
            <Button variant="contained" sx={{background:"white",marginTop:"1rem",borderRadius:3,"&:hover":{background:"white"}}}>View Actions</Button>
            <IconButton>
            <SettingsSuggestIcon />
            </IconButton></CardContent>
          <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", height: "fit-content", padding: "0", paddingY: "0px" }}>
            <Typography component="div" variant="button" >6 posts </Typography>
            <Typography component="div" variant="button" >342 followers </Typography>
            <Typography component="div" variant="button" >558 folowing </Typography>

          </CardContent>
          <CardContent>
            <Typography component="div" variant="button" >. Sham</Typography>
            <Typography component="div" variant="button" >. Palestine </Typography>
            <Typography component="div" variant="button" >. CSE||AAUP </Typography>
          </CardContent>

        </Box>

      </Card>

      <Box sx={{ width: '100%',marginTop:"1rem" }}>

        <Box sx={{ borderTop: 1, borderColor: 'divider',display:"flex",justifyContent:"center" }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="POSTS" {...a11yProps(0)}   />
            <Tab label="REELS" {...a11yProps(1)}  />
            <Tab label="TAGS" {...a11yProps(2)}  />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <ImageList sx={{ width: "100%", height: "100%", marginInline: "auto" }} cols={3} rowHeight="13rem" >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          No Reels.
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          No Tags.
        </CustomTabPanel>
      </Box>


    </Box>
    </Grid>
    </>
  );
}


