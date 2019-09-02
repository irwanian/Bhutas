import React from 'react'
import {
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap'
import Axios from 'axios'
import { API_URL } from '../Helpers/API_URL';

class Categories extends React.Component{
   
    state = {
        listCategories: []
    } 
    
    componentDidMount(){
        Axios.get(API_URL +'/categories/allcategories')
        .then((res) => {
            this.setState({ listCategories: res.data })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    renderListCategories = () => {
        return this.state.listCategories.map((val) => {
            return (
                    <DropdownItem href={'/products?categories=' + val.id}
                     style={{fontWeight: 'bolder'}} >{val.categoryname.toUpperCase()}</DropdownItem>
            )
        })
    }

    render(){
     return(
         <div>
            <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <span className='category-list' style={{color: 'white',fontWeight:'600'}}>CATEGORIES</span>
                </DropdownToggle>
                <DropdownMenu >
                    {this.renderListCategories()}
                </DropdownMenu>
                </UncontrolledDropdown>          
            </Nav>
         </div>
     )     
    }
}
export default Categories