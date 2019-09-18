import React from 'react';
import './App.css';
import Axios from 'axios';
import { API_URL } from './Helpers/API_URL';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { keepLogin } from './Actions'
import Header from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/LoginPage';
import AdminPage from './AdminPages/Admin';
import Register from './pages/RegistrationPages';
import CartPage from './pages/CartPage'
import ErrorPage from './pages/ErrorPage';
import ProductUpload from './AdminPages/ProductUploader';
import ProductShowcase from './pages/ProductShowcase';
import AddNewBrand from './AdminPages/AddNewBrands';
import CategoryManagement from './AdminPages/CategoryManagement'
import WaitingVerification from './pages/WaitingVerification';
import AccountVerified from './pages/AccountVerified';
import Checkout from './pages/CheckoutPage';
import TransactionManagement from './AdminPages/TransactionPage';
import UserTransaction from './pages/UserTransaction';

class App extends React.Component{
  
  componentDidMount(){
    const user = localStorage.getItem('keeplogged')
    console.log(user)    
    Axios.get(API_URL + '/users/keeplogged?email=' + user)
    .then((res)=> {
      console.log(res.data)
      this.props.keepLogin({userId: res.data[0].id,
                            role_id: res.data[0].role_id,
                            fullname: res.data[0].fullname,
                            email: res.data[0].email,
                            password: res.data[0].password,
                            error: '',
                            loading: false,
                            is_login: true,
                            justLogin: true})
    })
    .catch((err)=> {
      console.log(err)
    })
  }
  
  render(){
    return(
      <div>
        <div className='pb-5'>
         <Header  />
        </div>
         <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/products' component={ProductShowcase} />
            <Route path='/detail' component={ProductDetail} />
            <Route path='/login' component={Login} />
            <Route path='/usertransaction' component={UserTransaction} />
            <Route path='/registration' component={Register} /> 
            <Route path='/waitingverification' component={WaitingVerification} />
            <Route path='/verified' component={AccountVerified} />
            <Route path='/admin' component={AdminPage} />
            <Route path='/categorymanagement' component={CategoryManagement} />
            <Route path='/addnewbrand' component={AddNewBrand} />
            <Route path='/uploadproduct' component={ProductUpload} />
            <Route path='/transaction' component={TransactionManagement} />
            <Route path='/mycart' component={CartPage} />
            <Route path='/checkout' component={Checkout} />
            <Route path ='*' component={ErrorPage} />
         </Switch> 

      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    email: auth.email,
    role: auth.role_id,
    fullname: auth.email
  }
}

export default connect(mapStateToProps, { keepLogin })(App);

