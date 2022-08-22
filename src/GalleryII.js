import React, {useState} from 'react'
import './GalleryII.css';
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
const images = importAll(require.context('./arts/drawings', false, /\.(png|jpe?g|svg)$/));


function GalleryII() {
  const itemData = [
    {
        img: images['drawings_2.jpeg'],
        title: '2',
      },
      {
        img: images['drawings_4.jpeg'],
        title: '4',
      },
      {
        img: images['drawings_10.jpeg'],
        title: '10',
      },
      {
        img: images['drawings_6.jpeg'],
        title: '6',
      },
      
      {
        img: images['drawings_13.jpeg'],
        title: '13',
      },
      
      {
        
        img: images['drawings_14.jpeg'],
        title: '14',
      },{
        img: images['drawings_15.jpeg'],
        title: '15',
      },{
        img: images['drawings_16.jpeg'],
        title: '16',
      },
      
      {
        img: images['drawings_9.jpeg'],
        title: '9',
      },
      {
        img: images['drawings_3.jpeg'],
        title: '3',
      },
      
      
      {
        img: images['drawings_7.jpeg'],
        title: '7',
      },
 
      {
        img: images['drawings_1.jpeg'],
        title: '1',
      },
    
  ]
  return (
    <div className='galleryII'>
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
          </Box>
    </div>
  )
}

export default GalleryII