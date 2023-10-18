import React , { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, Grid, CardContent, Box, Typography, CardMedia, IconButton, Divider } from '@mui/material';
import ResponsiveDrawer from '../../Components/Menu/Menu';
import Posts from '../../Components/Posts/Posts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export default function Home() {
const [posts, setPosts] = useState([]);
const token = localStorage.getItem("token")
const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null)
    navigate("/"); 

    axios.get("http://16.170.173.197/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setPosts(response.data.posts)
    }).catch((error) => {
      console.log("Error Fedching Posts", error)
    })
  },[])
 

    return (
    <>
    <ResponsiveDrawer/>
            <Grid container spacing={2} style={{marginLeft:280,marginTop:40}} >
                 {/* =================================== Stories Srction   ==================================================== */}

                 <Grid item xs={5} >
                    <Swiper grabCursor={true} centeredSlides={true} loop={true} slidesPerView={8} sx={{ width: "100"}}>
                        <SwiperSlide >
                            <img src='images/Ellipse.png' alt='Avatar' />
                            <Typography component="span">IP/HSC-AAUP</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='images/Ellipse.png' alt='Avatar' />
                            <Typography component="span">Marah</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='images/Ellipse.png' alt='Avatar' />
                            <Typography component="span">Suha</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='images/Ellipse.png' alt='Avatar' />
                            <Typography component="span">Lama</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='images/Ellipse.png' alt='Avatar' />
                            <Typography component="span">Ahlam</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='images/Ellipse.png' alt='Avatar' />
                            <Typography component="span">Maram</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='images/Ellipse.png' alt='Avatar' />
                            <Typography component="span">Rana</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='images/Ellipse.png' alt='Avatar' />
                            <Typography component="span">Dalia</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='images/Ellipse.png' alt='Avatar' />
                            <Typography component="span">Noor</Typography>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='images/Ellipse.png' alt='Avatar' />
                            <Typography component="span">IP/HSC-AAUP</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='images/Ellipse.png' alt='Avatar'/>
                            <Typography component="span">Marah</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='images/Ellipse.png' alt='Avatar' />
                            <Typography component="span">Suha</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='images/Ellipse.png' alt='Avatar' />
                            <Typography component="span">Lama</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='images/Ellipse.png' alt='Avatar' />
                            <Typography component="span">Ahlam</Typography>
                        </SwiperSlide>
                    </Swiper>
                    <Divider style={{marginTop:10}}/>
                {/* =================================== Posts Srction   ==================================================== */}
                    {/* <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem", mt: "2rem" ,ml:"2rem" }}>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardHeader
                                avatar={<img src='images/Ellipse.png' alt='Avatar'/>}

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Rawan"
                                subheader="2h"
                            />
                            <CardMedia
                                component="img"
                                height="350"
                                image="images/Post.png"
                                alt="Post"
                                sx={{ objectFit: "cover" }}
                            />
                            <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Box>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteBorderIcon />
                                    </IconButton>

                                    <IconButton aria-label="share">
                                        <ModeCommentOutlinedIcon />
                                    </IconButton>

                                    <IconButton aria-label="comment">
                                        <SendOutlinedIcon />
                                    </IconButton>
                                </Box>

                                <Box>
                                    <IconButton aria-label="Like">
                                        <BookmarkBorderOutlinedIcon />
                                    </IconButton>
                                </Box>
                            </CardActions>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>



                        </Card>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardHeader
                                avatar={<img src='images/Ellipse.png' alt='Avatar'/>}

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Shaima "
                                subheader="3h"
                            />
                            <CardMedia
                                component="img"
                                height="350"
                                image="images/explore 1.png"
                                alt="Coffee"
                                sx={{ objectFit: "cover" }}
                            />
                            <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Box>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteBorderIcon />
                                    </IconButton>

                                    <IconButton aria-label="share">
                                        <ModeCommentOutlinedIcon />
                                    </IconButton>

                                    <IconButton aria-label="comment">
                                        <SendOutlinedIcon />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <IconButton aria-label="like">
                                        <BookmarkBorderOutlinedIcon />
                                    </IconButton>
                                </Box>
                            </CardActions>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                  Its Coffee Time...
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardHeader
                                avatar={<img src='images/Ellipse.png' alt='Avatar' />}

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Nada"
                                subheader="1h"
                            />
                            <CardMedia
                                component="img"
                                height="350"
                                image="images/explore 5.png"
                                alt="post"
                                sx={{ objectFit: "cover" }}
                            />
                            <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Box>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteBorderIcon />
                                    </IconButton>

                                    <IconButton aria-label="share">
                                        <ModeCommentOutlinedIcon />
                                    </IconButton>

                                    <IconButton aria-label="comment">
                                        <SendOutlinedIcon />
                                    </IconButton>
                                </Box>

                                <Box>
                                    <IconButton aria-label="like">
                                        <BookmarkBorderOutlinedIcon />
                                    </IconButton>
                                </Box>
                            </CardActions>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    The Beuty...
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardHeader
                                avatar={<img src='images/Ellipse.png' alt='Avatar' />}

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }

                                title="Saba"
                                subheader="1day"
                            />
                            <CardMedia
                                component="img"
                                height="350"
                                image="images/explore 8.png"
                                alt="Post"
                                sx={{ objectFit: "cover" }}
                            />
                            <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Box>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteBorderIcon />
                                    </IconButton>

                                    <IconButton aria-label="share">
                                        <ModeCommentOutlinedIcon />
                                    </IconButton>

                                    <IconButton aria-label="comment">
                                        <SendOutlinedIcon />
                                    </IconButton>
                                </Box>

                                <Box>
                                    <IconButton aria-label="like">
                                        <BookmarkBorderOutlinedIcon />
                                    </IconButton>
                                </Box>

                            </CardActions>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                   Wow...
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardHeader
                                avatar={<img src='images/Ellipse.png' alt='Avatar' />}

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Dalal"
                                subheader="8h"
                            />
                            <CardMedia
                                component="img"
                                height="350"
                                image="images/explore 6.png"
                                alt="post"
                                sx={{ objectFit: "cover" }}
                            />
                            <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Box>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteBorderIcon />
                                    </IconButton>

                                    <IconButton aria-label="share">
                                        <ModeCommentOutlinedIcon />
                                    </IconButton>

                                    <IconButton aria-label="comment">
                                        <SendOutlinedIcon />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <IconButton aria-label="like">
                                        <BookmarkBorderOutlinedIcon />
                                    </IconButton>
                                </Box>
                            </CardActions>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Sealing in the Space...
                                
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box> */}
                       <Posts posts={posts} setPosts = {setPosts} token = {token}/>
                </Grid>
    
                {/* =================================== Suggsestions For You==================================================== */}

            <Grid item xs={5} sx={{ display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column"  , width:"30"}}>
                    <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center" }}>

                        <CardMedia
                            component="img"
                            sx={{ width: "20%" }}
                            image="images/Ellipse.png"
                        />

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Typography component="div" variant="h5">
                                Ahmad 
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Ahmad Sbehat
                            </Typography>
                        </CardContent>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".9rem" }}>
                                Follow
                            </IconButton>
                        </Box>


                    </Card>

                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "65%" }}>
                        <Typography component="p">
                            Suggestions For You
                        </Typography>

                        <Typography component="span">
                            See More
                        </Typography>
                    </Box>

                    <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>

                        <Box sx={{ width: "20%" }}>
                            <CardMedia component="img" sx={{ objectFit: "scale-down" }} image="images/Ellipse.png"  />
                        </Box>

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                            <Typography component="div" variant="p">
                              Nagham
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                Nagham Ghannam
                            </Typography>
                        </CardContent>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                Follow
                            </IconButton>
                        </Box>

                    </Card>
                    <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>

                        <Box sx={{ width: "20%" }}>
                            <CardMedia component="img" sx={{ objectFit: "scale-down" }} image="images/Ellipse.png" />
                        </Box>

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                            <Typography component="div" variant="p">
                              Sanabel
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                Sanabel Maali
                            </Typography>
                        </CardContent>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                Follow
                            </IconButton>
                        </Box>

                    </Card>
                    <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>

                        <Box sx={{ width: "20%" }}>
                            <CardMedia component="img" sx={{ objectFit: "scale-down" }} image="images/Ellipse.png"  />
                        </Box>

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                            <Typography component="div" variant="p">
                              Hala
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                Hala Kamal
                            </Typography>
                        </CardContent>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                Follow
                            </IconButton>
                        </Box>

                    </Card>
                    <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>

                        <Box sx={{ width: "20%" }}>
                            <CardMedia component="img" sx={{ objectFit: "scale-down" }} image="images/Ellipse.png"  />
                        </Box>

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                            <Typography component="div" variant="p">
                              Hala
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                Hala Abahry
                            </Typography>
                        </CardContent>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                Follow
                            </IconButton>
                        </Box>

                    </Card>
                    <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>

                        <Box sx={{ width: "20%" }}>
                            <CardMedia component="img" sx={{ objectFit: "scale-down" }} image="images/Ellipse.png"  />
                        </Box>

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                            <Typography component="div" variant="p">
                              Taima
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                              Taima AbuTalib
                            </Typography>
                        </CardContent>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                Follow
                            </IconButton>
                        </Box>

                    </Card>
                    <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>

                        <Box sx={{ width: "20%" }}>
                            <CardMedia component="img" sx={{ objectFit: "scale-down" }} image="images/Ellipse.png"  />
                        </Box>

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                            <Typography component="div" variant="p">
                              Nada
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                Nada Jaradat
                            </Typography>
                        </CardContent>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                Follow
                            </IconButton>
                        </Box>

                    </Card>
                   <p style={{color:"gray",fontSize:12,lineHeight:0.3,marginTop:60}}>Aboot . Help . Posts . API . Jobs . Privecy . Terms </p>
                   <p style={{color:"gray",fontSize:12,lineHeight:0.3}}>Location  . Languages .  Meta Verified</p>
                   <p style={{color:"gray",fontSize:10,lineHeight:0.3}}>@2023 INSTAGRAM FROM MEAT</p>
                    

            </Grid>

            </Grid>

   </>
    )
}
