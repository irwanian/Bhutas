import React from 'react'
import AdminSidePanel from './AdminSidePanel'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import classnames from 'classnames';
import Axios from 'axios';
import { API_URL } from '../Helpers/API_URL';
import numeral from 'numeral'

class TransactionManagement extends React.Component {
    state = {
      activeTab: '1',
      transactionData: [],
      trxDetail: [],
      unsentItems: [],
      trxId: 0,
      openModal: false
    };

    componentDidMount(){
        Axios.get(API_URL + '/checkout/waiting')
        .then((res)=> {
            console.log(res.data)
            this.setState({ transactionData: res.data,  })
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    componentDidUpdate(){
        Axios.put(API_URL + '/checkout/unsent')
        .then((res)=> {
            this.setState({ unsentItems: res.data})
        })
        .catch((err)=> {
            console.log(err)
        })
    }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  transactionDetail = (id) => {
      Axios.get(API_URL + '/checkout/detail/' + id)
      .then((res)=>{
          this.setState({ trxDetail: res.data, openModal: true })
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
             <td><img width={130} src={API_URL + val.picture} alt={val.productname} /></td>
             <td>{'Rp. ' + numeral(val.price).format(0.0)}</td>
             <td>{numeral(val.qty).format(0.0) + ' pcs'}</td>
             <td>{'Rp. ' + numeral(val.total_price).format(0.0)}</td> 
          </tr>
        )
      })
  }

  approvePaymentButton = (id) => {
    Axios.put(API_URL + '/checkout/approval/' + id)
    .then((res)=> {
        this.setState({ transactionData: res.data})
    })
    .catch((err)=> {
        console.log(err)
    })
  }

  rejectPaymentButton = (id) => {
    Axios.put(API_URL + '/checkout/rejection/' + id)
    .then((res)=> {
        this.setState({ transactionData: res.data})
    })
    .catch((err)=> {
        console.log(err)
    })
  }

  renderUnapprovedTrx = () => {
    return this.state.transactionData.map((val, index)=> {
        return(
            <tr key={val.id}>
                <td>{index + 1}</td>
                <td>{val.fullname.toUpperCase()}</td>
                <td>{val.date ? val.date.split('T').join(' ').split('.')[0] : null}</td>
                <td><img src={API_URL + val.proof} alt={val.id} width={200} className='trx-proof' /></td>
                <td><h6> Waiting Approval </h6></td>
                <td><input type='button' className='btn btn-info' onClick={()=> this.transactionDetail(val.id)} value='Transaction Detail' /> </td>
                <td><input type='button' className='btn btn-success' onClick={()=> this.approvePaymentButton(val.id, index)} value='Approve' /> </td>
                <td><input type='button' className='btn btn-danger' onClick={()=> this.rejectPaymentButton(val.id, index)} value='Reject' /> </td>
            </tr>
        )
    })
  }


  render() {
    return (
      <div className='row'>
          <AdminSidePanel/>
          <div style={{width: '80vw', paddingLeft: 10}}>
            <Nav tabs className='mt-4' >
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() =>  this.toggle('1') }
                    >
                    <h6>Transaction Approval</h6>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() =>  this.toggle('2') }
                    >
                    <h6>Send Items</h6>
                    </NavLink>
                </NavItem>
                <NavItem className='bg-transparent'></NavItem>
                <NavItem className='bg-transparent'>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() =>  this.toggle('3') }
                    >
                    <h6>Transaction Report</h6>
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent style={{marginTop: 80, padding:0}} activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                    <Row>
                    <Col >
                        {this.state.transactionData.length === 0 ? null :
                        <table style={{border: 'none'}} className='tab-transaction'>
                            <thead  >
                                <th style={{paddingRight:30}}>No.</th>
                                <th style={{paddingRight:30}}>Name</th>
                                <th style={{paddingRight:30}}>Transaction Date</th>
                                <th style={{paddingRight:30}}>Proof of Transaction</th>
                                <th style={{paddingRight:30}}>Status</th>
                                <th style={{paddingRight:30}}>Detail</th>
                                <th style={{paddingRight:30}} colSpan='2' >Actions</th>
                            </thead>
                            <tbody>
                                {this.renderUnapprovedTrx()}
                            </tbody>
                        </table>
                    }
                    </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                    <Col >
                        <h6>Send Package Here</h6>
                    </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                    <Col >
                        <h6>Render Successfull Transaction Report Here</h6>
                    </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
        <Modal size='lg' isOpen={this.state.openModal} toggle={()=> this.setState({openModal: false})}>
            <ModalHeader >
                Transaction Detail
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
    );
  }
}

export default TransactionManagement