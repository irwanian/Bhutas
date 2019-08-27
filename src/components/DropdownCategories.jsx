import React from 'react'
import {
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap'
import Axios from 'axios'
import { API_URL } from '../Helpers/API_URL';
import { Link } from 'react-router-dom'

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
                <Link to={'/products?id=' + val.id}>
                    <DropdownItem>{val.categoryname.toUpperCase()}</DropdownItem>
                </Link>
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