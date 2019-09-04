import React from 'react'
import {
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap'
import {Link} from 'react-router-dom'
import {IoIosContact} from 'react-icons/io'
import { onUserLogout } from '../Actions'
import { connect } from 'react-redux'

    class DropdownAccount extends React.Component{
      
      
      renderLoginOrLogout = () => {
        if(this.props.email === ''){
          return (
            <Link to='/login' style={{textDecoration:'none'}}>
              <DropdownItem onClick={()=> console.log(this.props.fullname)} >
                Login/Register
              </DropdownItem>
            </Link>
          )
        } return (
          <Link to='/' style={{textDecoration:'none'}}>
            <DropdownItem onClick={this.props.onUserLogout} >
              Logout
            </DropdownItem>
          </Link>
        )
      }
   
      render(){
        return(
            <div>
                <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav  inNavbar>
                <DropdownToggle nav  >
                <IoIosContact className='personal-account' style={{ fontWeight : 'bold', color : 'white'}} />
                </DropdownToggle>
                <div style={{marginRight: '10vw'}} className='account-info'>
                  <DropdownMenu >
                    <Link style={{textDecoration:'none'}}>
                      
                      {/*=======================DISABLE IF USER HASN'T LOGIN============================== */}
                      <DropdownItem>
                          {this.props.email}
                      </DropdownItem>
                      {/*=======================DISABLE IF USER HASN'T LOGIN============================== */}

                    </Link >
                    <DropdownItem>
                      My Wishlist
                    </DropdownItem>
                    <DropdownItem divider />
                        {this.renderLoginOrLogout()}
                  </DropdownMenu>
                </div>
              </UncontrolledDropdown>
                </Nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      fullname: state.auth.fullname,
      email: state.auth.email
    }
}

export default connect(mapStateToProps, { onUserLogout })(DropdownAccount)