import React from 'react'
import {
    
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap'
    
class Categories extends React.Component{
   
    render(){
     return(
         <div>
            <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <span className='category-list' style={{color: 'white',fontWeight:'600'}}>CATEGORIES</span>
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
export default Categories