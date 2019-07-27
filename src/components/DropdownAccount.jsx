import React from 'react'
import {
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap'
    import {Link} from 'react-router-dom'
    import {IoIosContact} from 'react-icons/io'


class DropdownAccount extends React.Component{
    render(){
        return(
            <div>
                <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav  inNavbar>
                <DropdownToggle nav caret  >
                <IoIosContact className='personal-account' style={{ fontWeight : 'bold', color : 'white'}} />
                </DropdownToggle>
                <div style={{marginRight: '10vw'}} className='account-info'>
                  <DropdownMenu >
                    <Link to='/' style={{textDecoration:'none'}}>
                      <DropdownItem>
                          Option 1
                      </DropdownItem>
                    </Link>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem>
                      <span>Login</span> / <span>Register</span>
                    </DropdownItem>
                    <DropdownItem divider />
                  <Link>
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </Link>
                  </DropdownMenu>
                </div>
              </UncontrolledDropdown>
                </Nav>
            </div>
        )
    }
}

export default DropdownAccount