import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { API_URL } from '../Helpers/API_URL'
import { connect } from 'react-redux'
import { addedCartContent, checkingOut } from '../Actions'
import { Spinner } from 'reactstrap'
import numeral from 'numeral'

class Cart extends React.Component {
    state = {
        cartDetail: [],
        totalQty: 0,
        totalPrice: 0
    }

    componentDidMount(){
        const id = this.props.id
        if(id !== 0){
            Axios.get(API_URL + '/transaction/usercart/' + id)
                .then((res)=> {
                    console.log(res.data)
                    this.setState({ cartDetail: res.data })
                    console.log(this.state.cartDetail)
                })
                .catch((err)=> {
                    console.log(err)
                })
        }
    }

    componentWillReceiveProps(newProps){
        console.log(newProps)
        if(this.props.id !== newProps.id){
            console.log('pass')
            const id = newProps.id
            Axios.get(API_URL + '/transaction/usercart/' + id)
            .then((res)=> {
                console.log(res.data);
                this.setState({ cartDetail: res.data })
                console.log(this.state.cartDetail)
            })
            .catch((err)=> {
                console.log(err)
            })
        }
    }

    onDeleteCartProduct = (id) => {
        const confirmation = window.confirm('Are You Sure?')

        if(confirmation){
            Axios.put(API_URL + '/transaction/deletecart/' + id)
            .then((res)=> {
                this.setState({ cartDetail: res.data })
            })
            .catch((err)=> {
                console.log(err)
            })
        }
    }

    onProceedToCheckOutBtn = () => {
        this.props.checkingOut()
        Axios.post(API_URL + '/transaction/addtransaction/' + this.props.id)
        .then((res)=> {
            console.log(res.data)
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    renderTotalPrice = () => {
        let total = 0

        this.state.cartDetail.forEach((val)=> {
            total += val.total_price
        })
        return total
    }

    renderTotalQty = () => {
        let total = 0

        this.state.cartDetail.forEach((val)=> {
            total += val.qty
        })
        this.props.addedCartContent(total)
        return total
    }

    renderingCartDetail = () => {
        return this.state.cartDetail.map((val, index)=> {
                return (
                    <tr key={val.product_id}>
                        <td>{index + 1}</td>
                        <td><img  src={API_URL + val.picture}
                        alt={val.productname} width='95px' /> </td>
                        <td>
                            <div>
                                <h5>{val.productname}</h5>
                            </div>
                            <div style={{paddingTop:'3.5px'}}>
                                {'size ' + val.size}
                            </div>
                        </td>
                        <td>{val.qty}</td>
                        <td>
                            { 'Rp. ' + numeral(val.total_price).format(0,0)}
                        </td>
                        <td>
                            <input type='button' className='btn btn-danger' onClick={()=> this.onDeleteCartProduct(val.cart_id, index)} value='Delete' />
                        </td>
                    </tr>
                )
        })
    }
    
    render(){
        if(this.state.cartDetail.length > 0){
                return(
                    <div  >
                        <div className='text-center' style={{paddingTop : '60px'}}>
                            <h1 style={{fontWeight : 'bolder'}}>
                                Your Cart 
                             </h1>  
                        </div>
                        {/*===========================TABLE SECTION============================  */}
                        <div className='row justify-content-center'>
                            <table style={{width: '90vw', backgroundColor: '#e9f0ef' }} className='text-center mt-5'>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th> Product </th>
                                        <th>Description</th>
                                        <th>Quantity</th>
                                        <th>Total Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {/* ======================MAP HERE================================ */}
                                <tbody>
                                    {this.renderingCartDetail()}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan='3' style={{fontWeight: 'bolder'}}>SUB TOTAL</td>
                                        <td style={{fontWeight: 'bolder'}}>{this.renderTotalQty()} </td>
                                        <td colSpan='2' style={{fontWeight: 'bolder'}}> {'Rp. ' + numeral(this.renderTotalPrice()).format(0,0)} </td>
                                    </tr>
                                </tfoot>
                                {/* ======================MAP LIMIT================================ */}
        
                            </table>
                        </div>
                        {/*===========================TABLE SECTION============================  */}
                        <div className='row justify-content-around mt-5'>
                            <Link to='/products' >
                                 <input type='button'className='btn btn-dark' value='<< CONTINUE SHOPPING'/>
                            </Link>
                            <a href={'/checkout/' + this.props.id}>
                                <input type='button' className='btn btn-dark' onClick={this.onProceedToCheckOutBtn} value='PROCEED TO CHECKOUT >>' />
                            </a>
                        </div>
                    </div>
                )
        }else if(this.state.cartDetail.length === 0){
            return (
                <div className='text-center mt-5' >
                    <img src='https://i.pinimg.com/originals/bb/d1/21/bbd1218cb06764d91897de614a948b1a.png'
                     style={{width: '30vw', height: '40vw'}} alt='Bhutas' />
                </div>
            ) 
        }
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        id: auth.userId
    }
}

export default connect(mapStateToProps, { addedCartContent, checkingOut })(Cart)