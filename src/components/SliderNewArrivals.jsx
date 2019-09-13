import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Axios from 'axios';
import { API_URL } from '../Helpers/API_URL';
import { Link } from 'react-router-dom'
import numeral from 'numeral'


class NewArrivals extends React.Component{
    state= {
        newArrivals: []
    }

    componentDidMount(){
        Axios.get(API_URL + '/products/newArrivals')
        .then((res)=> {
            this.setState({ newArrivals: res.data })
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    renderNewArrivals = () => {
        return this.state.newArrivals.map((val, index)=> {
           return (
            <div  style={{height: '350px', padding: '20px' }} key={index} >
                <a href={'/detail/' + val.product_id}>
                <div  style={{position: 'center'}} className=' mb-5'>
                    <img className='hot-item' 
                    src={API_URL + val.picture}
                    alt={val.productname} style={{width : '250px',height:'170px', border : '0.5px solid grey'}}/>
                    <div style={{marginTop : '20px', fontSize : '18px', width: '170px'}}>
                        <div>{val.productname.toUpperCase()}</div>
                        <div >
                            { val.discount > 0 ?
                            <span style={{color: 'black', fontSize: '22x'}} ><strike>{'Rp. ' + val.price}</strike></span>
                            : null}
                        </div>
                            <span style={{color: 'red'}} >{ 'Rp. ' + numeral(val.price - val.price * (val.discount/100)).format(0.0)}</span>
                      </div>
                </div>
                </a>
            </div>
           ) 
        })
    }
    
    SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: 'grey' }}
            onClick={onClick}
          />
        );
      }
      
      SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
          />
        );
      }

    render(){
        const settings = {
            // className: 'center',
            // centerMode: true,
            padding: '40px',
            dots: false,
            autoplay: true,
            autoplaySpeed: 2500,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,
          };
        return(
            <div>
                <h1 className='text-center font-weight-bold mb-5 mt-3'>NEW ARRIVALS</h1>
                < div className='pb-5 '>

                <Slider {...settings}>
                    {this.renderNewArrivals()}
                </Slider>
            </div>
            </div>
        )
    }
}

export default NewArrivals