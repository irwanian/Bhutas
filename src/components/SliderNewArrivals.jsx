import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import {GiNestedHearts} from 'react-icons/gi'
import {FaCartPlus} from 'react-icons/fa'
import ReactTooltip from 'react-tooltip'
import ProductCard from './ProductCard';



class NewArrivals extends React.Component{
    render(){
        
        return(
            <div>
                <h1 className='text-center font-weight-bold mb-5 mt-3'>NEW ARRIVALS</h1>
                < div className='pb-5 '>

                <div className='row  justify-content-center' >
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
            </div>
        )
    }
}

export default NewArrivals