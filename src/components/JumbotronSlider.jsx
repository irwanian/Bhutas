import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

class JumbotronSlider extends React.Component {
  render() {
    var settings = {
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay : true,
      autoplaySpeed : 3300,
      cssEase: "linear",
      arrows : false
    };
    return (
      <Slider {...settings} >
        <div >
          <img alt='AJ1 React' className='img-fluid jumbo-pic'  src='https://www.hoopsstation.com/image/hoopsstation/image/cache/data/2019/ket/0201aj1react-1920x832.jpg' />
        </div>
        <div>
          <img className='jumbo-pic img-fluid' src='https://www.hoopsstation.com/image/hoopsstation/image/cache/data/2019/ONE/GIANNIS%20NEW%20EB-1920x832.jpg' alt='giannis'  />
        </div>
        <div >
          <img alt='Nike' className='img-fluid jumbo-pic'  src='http://www.redwingshoes.com/assets/content/redwingshoes/fma/18_RWH_FMA_MensWomens_1400x600_02_V3.jpg' />
        </div>
      </Slider>
    );
  }
}

export default JumbotronSlider