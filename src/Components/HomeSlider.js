import React, { Component } from "react";
import Slider from "react-slick";
import Container from '@material-ui/core/Container';
import image1 from '../assets/black-stone-2363901.jpg'
import image2 from '../assets/close-up-photo-of-amethyst-4040585.jpg'
import image3 from '../assets/white-stone-56030.jpg'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,

    };
    return (
      <div>
        
        <Slider {...settings}>
        
          <div >
          <Typography
      component="div"
      variant="body1"
      style={{ height: 100, width: '100%', position: 'relative' }}
    >
      <Box
        bgcolor="grey.700"
        color="white"
        p={2}
        position="absolute"
        top={40}
        left="40%"
        zIndex="tooltip"
      >
        We can put text on pictures just a thought
      </Box>
     <Box zIndex="modal">
            <img src={image2} />
    </Box>
    </Typography>
    
          </div>
          <div>
          
            <img src={image1} />
            
          </div>
         
        </Slider>
      </div>
    );
  }
}