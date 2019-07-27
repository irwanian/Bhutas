import React from 'react'
import {
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap'
    
class Brands extends React.Component{
    render(){
     return(
         <div> 
            <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <span className='brand-list' style={{color: 'white',fontWeight:'600'}}>BRANDS</span>
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem>
                    Option 1
                    </DropdownItem>
                    <DropdownItem>
                    Option 2
                    </DropdownItem>
                    <DropdownItem>
                    Reset
                    </DropdownItem>
                    <DropdownItem>
                    Reset
                    </DropdownItem>
                    <DropdownItem>
                    Reset
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>  
            </Nav>
         </div>
     )     
    }
}
export default Brands