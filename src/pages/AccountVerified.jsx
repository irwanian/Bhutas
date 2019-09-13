import React from 'react'
import Axios from 'axios'
import querystring from 'query-string'
import { API_URL } from '../Helpers/API_URL';
import { Spinner } from 'reactstrap'

class AccountVerified extends React.Component {
    state= {
        status : 'Loading',
    }


componentDidMount(){
    var params = querystring.parse(this.props.location.search)
    console.log(params);
    var fullname = params.fullname
    var password = params.password
    Axios.put(API_URL + '/users/verification', {fullname, password})

    .then((res)=>{
        console.log(res.data);
        this.setState({status : 'Success'})
    })
    .catch((err)=>{
        console.log(err);
        this.setState({status: 'Failed'})
    })
}


    render(){
        if(this.state.status === 'Success'){
            return(
                <div style={{paddingTop: '200px'}}>
                    <center>
                        <h1> Your Account Has Been Verified</h1>
                        <h1> Welcome To Bhutas!! </h1>
                    </center>
                </div>
            )
        }else if(this.state.status === 'Failed'){
            return (
                <div style={{paddingTop: '200px'}}>
                    <center>
                        <h1> Your Account Verification Failed</h1>
                        <h1> Please Refresh this Page  </h1>
                    </center>
                </div>
            )
        }
        return(
            <div style={{paddingTop: '200px'}}>
                    <center>
                        <Spinner color='primary' />
                        <h1> No Worries, We Are Verifying Your Account in No Time </h1>
                    </center>
                </div>
        )
    }
}

export default AccountVerified