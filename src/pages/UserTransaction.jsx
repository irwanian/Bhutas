import React from 'react'
import Axios from 'axios'
import { API_URL } from '../Helpers/API_URL'
import numeral from 'numeral'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'


class UserTransaction extends React.Component{
    state = {
        unReceivedItems: [],
        finishLoading: false,
        trxDetail: [],
        openModal: false,
    }
    
       componentDidMount(){
        const id = this.props.location.pathname.split('/')[2]
        
        Axios.get(API_URL + '/checkout/confirmdelivery/' + id)
        .then((res)=> {
            console.log(res.data)
            this.setState({ unReceivedItems: res.data, finishLoading: true })
        })
        .catch((err)=> {
            console.log(err)
        })
    }
    componentDidUpdate(){
        const id = this.props.location.pathname.split('/')[2]
        if(!this.state.finishLoading){
            Axios.get(API_URL + '/checkout/confirmdelivery/' + id)
            .then((res)=> {
                console.log(res.data)
                this.setState({ unReceivedItems: res.data, finishLoading: true })
            })
            .catch((err)=> {
                console.log(err)
            })
        }
    }

    transactionDetail = (id) => {
        Axios.get(API_URL + '/checkout/detail/' + id)
        .then((res)=>{
            this.setState({ trxDetail: res.data, openModal: true, finishLoading: false })
        })
        .catch((err)=> {
            console.log(err)
          })
      }

      renderTrxDetail = () => {
        return this.state.trxDetail.map((val)=> {
            return(
          <tr key={val.id} >
             <td>{val.productname.toUpperCase()}</td>
             <td><img width={130} height={130} src={API_URL + val.picture} alt={val.productname} /></td>
             <td>{'Rp. ' + numeral(val.price).format(0.0)}</td>
             <td>{numeral(val.qty).format(0.0) + ' pcs'}</td>
             <td>{'Rp. ' + numeral(val.total_price).format(0.0)}</td> 
          </tr>
        )
    })
}

    onConfirmDelivery = (id) => {
        Axios.put(API_URL + '/checkout/received/' + id)
        .then((res)=> {
            this.setState({ finishLoading: false })
            console.log(res.data)
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    renderUnReceivedItems = () => {
        return this.state.unReceivedItems.map((val, index)=> {
            

            return (
                <div key={val.id} style={{ border: '0.1px solid grey',marginTop:40, padding: '10px', boxShadow: '5px 10px 10px 6px #888888'}}>
                    <div style={{fontWeight: 600}} >{val.date.split('T')[0]}</div>
                    <div className='row container justify-content-around mt-4' style={{width: '100vw', fontWeight: 600}} >
                        <div style={{paddingLeft: 20}} >
                            <div style={{ marginBottom: 10 }}>Transaction ID:</div> 
                            <div>{'TRX ' + val.transaction_id}</div>
                        </div>    
                        <div style={{paddingLeft: 20}} >
                            <div style={{ marginBottom: 10 }}>STATUS:</div> 
                            <div>
                                {val.status === 2 ? 'Waiting Approval' : null}
                                {val.status === 3 ? 'Payment Approved' : null}
                                {val.status === 4 ? <h6 style={{color: 'red'}}>'Payment Rejected'</h6> : null}
                                {val.status === 5 ? 'Items on Delivery' : null}
                                {val.status === 6 ? <h6 style={{color: 'green'}} >Transaction Complete!</h6> : null}
                            </div>
                        </div>
                        <div style={{paddingLeft: 20}} >
                            <div style={{ marginBottom: 10 }}>TOTAL PRICE:</div> 
                            <div>{'Rp. ' + numeral(val.total_price).format(0,0)}</div>
                        </div>
                        <div style={{paddingLeft: 20}} >
                            <div style={{ marginBottom: 10 }}>TRANSACTION DETAIL:</div> 
                            <div><input type='button' className='btn btn-info' onClick={()=> this.transactionDetail(val.transaction_id)} value='Transaction Detail' /></div>
                        </div>
                        { val.status === 5 ?
                        <div style={{paddingLeft: 20}} >
                            <div style={{ marginBottom: 10 }}>CONFIRMATION:</div> 
                            <input type='button' onClick={()=> this.onConfirmDelivery(val.transaction_id)}
                             className='btn btn-success' value='CONFIRM DELIVERY' />
                        </div> : null
                    }
                    </div>
                    <Modal size='lg' isOpen={this.state.openModal} toggle={()=> this.setState({ openModal: false })}>
                        <ModalHeader>
                            <h6>Transaction Detail</h6>
                        </ModalHeader>
                        <ModalBody>
                        <table>
                            <thead>
                                <td>Product</td>
                                <td>Image</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total Price</td>
                            </thead>
                            <tbody>
                                {this.renderTrxDetail()}
                            </tbody>
                        </table>
                        </ModalBody>
                    </Modal>
                </div>
            )
        })
    }
    
    render(){
        return(
            <div className='container' style={{ paddingTop : '80px'}} >
                <h1 >TRANSACTION STATUS</h1>
               {this.state.unReceivedItems.length !== 0 ?
                    <div  className='mt-5'>{this.renderUnReceivedItems()}</div>
                 : <div className='mt-5'>
                     You Don't Have Any Transaction
                 </div>
                }
            </div>
        )
    }
}


export default UserTransaction