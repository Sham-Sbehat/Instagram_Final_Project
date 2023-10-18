import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ResponsiveDrawer from '../../Components/Menu/Menu';
import {Grid} from '@mui/material';

const itemData = [
  {
    img: 'images/explore 1.png',
    title: 'Breakfast',
  },
  {
    img: 'images/explore 2.png',
    title: 'Burger',
  },
  {
    img: 'images/explore 3.png',
    title: 'Camera',
  },
  {
    img: 'images/explore 4.png',
    title: 'Coffee',
  },
  {
    img: 'images/explore 5.png',
    title: 'Hats',
  },
  {
    img: 'images/explore 6.png',
    title: 'Honey',
  },
  {
    img: 'images/explore 7.png',
    title: 'Basketball',
  },
  {
    img: 'images/explore 8.png',
    title: 'Fern',
  },
  {
    img: 'images/explore 9.png',
    title: 'Mushrooms',
  },
  {
    img: 'images/explore 10.png',
    title: 'Tomato basil',
  },
  {
    img: 'images/explore 11.png',
    title: 'Sea star',
  },
  {
    img: 'images/explore 12.png',
    title: 'Bike',
  },
];
export default function Explore() {
  return (
    <>
      <ResponsiveDrawer/>
    <ImageList sx={{ width: "60%", height: "100%",marginInline:"auto" }} cols={3} rowHeight="13rem" >
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
    </>
  
  );
}

