import React from 'react';
import { Link } from 'react-router-dom'

class SidePanel extends React.Component {
    render (){
        return(
            <div className='bg-dark pt-5 col-2' style={{height:'300vh', color:'white'}} >
                <Link to='/admin' style={{textDecoration: 'none'}}>
                    <div style={{paddingBottom: 20}}>
                        <h4>Product Management</h4>
                    </div>
                </Link>
                <Link to='/uploadproduct' style={{textDecoration: 'none'}}>
                    <div style={{paddingBottom: 20}}>
                        <h4>Add New Product</h4>
                    </div>
                </Link>
                <Link to='/categorymanagement' style={{textDecoration: 'none'}} >
                    <div style={{paddingBottom: 20}}>
                        <h4>Category Management</h4>
                    </div>
                </Link>
                <Link to='/addnewbrand' style={{textDecoration: 'none'}}>
                    <div style={{paddingBottom: 20}}>
                        <h4>Brand Management</h4>
                    </div>
                </Link>
                <Link to='/transaction' style={{textDecoration: 'none'}}>
                    <div style={{paddingBottom: 20}}>
                        <h4>Transaction report</h4>
                    </div>
                </Link>
            </div>
        )
    }
}

export default SidePanel