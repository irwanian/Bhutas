import React from 'react'
import Axios from 'axios'
import { API_URL } from '../Helpers/API_URL'
import { connect } from 'react-redux'
import numeral from 'numeral'

class Cart extends React.Component {
    state = {
        cartDetail: []
    }

    componentDidMount(){
        const id = this.props.id
        Axios.get(API_URL + '/transaction/usercart/' + id)
        .then((res)=> {
            this.setState({ cartDetail: res.data })
            console.log(this.state.cartDetail)
        })
        .catch((err)=> {
            console.log(err)
        })
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
                </tr>
            )
        })
    }
    
    render(){
        return(
            <div  >
                <div className='text-center' style={{paddingTop : '100px'}}>
                    <h1 style={{fontWeight : 'bolder'}}>
                        Your Cart 
                     </h1>  
                </div>
                {/*===========================TABLE SECTION============================  */}
                <div className='row justify-content-center'>
                    <table style={{width: '100vw', backgroundColor: '#e9f0ef' }} className='text-center mt-5'>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th> Product </th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {/* ======================MAP HERE================================ */}
                        <tbody>
                            {this.renderingCartDetail()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan='3' style={{fontWeight: 'bolder'}}>SUB TOTAL</td>
                                <td style={{fontWeight: 'bolder'}}>total quantity</td>
                                <td style={{fontWeight: 'bolder'}}>Rp. 60.000</td>
                            </tr>
                        </tfoot>
                        {/* ======================MAP LIMIT================================ */}

                    </table>
                </div>
                {/*===========================TABLE SECTION============================  */}
                <div className='row justify-content-between mt-5'>
                    <input type='button'className='btn btn-dark' value=' CONTINUE SHOPPING '/>
                    <input type='button' className='btn btn-dark ' value='PROCEED TO CHECKOUT' />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        id: auth.userId
    }
}

export default connect(mapStateToProps)(Cart)