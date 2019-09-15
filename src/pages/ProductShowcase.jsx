import React, {Component} from 'react';
import Axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import { API_URL } from '../Helpers/API_URL';
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
        Axios.get(API_URL + '/products/searchproducts?searching=' + this.props.location.search.split('=')[1])
        .then((res)=> {
            this.setState({ searchResult: res.data })
            console.log(this.state.searchResult)
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
            console.log('ini dati category ' + res.data)

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
            console.log('ini dati brands ' + res.data)

            this.setState({productsFromBrand: res.data})
        })
        .catch((err) => {
            console.log(err);
        })
    }

    renderAllProducts = () => {
        return this.state.allProducts.map((val, index) => {
            return (
                <div key={index} className="card" style={{marginTop: '20px'}}>
                    <a style={{textDecoration: 'none'}}  href={'/detail/' + val.product_id}>
                        
                        {val.discount > 0 ? 
                        <span style={{fontWeight: 600, width: '100px',color: 'white', height: '30px',position: 'absolute',
                         right: 0, backgroundColor: 'red', padding: 5}}>{val.discount + ' % OFF'}</span> : null}
                        <img src={API_URL + val.picture} alt={val.productname} style={{width: "100%" , height: '300px'}} />
                        <h3>{val.productname.toUpperCase()}</h3>
                        <div>
                            <strike className="price">{val.discount === 0 ? <tr style={{border: 'none'}} /> :
                             'Rp. ' + numeral(val.price).format(0,0)}</strike>
                        </div>
                        <div>
                            <p className='final-price'>{val.discount === 0 ? 'Rp. ' + numeral(val.price).format(0,0):
                            'Rp. ' + numeral(val.price - ( val.price * (val.discount / 100))).format(0,0)}</p>
                        </div>
                    </a>
                </div>
            )
        })
    }

    renderSearchProducts = () => {
        return this.state.searchResult.map((val, index) => {
            return (
                <div key={index} className="card" style={{marginTop: '20px'}}>
                    <a style={{textDecoration: 'none'}}  href={'/detail/' + val.product_id}>
                        
                        {val.discount > 0 ? 
                        <span style={{fontWeight: 600, width: '100px',color: 'white', height: '30px',position: 'absolute',
                         right: 0, backgroundColor: 'red', padding: 5}}>{val.discount + ' % OFF'}</span> : null}
                        <img src={API_URL + val.picture} alt={val.productname} style={{width: "100%" , height: '300px'}} />
                        <h3>{val.productname.toUpperCase()}</h3>
                        <div>
                            <strike className="price">{val.discount === 0 ? <tr style={{border: 'none'}} /> :
                             'Rp. ' + numeral(val.price).format(0,0)}</strike>
                        </div>
                        <div>
                            <p className='final-price'>{val.discount === 0 ? 'Rp. ' + numeral(val.price).format(0,0):
                            'Rp. ' + numeral(val.price - ( val.price * (val.discount / 100))).format(0,0)}</p>
                        </div>
                    </a>
                </div>
                )
        })
    }

    renderSaleProducts = () => {
        return this.state.saleProducts.map((val, index) => {
            return (
                <div key={index} className="card" style={{marginTop: '20px'}}>
                    <a style={{textDecoration: 'none'}}  href={'/detail/' + val.product_id}>
                        
                        {val.discount > 0 ? 
                        <span style={{fontWeight: 600, width: '100px',color: 'white', height: '30px',position: 'absolute',
                         right: 0, backgroundColor: 'red', padding: 5}}>{val.discount + ' % OFF'}</span> : null}
                        <img src={API_URL + val.picture} alt={val.productname} style={{width: "100%" , height: '300px'}} />
                        <h3>{val.productname.toUpperCase()}</h3>
                        <div>
                            <strike className="price">{val.discount === 0 ? <tr style={{border: 'none'}} /> :
                             'Rp. ' + numeral(val.price).format(0,0)}</strike>
                        </div>
                        <div>
                            <p className='final-price'>{val.discount === 0 ? 'Rp. ' + numeral(val.price).format(0,0):
                            'Rp. ' + numeral(val.price - ( val.price * (val.discount / 100))).format(0,0)}</p>
                        </div>
                    </a>
                </div>
            )
        })
    }

    renderProductsFromCategory = () => {
        return this.state.productsFromCategory.map((val, index) => {
            return (
                <div key={index} className="card" style={{marginTop: '20px'}}>
                    <a style={{textDecoration: 'none'}}  href={'/detail/' + val.product_id}>
                        
                        {val.discount > 0 ? 
                        <span style={{fontWeight: 600, width: '100px',color: 'white', height: '30px',position: 'absolute',
                         right: 0, backgroundColor: 'red', padding: 5}}>{val.discount + ' % OFF'}</span> : null}
                        <img src={API_URL + val.picture} alt={val.productname} style={{width: "100%" , height: '300px'}} />
                        <h3>{val.productname.toUpperCase()}</h3>
                        <div>
                            <strike className="price">{val.discount === 0 ? <tr style={{border: 'none'}} /> :
                             'Rp. ' + numeral(val.price).format(0,0)}</strike>
                        </div>
                        <div>
                            <p className='final-price'>{val.discount === 0 ? 'Rp. ' + numeral(val.price).format(0,0):
                            'Rp. ' + numeral(val.price - ( val.price * (val.discount / 100))).format(0,0)}</p>
                        </div>
                    </a>
                </div>
            )
        })
    }

    renderProductsFromBrand = () => {
        return this.state.productsFromBrand.map((val, index) => {
            return (
                <div key={index} className="card" style={{marginTop: '20px'}}>
                    <a style={{textDecoration: 'none'}}  href={'/detail/' + val.product_id}>
                        
                        {val.discount > 0 ? 
                        <span style={{fontWeight: 600, width: '100px',color: 'white', height: '30px',position: 'absolute',
                         right: 0, backgroundColor: 'red', padding: 5}}>{val.discount + ' % OFF'}</span> : null}
                        <img src={API_URL + val.picture} alt={val.productname} style={{width: "100%" , height: '300px'}} />
                        <h3>{val.productname.toUpperCase()}</h3>
                        <div>
                            <strike className="price">{val.discount === 0 ? <tr style={{border: 'none'}} /> :
                             'Rp. ' + numeral(val.price).format(0,0)}</strike>
                        </div>
                        <div>
                            <p className='final-price'>{val.discount === 0 ? 'Rp. ' + numeral(val.price).format(0,0):
                            'Rp. ' + numeral(val.price - ( val.price * (val.discount / 100))).format(0,0)}</p>
                        </div>
                    </a>
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