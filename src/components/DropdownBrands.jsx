import React from 'react'
import {
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap'
import Axios from 'axios';
import { API_URL } from '../Helpers/API_URL' 
    
class Brands extends React.Component{
    state = {
        listBrands: []
    } 
    
    componentDidMount(){
        Axios.get(API_URL +'/brands/allbrands')
        .then((res) => {
            this.setState({ listBrands: res.data })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    renderListBrands = () => {
        return this.state.listBrands.map((val) => {
            return (
                    <DropdownItem  href={'/products?brands=' + val.id}>
                     <div className='row justify-content-between' >
                        <span style={{fontWeight: 'bolder'}}>{val.brandname.toUpperCase()}</span> 
                        <span className='flex'><img width={45} height={40} src={API_URL + val.image} alt={val.brandname + ' Logo'} /></span>
                     </div>   
                    </DropdownItem>
            )
        })
    }

    render(){
     return(
         <div> 
            <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <span className='brand-list' style={{color: 'white',fontWeight:'600'}}>BRANDS</span>
                </DropdownToggle>
                <DropdownMenu >
                    {this.renderListBrands()}
                </DropdownMenu>
                </UncontrolledDropdown>  
            </Nav>
         </div>
     )     
    }
}
export default Brands