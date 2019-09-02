import React, {Component} from 'react';
import Axios from 'axios'
import { API_URL } from '../Helpers/API_URL';
import {GiNestedHearts} from 'react-icons/gi'
import {FaCartPlus} from 'react-icons/fa'
import ReactTooltip from 'react-tooltip'
import { connect } from 'react-redux'
import { customerSearching, searchResult } from '../Actions'

class ProductShowcase extends Component {
    state = {
        allProducts: [],
        productsFromCategory: [],
        productsFromBrand: [],
        saleProducts: [],
        searchResult: []
    }
    componentDidMount(){
        this.getAllProducts()
        this.getSaleProducts()
        this.getProductsFromCategory()
        this.getProductsFromBrand()
        this.getSearchProducts()
    }

    routeCondition = () => {
       var route = this.props.location.search
       if(route !== '') {
           return route.split('?')[1].split('=')[0]
       }
       return ''
      
       
    }

    getAllProducts = () => {
        Axios.get(API_URL+ '/products/allproducts')
        .then((res)=> {
            this.setState({allProducts: res.data})
        })
        .catch((err)=> {
            console.log(err);
        })
    }

    getSearchProducts = () => {
        Axios.get(API_URL + '/products/searchproducts?searching=' + this.props.search)
        .then((res)=> {
            console.log(res.data)
            this.setState({ searchResult: res.data })
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    getSaleProducts = () => {
        Axios.get(API_URL+ '/products/saleproducts')
        .then((res)=> {
            this.setState({saleProducts: res.data})
        })
        .catch((err)=> {
            console.log(err);
        })
    }

    getProductsFromCategory = () => {
        // console.log(this.props.location.search.split('=')[1])
        var id = this.props.location.search.split('=')[1]
        Axios.get(API_URL + '/categories/category/' + id)
        .then((res) => {
            this.setState({productsFromCategory: res.data})
        })
        .catch((err) => {
            console.log(err);
        })
    }

    getProductsFromBrand = () => {
        var id = this.props.location.search.split('=')[1]
        Axios.get(API_URL + '/brands/certainbrands/' + id)
        .then((res)=> {
            this.setState({productsFromBrand: res.data})
        })
        .catch((err) => {
            console.log(err);
        })
    }

    renderAllProducts = () => {
        return this.state.allProducts.map((val) => {
            return (
                <div key={val.id} className='col-xl-4 mb-5'>
                        <img className='hot-item' 
                        src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square'
                         alt='hothothot' style={{width : '290px',height:'290px', border : '0.5px solid grey'}}/>
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

    renderSearchProducts = () => {
        return this.state.searchResult.map((val) => {
            return (
                <div key={val.id} className='col-xl-4 mb-5'>
                        <img className='hot-item' 
                        src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square'
                         alt='hothothot' style={{width : '290px',height:'290px', border : '0.5px solid grey'}}/>
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

    renderSaleProducts = () => {
        return this.state.saleProducts.map((val) => {
            return (
                <div key={val.id} className='col-xl-4 mb-5'>
                        <img className='hot-item' 
                        src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square'
                         alt='hothothot' style={{width : '290px',height:'290px', border : '0.5px solid grey'}}/>
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

    renderProductsFromCategory = () => {
        return this.state.productsFromCategory.map((val) => {
            return (
                <div key={val.id} className='col-xl-4 mb-5'>
                        <img className='hot-item' 
                        src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square'
                         alt='hothothot' style={{width : '290px',height:'290px', border : '0.5px solid grey'}}/>
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

    renderProductsFromBrand = () => {
        return this.state.productsFromBrand.map((val) => {
            return (
                <div key={val.id} className='col-xl-4 mb-5'>
                        <img className='hot-item' 
                        src='https://lh5.googleusercontent.com/-yr0hT0d9Jas/AAAAAAAAAAI/AAAAAAAAAB4/7RtmmfRY7DA/photo.jpg?type=square'
                         alt='hothothot' style={{width : '290px',height:'290px', border : '0.5px solid grey'}}/>
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
        if(this.routeCondition() === 'onsale'){
            return (
                <div >
                    <center>
                        <div className='container row' style={{paddingTop: '140px'}}>
                            {this.renderSaleProducts()}                                       
                        </div>
                    </center>
                </div>
            )
        }
        else if(this.routeCondition() === 'brands'){
            return (
                <div >
                    <center>
                        <div className='container row' style={{paddingTop: '140px'}}>
                            {this.renderProductsFromBrand()}
                        </div>
                    </center>
                </div>
            )
        }else if(this.routeCondition() === 'categories'){                
            return (
                <div >
                    <center>
                        <div className='container row' style={{paddingTop: '140px'}}>
                            {this.renderProductsFromCategory()}                                       
                        </div>
                    </center>
                </div>
            )
        }else if(this.routeCondition() === 'searching'){
            return(
                <div >
                    <center>
                        <div className='container row' style={{paddingTop: '140px'}}>
                            {this.renderSearchProducts()}                                       
                        </div>
                    </center>
                </div>
            )
        }
        else{
            return(
                <div >
                    <center>
                        <div className='container row' style={{paddingTop: '140px'}}>
                            {this.renderAllProducts()}
                            {console.log(this.props.location.search)}
                        </div>
                    </center>
                </div>
            )
        }
    }
}

const mapStateToProps = ({customer}) => {
    return {
        search: customer.searchInput,
        loading: customer.loading
    }
}

export default connect(mapStateToProps, { customerSearching, searchResult })(ProductShowcase)