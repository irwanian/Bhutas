import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Header from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/LoginPage';
import AdminPage from './pages/Admin';
import Register from './pages/RegistrationPages';
import CartPage from './pages/CartPage'
import ErrorPage from './pages/ErrorPage';

class App extends React.Component{
  render(){
    return(
      <div>

         <Header  />
         <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/detail' component={ProductDetail} />
            <Route path='/login' component={Login} />
            <Route path='/registration' component={Register} />
           <Route path='/admin' component={AdminPage} />
           <Route path='/mycart' component={CartPage} />
           <Route path ='*' component={ErrorPage} />
         </Switch> 

      </div>
    )
  }
}


export default App;
