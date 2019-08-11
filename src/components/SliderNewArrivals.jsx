import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import {GiNestedHearts} from 'react-icons/gi'
import {FaCartPlus} from 'react-icons/fa'
import ReactTooltip from 'react-tooltip'



class NewArrivals extends React.Component{
    render(){
        
        return(
            <div>
                <h1 className='text-center font-weight-bold mb-5 mt-3'>NEW ARRIVALS</h1>
                < div className='pb-5 '>

                <div className='row  justify-content-center' >
                    {/* =========================================SINGLE CARD STARTS=========================================================== */}
                    <div className='col-md-3 mr-5 mb-5'>
                        <img className='hot-item' src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}}/>
                        <span data-tip='peek' data-for='eye' className="circle text-uppercase">
                        <ReactTooltip id='eye' place='right'><span>Add to Wishlist</span></ReactTooltip>
                        <GiNestedHearts style={{fontWeight: 'bold'}} />
                    </span>
                    <span className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                        <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} />
                    </span>
                    <div style={{marginTop : '30px', fontSize : '18px'}}>
                        <span style={{color: 'red'}} >Rp. 5.000.000</span> <strike> Rp. 7.000.000</strike>
                    </div>
                </div>
                {/*==========================================SINGLE CARD ENDS=================================================================  */}

                <div className='col-md-3 mr-5 mb-5'>
                        <img className='hot-item' src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}}/>
                        <span data-tip='peek' data-for='eye' className="circle text-uppercase">
                        <ReactTooltip id='eye' place='right'><span>Add to Wishlist</span></ReactTooltip>
                        <GiNestedHearts style={{fontWeight: 'bold'}} />
                    </span>
                    <span className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                        <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} />
                    </span>
                    <div style={{marginTop : '30px', fontSize : '18px'}}>
                        <span style={{color: 'red'}} >Rp. 5.000.000</span> <strike> Rp. 7.000.000</strike>
                    </div>
                </div>

                <div className='col-md-3 mr-5 mb-5'>
                        <img className='hot-item' src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}}/>
                        <span data-tip='peek' data-for='eye' className="circle text-uppercase">
                        <ReactTooltip id='eye' place='right'><span>Add to Wishlist</span></ReactTooltip>
                        <GiNestedHearts style={{fontWeight: 'bold'}} />
                    </span>
                    <span className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                        <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} />
                    </span>
                    <div style={{marginTop : '30px', fontSize : '18px'}}>
                        <span style={{color: 'red'}} >Rp. 5.000.000</span> <strike> Rp. 7.000.000</strike>
                    </div>
                </div>

                <div className='col-md-3 mr-5 mb-5'>
                        <img className='hot-item' src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}}/>
                        <span data-tip='peek' data-for='eye' className="circle text-uppercase">
                        <ReactTooltip id='eye' place='right'><span>Add to Wishlist</span></ReactTooltip>
                        <GiNestedHearts style={{fontWeight: 'bold'}} />
                    </span>
                    <span className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                        <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} />
                    </span>
                    <div style={{marginTop : '30px', fontSize : '18px'}}>
                        <span style={{color: 'red'}} >Rp. 5.000.000</span> <strike> Rp. 7.000.000</strike>
                    </div>
                </div>

                <div className='col-md-3 mr-5 mb-5'>
                        <img className='hot-item' src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}}/>
                        <span data-tip='peek' data-for='eye' className="circle text-uppercase">
                        <ReactTooltip id='eye' place='right'><span>Add to Wishlist</span></ReactTooltip>
                        <GiNestedHearts style={{fontWeight: 'bold'}} />
                    </span>
                    <span className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                        <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} />
                    </span>
                    <div style={{marginTop : '30px', fontSize : '18px'}}>
                        <span style={{color: 'red'}} >Rp. 5.000.000</span> <strike> Rp. 7.000.000</strike>
                    </div>
                </div>

                <div className='col-md-3 mr-5 mb-5'>
                        <img className='hot-item' src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}}/>
                        <span data-tip='peek' data-for='eye' className="circle text-uppercase">
                        <ReactTooltip id='eye' place='right'><span>Add to Wishlist</span></ReactTooltip>
                        <GiNestedHearts style={{fontWeight: 'bold'}} />
                    </span>
                    <span className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                        <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} />
                    </span>
                    <div style={{marginTop : '30px', fontSize : '18px'}}>
                        <span style={{color: 'red'}} >Rp. 5.000.000</span> <strike> Rp. 7.000.000</strike>
                    </div>
                </div>

                <div className='col-md-3 mr-5 mb-5'>
                        <img className='hot-item' src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}}/>
                        <span data-tip='peek' data-for='eye' className="circle text-uppercase">
                        <ReactTooltip id='eye' place='right'><span>Add to Wishlist</span></ReactTooltip>
                        <GiNestedHearts style={{fontWeight: 'bold'}} />
                    </span>
                    <span className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                        <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} />
                    </span>
                    <div style={{marginTop : '30px', fontSize : '18px'}}>
                        <span style={{color: 'red'}} >Rp. 5.000.000</span> <strike> Rp. 7.000.000</strike>
                    </div>
                </div>

                <div className='col-md-3 mr-5 mb-5'>
                        <img className='hot-item' src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}}/>
                        <span data-tip='peek' data-for='eye' className="circle text-uppercase">
                        <ReactTooltip id='eye' place='right'><span>Add to Wishlist</span></ReactTooltip>
                        <GiNestedHearts style={{fontWeight: 'bold'}} />
                    </span>
                    <span className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                        <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} />
                    </span>
                    <div style={{marginTop : '30px', fontSize : '18px'}}>
                        <span style={{color: 'red'}} >Rp. 5.000.000</span> <strike> Rp. 7.000.000</strike>
                    </div>
                </div>
            

                <div className='col-md-3 mr-5 mb-5'>
                        <img className='hot-item' src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}}/>
                        <span data-tip='peek' data-for='eye' className="circle text-uppercase">
                        <ReactTooltip id='eye' place='right'><span>Add to Wishlist</span></ReactTooltip>
                        <GiNestedHearts style={{fontWeight: 'bold'}} />
                    </span>
                    <span className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                        <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} />
                    </span>
                    <div style={{marginTop : '30px', fontSize : '18px'}}>
                        <span style={{color: 'red'}} >Rp. 5.000.000</span> <strike> Rp. 7.000.000</strike>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default NewArrivals