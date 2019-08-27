import React, {Component} from 'react';
import Axios from 'axios'
import { API_URL } from '../Helpers/API_URL';
import {GiNestedHearts} from 'react-icons/gi'
import {FaCartPlus} from 'react-icons/fa'
import ReactTooltip from 'react-tooltip'


class ProductShowcase extends Component {
    state = {
        data: []
    }
    componentDidMount(){
        console.log(this.props.location.search.split('=')[1])
                 var id = this.props.location.search.split('=')[1]
        Axios.get(API_URL + '/categories/category/' + id)
        .then((res) => {
            this.setState({data: res.data})
        })
        .catch((err) => {
            console.log(err);
        })
    }

    renderProductsFromCategory = () => {
        return this.state.data.map((val) => {
            return (
                <div className='col-xl-4 mb-5'>
                        <img className='hot-item' 
                        src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square'
                         alt='hothothot' style={{width : '320px',height:'320px', border : '0.5px solid grey'}}/>
                        <span data-tip='peek' data-for='eye' className="circle text-uppercase">
                        <ReactTooltip id='eye' place='right'><span>Add to Wishlist</span></ReactTooltip>
                        <GiNestedHearts style={{fontWeight: 'bold'}} />
                    </span>
                    <span className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                        <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} />
                    </span>
                    <div style={{marginTop : '20px', fontSize : '18px'}}>
                        <div>{val.productname}</div>
                        <span style={{color: 'red'}} >{val.price}</span>
                    </div>
                </div>
            )
        })
    }
    
    render () {
        return (
            <div >
                <center>
                    <div className='container row' style={{paddingTop: '140px'}}>
                        {this.renderProductsFromCategory()}
                    </div>
                </center>
            </div>
        )
    }
}

export default ProductShowcase