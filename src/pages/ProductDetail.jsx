import React from 'react'
import NewArrivals from '../components/SliderNewArrivals';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { API_URL } from '../Helpers/API_URL';
import numeral from 'numeral'
import { Spinner, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { addQuantity, reduceQuantity } from '../Actions'




class ProductDetail extends React.Component{
state={
    productDetail: [],
    sizeValue: 0,
    sizeStock: 0,
    stockData46: 0,
    stockData47: 0,
    stockData48: 0,
    stockData49: 0,
    stockData50: 0,
    errorMessage: '',
    addToCartSuccess: false,
    loading: false,
    openModal: false
}

componentDidMount(){
    const id = this.props.location.pathname.split('/')[2]
    console.log(id)
    Axios.get(API_URL + '/products/productdetail/' + id)
    .then((res)=> {
        this.setState({ productDetail: res.data })
    })
    .catch((err)=> {
        console.log(err)
    })
    Axios.get(API_URL + '/products/stocks/' + id)
    .then((res)=> {
        console.log(res.data)
        this.setState({ 
                        stockData46: res.data[0].size_46,
                        stockData47: res.data[0].size_47,
                        stockData48: res.data[0].size_48,
                        stockData49: res.data[0].size_49,
                        stockData50: res.data[0].size_50
                    })
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


handleSizeChange = (e) => {
    const size = e.target.value
    console.log(size)
    if(size){
        this.setState({ sizeValue: size })
    }
}

renderAddBtnOrLoading = () => {

    if(this.props.id === 0){
        return (
            <Link to='/login'>
                <input type='button' value='Go To Login Page' className='btn btn-dark mt-4'  />
            </Link>
        )

    }
    else if(this.state.loading === false && this.state.sizeValue !== 0 && this.props.count !== 0 && this.props.role !== 1){
        return(
            <div>
                    <input type='button' value='ADD TO CART' onClick={this.onAddToCartButtonClick}  className='btn btn-dark mt-4' />
            </div>
        )
    }else if(this.state.sizeValue === 0 || this.props.count === 0){
        return(
            <div className='mt-3 alert alert-info'> Please Select Shoe Size and Quantity</div>
    )
        }else if(this.props.role === 1 ){
        return null
    }
    return <Spinner color='dark' style={{fontSize: '26px'}} /> 
}

onAddToCartButtonClick = () => {
    this.setState({ loading: true })
    
    if(this.props.count === 0){
        this.setState({ errorMessage: 'Please Select Shoe Size and Quantity!', loading: false })
    }else if(this.props.checkout > 0){
        this.setState({ errorMessage: 'Please Complete Your Payment First', loading: false })
    }else{

        const price = this.state.productDetail[0].price
        const discount = this.state.productDetail[0].discount
        const total_price = this.props.count * (price - (price * (discount/100)))  
        let stockProduct = document.getElementById('stockProduct')
        let selectedStock = stockProduct.options[stockProduct.selectedIndex].innerHTML
    
    
        const data = {
    
            product_id: Number(this.props.location.pathname.split('/')[2]),
            user_id: Number(this.props.userId),
            qty: this.props.count,
            price: price - (price * discount/100),
            total_price,
            size: selectedStock
        } 
        console.log(data)
        Axios.post(API_URL + '/transaction/addtocart', data)
        .then((res)=> {
            console.log(res.data)
            this.setState({ addToCartSuccess: true, errorMessage: '', openModal: true })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

renderProductDetail = () => {
    return this.state.productDetail.map((val) => {

            return(
             <div className='row mt-5'>
                    <div className='col-md-6 mt-5 product-image-detail'>
                        <img src={API_URL + val.picture} className='img-fluid' alt={val.productname} style={{width :450, height: 450, border : '1.5px solid blue', marginBottom:'20px'}} />
                    </div>
                                
                        <div className='col-md-6'>
                        <img src={API_URL + val.logo}  alt={val.brand} style={{width:'150px'}}/>
                        
                        <h1>{val.productname.toUpperCase()}</h1>
                        <h4>{val.category.toUpperCase()}</h4>
                        <span>
                            { val.discount > 0 ?    
                            <strike >{'Rp. ' + numeral(val.price).format(0,0)}</strike>
                            : null }
                            <h5 style={{color : 'red'}}>{'Rp. ' + numeral(val.price - val.price * (val.discount/100)).format(0,0)} </h5>  {/* Harga final diakses melalui global state, sehingga harga berubah mengikuty quantity pembelian */}
                        </span>
                        <p >{val.description}</p>
                        <select name='size' id='stockProduct' onChange={this.handleSizeChange} style={{width:'150px', borderRadius:'5px', height:'30px'}}>
                            <option ref='size' value={0} style={{fontWeight: '600'}}>SHOE SIZE</option>
                            {val.size_46 > 0 ? <option value={val.size_46}>46 </option> : <option disabled style={{color: 'red'}} > 46 Out Of Stock</option>}
                            {val.size_47 > 0 ? <option value={val.size_47}>47 </option> : <option disabled style={{color: 'red'}} > 47 Out Of Stock</option>}
                            {val.size_48 > 0 ? <option value={val.size_48}>48 </option> : <option disabled style={{color: 'red'}} > 48 Out Of Stock</option>}
                            {val.size_49 > 0 ? <option value={val.size_49}>49 </option> : <option disabled style={{color: 'red'}} > 49 Out Of Stock</option>}
                            {val.size_50 > 0 ? <option value={val.size_50}>50 </option> : <option disabled style={{color: 'red'}} > 50 Out Of Stock</option>}
                        </select>
                        <span style={{marginLeft: '30px'}}> <span style={{marginRight: '20px', fontWeight: '600', fontSize: '17px'}}>QUANTITY :</span> </span>
                        <input   type='button' className='btn btn-light mr-2' style={{fontSize: '15px', fontWeight: 'bold'}}
                         value='-' onClick={this.onReduceButton} />
                            <span style={{fontSize: '15px', fontWeight: 'bold'}}>{this.props.count}</span>
                            {
                                this.state.sizeValue > this.props.count ?
                            <span> 
                            <input type='button' style={{fontSize: '15px', fontWeight: 'bold'}}
                             className='btn btn-light ml-2'onClick={this.onAddButton} value='+' />
                            </span>
                             : <span>
                                    <input type='button' disabled style={{fontSize: '15px', fontWeight: 'bold'}}
                                    className='btn btn-light ml-2'onClick={this.onAddButton} value='+' />
                                </span>
                            }
                            
                            <br />
                            {this.renderAddBtnOrLoading()}
                            
                            {
                                this.state.errorMessage === '' ? null :
                                <div className=' mt-3 classname alert alert-danger'>
                                    {this.state.errorMessage}
                                </div>
                            }
    
                        </div>
                        <Modal size='lg' isOpen={this.state.openModal} >
                            <ModalHeader className='text-center' style={{fontWeight: 600}}>
                                Product Successfully Added
                            </ModalHeader>
                            <ModalBody>
                                <div className='row justify-content-between'>
                                    <div>
                                        <img src={API_URL + val.picture} className='img-fluid' alt={val.productname} style={{width :110, height:110}} />
                                    </div>
                                    <div style={{fontWeight: 500}}>{val.productname.toUpperCase()}</div>
                                    <div>{val.qty}</div>
                                    <div>
                                        <a href={'/products'}>
                                            <input type='button' className='btn btn-info mr-5' value='Continue Shopping' /> 
                                        </a>
                                        <a href={'/mycart/' + this.props.id}>
                                            <input type='button' className='btn btn-success mr-5' value='View Cart' /> 
                                        </a>
                                    </div>
                                </div>
                            </ModalBody>
                        </Modal>
                        </div>
            )
    })
}
    render(){
        if(this.state.productDetail === []) return <Spinner color='primary' style={{fontWeight: '30px', justifyContent: 'center', alignItems: 'center'}} />
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

const mapStateToProps = ({ auth, customer }) => {
    return {
        count: customer.productQty,
        userId: auth.userId,
        checkout: customer.checkoutStatus,
        role: auth.role_id,
        id: auth.userId
    }
}

export default connect(mapStateToProps, { addQuantity, reduceQuantity })(ProductDetail) 