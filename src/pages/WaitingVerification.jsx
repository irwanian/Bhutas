import React, { Component } from 'react';
import Axios from 'axios'
import { connect } from 'react-redux'
import {API_URL} from '../Helpers/API_URL'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class WaitingVerification extends Component {
   state = {
       modalOpen: false
   }
   
    onBtnResendEmailClick = () => {
        Axios.post(API_URL + '/users/resendemailverification', {
            fullname : this.props.fullname,
            email: this.props.email
        })
        .then((res)=> {
            console.log(res.data)
            this.setState({ modalOpen: true })
        })
        .catch((err)=> {
            console.log(err);
        })
    }    
    
    renderModalNotification = () => {
        if(this.state.modalOpen){
          return(
            <Modal isOpen={this.state.modalOpen} toggle={()=> this.setState({ modalOpen: false })} >
                <ModalHeader>
                    <h6>Message</h6>
                </ModalHeader>
                <ModalBody>
                    <p>Resend Email verification Success!!</p>
                </ModalBody>
            </Modal>
          )  
        }
    }

    render() {
    
    
        return (
            <div style={{marginTop: 50}}>
                <center>
                    <h2>Verify Your Email Address</h2>
                    <p>Dear { this.props.fullname.split(' ')[0].toUpperCase() }, </p>
                    <p>please check Your email to verify Your account</p>
                    <p>
                        if You haven't receive email verification link, You can click button below:
                    </p>
                    <input width={'100%'} onClick={this.onBtnResendEmailClick} type="button" className='btn btn-dark' value="Resend Email" />
                </center>
                <div>
                    {this.renderModalNotification()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        email: auth.email,
        fullname : auth.fullname
    }
}

export default  connect(mapStateToProps)(WaitingVerification)