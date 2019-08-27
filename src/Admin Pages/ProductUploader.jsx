import React, {Component} from 'react'
import {CustomInput} from 'reactstrap'
import SidePanel from './AdminSidePanel';

class ProductUpload extends Component {
    render(){
        return(
           <div className='bg-light row'>
                    <SidePanel  />   
            <div className='container' style={{paddingTop : '80px'}}>
                <h1 className='text-center'>ADD NEW PRODUCT</h1>
                <form className='container mt-5' style={{
                    border : '0.02px grey solid',
                    borderCollapse: 'collapse',
                    width : '1000px',
                    backgroundColor: 'light-grey',
                    marginBottom:30
                }}>
                    <div className='mb-3 mt-3'>
                        <div className='mb-2'>
                            Product Name :
                        </div>
                         <input className='form-control' type='text' placeholder='Insert Product Name' /> 
                    </div>
                    <div className='mb-3 mt-3'>
                        <div className='mb-2'>
                            Product Price :
                        </div>
                         <input className='form-control' type='number' defaultValue={0} /> 
                    </div>
                    <div className='mb-3'>
                        <div className='mb-2'>
                            Brands : 
                        </div>
                        {/* ======================RENDER BRAND OPTIONS HERE============================== */}
                        <select>
                            <option>Nike</option>    
                            <option>Jordan</option>                            
                        </select> 
                    </div>
                    <div className='mb-3'>
                        <div className='mb-2'>
                            Category : 
                        </div>

                        {/*==========================RENDER CATEGORY OPTIONS HERE============================ */}
                        <select>
                            <option>Basketball</option>    
                            <option>Boots</option>                            
                        </select> 
                    </div>
                    <div className='mb-3'>
                        <div>
                            Stock Availability :
                        </div>
                        <table className='table-stock'>
                            <tr className='text-center'>
                                <td>46</td>
                                <td>47</td>
                                <td>48</td>
                                <td>49</td>
                                <td>50</td>
                            </tr>
                                <tr>
                                    <td> <input type='number' ref='size46' placeholder='available stock'/> </td>
                                    <td> <input type='number' ref='size47' placeholder='available stock'/> </td>
                                    <td> <input type='number' ref='size48' placeholder='available stock'/> </td>
                                    <td> <input type='number' ref='size49' placeholder='available stock'/> </td>
                                    <td> <input type='number' ref='size50' placeholder='available stock'/> </td> 
                                </tr>
                        </table>
                    </div>
                    <div className='mb-3 mt-3'>
                        <div className='mb-3'>
                            Product Description :
                        </div>
                         <textarea className='form-control' type='text' />
                    </div>
                    <div >
                        <p className='mb-xl-3'>IMAGE UPLOAD</p>
                        <CustomInput className='mb-4' type='file'/>
                        <CustomInput className='mb-4' type='file'/>
                        <CustomInput className='mb-4' type='file'/>
                        <CustomInput className='mb-4' type='file'/>
                        <CustomInput className='mb-3' type='file'/>
                    </div>
                </form>
                <input style={{position: 'relative', left: '83%', marginBottom: '70px'}} type="button" className='btn btn-dark' value='ADD PRODUCT' />
            </div>
            </div>
        )
    }
}

export default ProductUpload