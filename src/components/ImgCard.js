import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {Link} from 'react-router-dom';
import test from './ImgCard.json' //ImgCard.json <<<< 테스트용 데이터
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

   



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
            />
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
  );
}

