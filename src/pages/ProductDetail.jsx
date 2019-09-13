import React from 'react'
import NewArrivals from '../components/SliderNewArrivals';
import Axios from 'axios';
import { API_URL } from '../Helpers/API_URL';
import numeral from 'numeral'
import { connect } from 'react-redux';
import { addQuantity, reduceQuantity } from '../Actions'




class ProductDetail extends React.Component{
state={
    productDetail: []
}

componentDidMount(){

    const id = this.props.location.pathname.split('/')[2]
    console.log(id)
    Axios.get(API_URL + '/products/productdetail/' + id)
    .then((res)=> {
        this.setState({ productDetail: res.data.productData })
        console.log(res.data)
        console.log(this.state.productDetail);
        
    })
    .catch((err)=> {
        console.log(err)
    })
}

onAddButton = () => {
    this.props.addQuantity()
}

onReduceButton = () => {
    if(this.props.count > 0){
        this.props.reduceQuantity()
    }
    return 0
}


renderProductDetail = () => {
    return this.state.productDetail.map((val) => {
        return(
            <div className='row mt-5'>
                <div className='col-md-6 mt-5'>
                    <img src={API_URL + val.picture} className='img-fluid' alt={val.productname} style={{width :450, height: 450, border : '1.5px solid blue', marginBottom:'20px'}} />
                </div>
                            
                    <div className='col-md-6'>
                    <img src={API_URL + val.logo} alt={val.brand} style={{width:'150px'}} />
                    
                    <h1>{val.productname.toUpperCase()}</h1>
                    <h4>{val.category.toUpperCase()}</h4>
                    <span>
                        { val.discount > 0 ?    
                        <strike >{'Rp. ' + numeral(val.price).format(0,0)}</strike>
                        : null }
                        <h5 style={{color : 'red'}}>{'Rp. ' + numeral(val.price - val.price * (val.discount/100)).format(0,0)} </h5>  {/* Harga final diakses melalui global state, sehingga harga berubah mengikuty quantity pembelian */}
                    </span>
                    <p >{val.description}</p>
                    <select name='size' style={{width:'150px', borderRadius:'5px', height:'30px'}}>
                        <option ref='size' value='0' style={{fontWeight: '600'}}>SHOE SIZE</option>
                        <option ref='size' value='46'>46 </option>
                        <option ref='size' value='47'>47</option>
                        <option ref='size' value='48'>48</option>
                        <option ref='size' value='49'>49</option>
                        <option ref='size' value='50'>50</option>
                    </select>
                    <span style={{marginLeft: '30px'}}> <span style={{marginRight: '20px', fontWeight: '600', fontSize: '17px'}}>QUANTITY :</span> </span>
                    <input   type='button' className='btn btn-light mr-2' style={{fontSize: '15px', fontWeight: 'bold'}}
                     value='-' onClick={this.onReduceButton} />
                        <span style={{fontSize: '15px', fontWeight: 'bold'}}>{this.props.count}</span>
                        <input type='button' style={{fontSize: '15px', fontWeight: 'bold'}} className='btn btn-light ml-2'
                         onClick={this.onAddButton} value='+' />
                        <br />
                    <input type='button' value='ADD TO CART'  className='btn btn-dark mt-4' />
                    
                    </div>
                    </div>
        )
    })
}
    render(){
                return(
            <div  className='container'>
                {this.renderProductDetail()}
                <div className='pt-xl-5'>
                    {/* =================render new arrivals======================= */}
                    <NewArrivals  />
                    {/* =================render new arrivals======================= */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ customer }) => {
    return {
        count: customer.cartContent
    }
}

export default connect(mapStateToProps, { addQuantity, reduceQuantity })(ProductDetail) 