import React from 'react'
import {Table} from 'reactstrap'

class AdminPage extends React.Component{
    
    
    
    
    
    
    render(){
        return(
            <div className='container' style={{ paddingTop : '80px'}} >
                <div className='text-center mt-5'>
                    <h1 className='mb-5'>Product Management</h1>
                    <Table>
                        <thead>
                        <tr>
                            <th>No.</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Weight</th>
                            <th>Description</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th colSpan='2'>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Nike AirFreak</td>
                            <td>Rp. 1.300.000</td>
                            <td>0.5 Kg</td>
                            <td> baru nihhhh</td>
                            <td>
                                <select>
                                     <option>Nike</option>
                                </select>
                            </td>
                            <td>
                                 <select>
                                     <option>Basketball</option>
                                </select>
                            </td>
                            <td><input type='button' value='Edit' className='btn btn-primary' /> </td>
                            <td><input type='button' value='Delete' className='btn btn-danger' /></td>                                                                                                                
                        </tr>
                        </tbody>
                        <tfoot>
                            
                        </tfoot>
                    </Table>
                    
                </div>
            </div>
        )
    }
}

export default AdminPage