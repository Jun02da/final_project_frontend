import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Link} from 'react-router-dom';
import test from './ImgCard.json' //ImgCard.json <<<< 테스트용 데이터
import { MDBRipple } from 'mdb-react-ui-kit';

   

{/* <MDBRipple className='hover-zoom' rippleTag='div' rippleColor='light'>

<div className='mask hover-overlay' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <p className='text-white mb-0'>가나다</p>
            </div>
</div>

</MDBRipple> */}



export default function MasonryImageList() {
  return (
  
    <Box
    sx={{
      width: "auto",
      height: "auto",
      marginLeft: 15,
      marginRight: 15,
      marginTop: 10,
    }}
  >
    <ImageList variant="masonry" cols={4} gap={10}>
      {test.itemData.map((item) => (
        <ImageListItem key={item.img} className="bg-image hover-zoom">
          <Link to="detail">

            
            <img
              src={`${item.img}?w=400&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              onMouseOver = {()=>{<div className='mask hover-overlay' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <p className='text-white mb-0'>가나다</p>
              </div>
  </div>}}
            />

            

          </Link>
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
  );
}

