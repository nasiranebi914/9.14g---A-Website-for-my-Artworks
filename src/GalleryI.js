import React, {useState} from 'react'
import './GalleryI.css';
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
const images = importAll(require.context('./arts/canvas', false, /\.(png|jpe?g|svg)$/));


function GalleryI() {

  const itemData = [
    
    {
      img: images['canvas_2.jpeg'],
      title: '2',
    },
    {
      img: images['canvas_3.jpeg'],
      title: '3',
    },
    {
      img: images['canvas_6.jpeg'],
      title: '6',
    },
    {
      img: images['canvas_9.jpeg'],
      title: '9',
    },
    {
      img: images['canvas_7.jpeg'],
      title: '7',
    },
    {
      img: images['canvas_8.jpeg'],
      title: '8',
    },
    {
      img: images['canvas_4.jpeg'],
      title: '4',
    },
    
    {
      img: images['canvas_5.jpeg'],
      title: '5',
    },
    
    {
      img: images['canvas_1.jpeg'],
      title: '1',
    },
  ]
  return (
    <div className='galleryI'>
      <Box sx={{ width: '100%'}}>
      <ImageList variant="quilted" cols={2} gap={10}   sx={{ width: '100%', height: '100%' }}
>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <Zoom>
              <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="eager"
                            className='im'
              />
    </Zoom>
            
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    
    </div>
  )
}

export default GalleryI