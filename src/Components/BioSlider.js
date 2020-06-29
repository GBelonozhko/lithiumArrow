import React, { Component } from "react";
import Slider from "react-slick";
import image1 from '../assets/IMG_1170.png'
import image2 from '../assets/Bioteach.png'
import image3 from '../assets/biohappysuit.png'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
        
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
    };
    return (
      <div>
        
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          {...settings}
        >
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
      The Man the Myth the LEGEND
    </Box>


   <Box zIndex="modal">
          <img src={image1} />
  </Box>
  </Typography>
  
        </div>
        <div>
        
          <img src={image2} />
          
        </div>

        <div>
        
        <img src={image3} />
        
      </div>
        </Slider>
        
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
        <div>
        
        <img src={image1} className='img-thumbnail rounded' />
        
      </div>
          <div>
          <img src={image2} className='img-thumbnail rounded' />
          </div>
          <div>
          <img src={image3} className='img-thumbnail rounded' />
          </div>
          
        </Slider>
      </div>
    );
  }
}