import React, {useState} from 'react'
import './GalleryIII.css';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./arts/digital', false, /\.(png|jpe?g|svg)$/));

function GalleryIII() {
  const itemData = [
    
    {
      img: images['digital_3.jpeg'],
      title: '3',
    },
    {
      img: images['digital_9.jpeg'],
      title: '9',
    },
    {
      img: images['digital_11.jpeg'],
      title: '11',
    },
    
    
    {
      img: images['digital_4.jpeg'],
      title: '4',
    },
    {
      img: images['digital_5.jpeg'],
      title: '5',
    },
    
    {
      img: images['digital_6.jpeg'],
      title: '6',
    },
    {
      img: images['digital_7.jpeg'],
      title: '7',
    },
    {
      img: images['digital_8.jpeg'],
      title: '8',
    },
    {
      img: images['digital_1.jpeg'],
      title: '1',
    },
    {
      img: images['digital_10.jpeg'],
      title: '10',
    },
    
    {
      img: images['digital_12.jpeg'],
      title: '12',
    },
    {
      img: images['digital_2.jpeg'],
      title: '2',
    },
    {
      img: images['digital_13.jpeg'],
      title: '13',
    },
    {
      img: images['digital_14.jpeg'],
      title: '14',
    },
    {
      img: images['digital_15.jpeg'],
      title: '15',
    },
    
    {
      img: images['digital_17.jpeg'],
      title: '17',
    },
    {
      img: images['digital_23.jpeg'],
      title: '23',
    },
    {
      img: images['digital_18.jpeg'],
      title: '18',
    },
    {
      img: images['digital_19.jpeg'],
      title: '19',
    },
    {
      img: images['digital_20.jpeg'],
      title: '20',
    },
    {
      img: images['digital_21.jpeg'],
      title: '21',
    },
    {
      img: images['digital_22.jpeg'],
      title: '22',
    },
    {
      img: images['digital_24.jpeg'],
      title: '24',
    },
    {
      img: images['digital_25.jpeg'],
      title: '25',
    },
    {
      img: images['digital_26.jpeg'],
      title: '26',
    },
    {
      img: images['digital_27.jpeg'],
      title: '27',
    },
    {
      img: images['digital_28.jpeg'],
      title: '28',
    },
    {
      img: images['digital_30.jpeg'],
      title: '30',
    },
    {
      img: images['digital_16.jpeg'],
      title: '16',
    },
    {
      img: images['digital_31.jpeg'],
      title: '31',
    },
    
    {
      img: images['digital_33.jpeg'],
      title: '33',
    },
    {
      img: images['digital_32.jpeg'],
      title: '32',
    },


  ]
  return (
    <div className='galleryIII'>
      <Box sx={{ width: '100%'}}>
      <ImageList variant="quilted" cols={2} gap={10}   sx={{ width: '100%', height: '100%' }} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Zoom>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              className='im'
            />
  </Zoom>
          
        </ImageListItem>
      ))}
    </ImageList>
  </Box></div>
  )
}

export default GalleryIII