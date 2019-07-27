import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


class NewArrivals extends React.Component{
    render(){
        const settings = {
            className: "center",
            infinite: true,
            slidesToShow: 5,
            speed: 500
          };
        return(
            <div>
                <h1 className='text-center font-weight-bold mb-5 mt-3'>NEW ARRIVALS</h1>
                <Slider {...settings} className='pb-5'>
                    <div>
                        <img src='https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg' alt='testing' className='img-fluid' style={{width : '200px'}}  />
                    </div>
                    <div>
                    <img src='https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg' alt='testing' className='img-fluid' style={{width : '200px'}}  />
                    </div>
                    <div>
                    <img src='https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg' alt='testing' className='img-fluid' style={{width : '200px'}}  />
                    </div>
                    <div>
                    <img src='https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg' alt='testing' className='img-fluid' style={{width : '200px'}}  />
                    </div>
                    <div>
                    <img src='https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg' alt='testing' className='img-fluid' style={{width : '200px'}}  />
                    </div>
                    <div>
                    <img src='https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg' alt='testing' className='img-fluid' style={{width : '200px'}}  />
                    </div>
                </Slider>
            </div>
        )
    }
}

export default NewArrivals