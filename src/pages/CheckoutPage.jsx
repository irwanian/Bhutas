import React from 'react'
import Axios from 'axios'
import { API_URL } from '../Helpers/API_URL'
import { connect } from 'react-redux'
import { FiClock } from 'react-icons/fi'
import { Redirect } from 'react-router-dom'
import { CustomInput, Spinner, Modal, ModalBody, ModalHeader } from 'reactstrap'
import numeral from 'numeral'

class Checkout extends React.Component{
    state = {
        shopList: [],
        trxId: 0,
        totalTrx: 0,
        transactionProof: undefined,
        transactionUploaderName: 'Select Proof Of Transaction Image... ',
        loading: false,
        errorMessage: '',
        proofSubmitted: false,
        openModal: false
    }

    componentDidMount(){
        const id = this.props.location.pathname.split('/')[2]
        
        Axios.get(API_URL + '/checkout/usertransaction/' + id)
        .then((res)=> {
            console.log(this.state.trxId)
            console.log(res.data)
            this.setState({ shopList: res.data.transaction_data, trxId: res.data.transaction_id, totalTrx: res.data.total })
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    onUploadTransactionChange = (e) => {
        console.log(e.target.files[0]);
        
        var file = e.target.files[0]
        
        if(file){
            this.setState({ transactionUploaderName : file.name ,transactionProof : file})
        }else{
            this.setState({transactionUploaderName : 'Select Image...', transactionProof : undefined})
        };
    }
    
    onUploadTransactionBtn = (id) => {
        this.setState({ loading: true })
        if(this.state.transactionProof === undefined){
            this.setState({ errorMessage: 'Please Select Image, First', loading: false, proofSubmitted: false })
        }else{
            var formData = new FormData()
            var headers ={
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            }
    
            formData.append('image', this.state.transactionProof)
    
            Axios.put(API_URL + '/checkout/updatetrx/' + id, formData, headers)
            .then((res)=>{
                    this.setState({ shopList : res.data })
                })
            .catch((err)=>{
                console.log(err);
            })
            this.setState({ errorMessage: '', loading: false, openModal: true})
        }
}


    render(){
        if(this.state.proofSubmitted) return <Redirect to='/' />
        return(
            <div className='container' style={{paddingTop : '50px'}} >
                <center>
                    <div style={{color: 'red', fontSize: 60, marginBottom: 40}} ><FiClock /> Waiting Payment</div>
                    <table className='mt-3' style={{backgroundColor: '#edf5f5', width: '600px', border: 'none'}}>
                        <th colSpan='2' className='text-left' >TRANSACTION SUMMARY: </th>
                        <tbody >
                        <tr style={{border: 'none', padding: 10}} >
                           <td style={{border: 'none', padding: 15}} >
                               Total Payment:
                            </td>
                            <td style={{border: 'none', padding: 5, marginBottom: 50}}>
                                {'Rp. ' + numeral(this.state.totalTrx).format(0,0)}
                            </td>
                        </tr>
                        <tr style={{border: 'none', padding: 10}} >
                            <td style={{border: 'none', paddingBottom: 5, paddingTop: 15, position: 'center'}} colSpan='2'>
                                <h6>Please Upload Proof Of Transaction to Verify Your Payment: </h6>
                            </td>
                        </tr>
                        <tr style={{border: 'none', padding: 10}}>
                            <td colSpan='2' style={{border: 'none', padding: 5}}>
                                    <CustomInput type='file' onChange={this.onUploadTransactionChange} label={this.state.transactionUploaderName} />
                            </td>
                        </tr>
                        <tr style={{border: 'none', padding: 10}}>
                            <td colSpan='2' style={{border: 'none', padding: 5}}>
                               {this.state.loading === true ? 
                               <Spinner color='primary' style={{fontSize: 35}} /> :
                               <input type='button' className='btn btn-primary form-control'
                                 value='UPLOAD' onClick={()=> this.onUploadTransactionBtn(this.state.trxId)} />
                                 }
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    {this.state.errorMessage === '' ? null :
                    <div className='alert alert-danger' style={{marginTop: 20}} >
                        {this.state.errorMessage}
                    </div >
                }
                </center>
                <Modal size='sm' isOpen={this.state.openModal} toggle={()=> this.setState({ proofSubmitted: true, openModal: false})} >
                    <ModalHeader> <h6> Thank You... </h6> </ModalHeader>
                    <ModalBody>
                        <p style={{fontWeight: 600}} >Please Check Your Transaction Tab To Track Your Order.</p>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = ({ auth, customer }) => {
    return{
        id: auth.userId,
        trxStatus: customer.checkoutStatus
    }
}

export default connect(mapStateToProps)(Checkout)