import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
  import { Link } from 'react-router-dom'
  import { IoIosCart } from 'react-icons/io'
import Categories from './DropdownCategories';
import Brands from './DropdownBrands';
import AccountInfo from './DropdownAccount';
import { GoSearch } from 'react-icons/go'
import { connect } from 'react-redux'
import { customerSearching, getSearchResults } from '../Actions'
import Axios from 'axios';
import { API_URL } from '../Helpers/API_URL';

class Header extends React.Component {
  

  

  state = {
    isOpen: false
  };
  toggle =()=> {
    this.setState({isOpen: !this.state.isOpen});
  }


  componentDidMount(){
    console.log(this.props.role + ' role nya \n emailnya ' + this.props.email + '\n namanya ' + this.props.fullname )

  }

  render() {
    return (
      <div>
        <input ref='searchInput' onChange={(e)=> this.props.customerSearching(e.target.value)}
          className='search-input bg-transparent' type='text' />
        
        <a href={'/products?searching=' + this.props.search}>
          <GoSearch className='search-icon' />  
        </a>
        
        {/* ======================DISABLE IF USER HASN'T LOGIN================================ */}
        
        {this.props.role === 1 ? null :
        <Link to='mycart'>
          <IoIosCart className='flex-center cart-icon'   />
            {/* ==================Cart-Content-Start============= */}
            {this.props.cartContent < 1 ? null :
            <span className='cart-filling'>{this.props.cartContent}</span>
          }
            {/* ==================Cart-Content-End================ */}
        </Link> }
        {/*=======================DISABLE IF USER HASN'T LOGIN============================== */}

        <Navbar color="dark" dark expand="md" style={{position:'fixed', zIndex:'1', width: '100%'}} >
        
        {/*================================= Brand Start ========================================*/}
          <Link to='/'>
          <NavbarBrand className='main-Brand' >BHUTAS</NavbarBrand>
          </Link>
        {/* =====================================Brand End =======================================*/}

        {/* ==============================Menu Choices Start=====================================*/}      
          <NavbarToggler className='ml-auto'  onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar className='col'>

          <div className='mr-4'>
            <Categories  />
          </div>
          <div className= 'mr-3'>
            <Brands className='Brands' />
          </div>
          <Link style={{textDecoration:'none'}}>
            <Nav>
              <NavItem>
                <Link style={{textDecoration: 'none'}} to='/products?onsale=1' >
                  <NavLink  style={{cursor: 'pointer',
                            borderRadius : '5px',
                            color:'white',
                            backgroundColor: 'red',
                            fontWeight: '600'}}
                            className='on-sale'>SALE</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Link>
        {/*=============================== Menu Choices End========================================= */}
        
        {/* ============================== USER SECTION START======================================= */}
        <div className='ml-auto'>
        
            <AccountInfo   />
        </div>
          </Collapse>
                  
      {/* ============================== USER SECTION START======================================= */}

        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({ customer, auth }) => {
  return {
      search: customer.searchInput,
      loading: customer.loading,
      cartContent: customer.cartContent,
      role: auth.role_id,
      fullname: auth.fullname,
      email: auth.email 
  }
}

export default connect(mapStateToProps, { customerSearching, getSearchResults })(Header)