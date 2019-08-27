import React from 'react'
import Slider  from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import NewArrivals from '../components/SliderNewArrivals';




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "light", background: "#6677" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#6677" }}
        onClick={onClick}
      />
    );
  }

class ProductDetail extends React.Component{
state={
    stock : 5
}

    render(){
        var settings = {
            focusOnSelect: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding : '-20px',
            speed: 500,
            nextArrow : <SampleNextArrow />,
            prevArrow : <SamplePrevArrow />,
            centerMode : true,
            
          };
        return(
            <div  className='container'>
                <div className='row mt-lg-5'>
                    <div className='col-md-6'>
                        <img src='https://i.imgur.com/8dV50nZ.jpg' className='img-fluid' alt='frog' style={{width :'100%', height:'466px', border : '1.5px solid blue', marginBottom:'20px'}} />
                            <Slider {...settings}>
                                <div>
                                    <img className='img-fluid' src='http://guardianlv.com/wp-content/uploads/2014/01/ANI025-00213.jpg' alt='bangkong' style={{ width:'140px'}} />
                                </div>
                                <div>
                                    <img className='img-fluid' src='http://guardianlv.com/wp-content/uploads/2014/01/ANI025-00213.jpg' alt='bangkong1' style={{ width:'140px'}} />
                                </div>
                                <div>
                                    <img className='img-fluid' src='http://guardianlv.com/wp-content/uploads/2014/01/ANI025-00213.jpg' alt='bangkong2' style={{ width:'140px'}} />
                                </div>
                                <div>
                                    <img className='img-fluid' src='http://guardianlv.com/wp-content/uploads/2014/01/ANI025-00213.jpg' alt='bangkong3' style={{ width:'140px'}} />
                                </div>
                                <div>
                                    <img className='img-fluid' src='http://guardianlv.com/wp-content/uploads/2014/01/ANI025-00213.jpg' alt='bangkong34' style={{ width:'140px'}} />
                                </div>    
                            </Slider>
                    </div>
                    <div className='col-md-6'>
                        <img src='https://images-na.ssl-images-amazon.com/images/I/61Jz46vAfiL._SX425_.jpg' alt='flying frogman' style={{width:'150px'}} />
                        
                        <h1>NAMA BARANG</h1>
                        <h4>KATEGORI</h4>
                        <span>
                            <strike>HARGA SEBELUM DISKON</strike>
                            <h5 style={{color : 'red'}}>HARGA FINAL </h5>  {/* Harga final diakses melalui global state, sehingga harga berubah mengikuty quantity pembelian */}
                        </span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nulla voluptates, culpa mollitia fuga hic asperiores? Officia commodi corporis sapiente, quia nisi est fugiat quaerat animi sed at laboriosam vero!</p>
                        <select name='size' style={{width:'150px', borderRadius:'5px', height:'30px'}}>
                            <option ref='size' value='0' style={{fontWeight: '600'}}>SHOE SIZE</option>
                            <option ref='size' value='46'>46 </option>
                            <option ref='size' value='47'>47</option>
                            <option ref='size' value='48'>48</option>
                            <option ref='size' value='49'>49</option>
                            <option ref='size' value='50'>50</option>
                        </select>
                        <span style={{marginLeft: '30px'}}> <span style={{marginRight: '20px', fontWeight: '600', fontSize: '17px'}}>QUANTITY :</span> </span>
                        <input  type='button' className='btn btn-light mr-2' style={{fontSize: '15px', fontWeight: 'bold'}} value='-' />
                         <span style={{fontSize: '15px', fontWeight: 'bold'}}>1</span>
                           <input type='button' style={{fontSize: '15px', fontWeight: 'bold'}} className='btn btn-light ml-2' value='+' />
                            <br />
                        <input type='button' value='ADD TO CART'  className='btn btn-dark mt-4' />
                        
                    </div>
                </div>
                <div className='pt-xl-5'>
                    <NewArrivals  />
                </div>
            </div>
        )
    }
}


export default ProductDetail 