import React from 'react'
import Axios from 'axios'
import { API_URL } from '../Helpers/API_URL'
import { connect } from 'react-redux'

class Checkout extends React.Component{
    state = {
        shopList: []
    }

    componentDidMount(){
        const id = this.props.id
        Axios.get(API_URL + '/transaction/usercart/' + id)
        .then((res)=> {
            this.setState({ shopList: res.data })
        })
        .catch((err)=> {
            console.log(err)
        })
    }
    
    render(){
        return(
            <div style={{color: 'red', paddingTop : '80px'}} >
                <h1 >Checkout</h1>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return{
        id: auth.userId
    }
}

export default connect(mapStateToProps)(Checkout)