import React from 'react'

class Cart extends React.Component {
    render(){
        return(
            <div className='container'>
                <div className='text-center' style={{paddingTop : '150px'}}>
                    <h1 style={{fontWeight : 'bolder'}}>
                        Your Cart 
                     </h1>  
                </div>
                {/*===========================TABLE SECTION============================  */}
                <div className='row justify-content-center'>
                    <table className='text-center mt-xl-5'>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th> Product </th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Weight</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {/* ======================MAP HERE================================ */}
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div>
                                        <h5>Nama Produk</h5>
                                    </div>
                                    <div style={{paddingTop:'5px'}}>
                                        Ratingnya
                                    </div>
                                    <div style={{paddingTop:'3.5px'}}>
                                        size berapa
                                    </div>
                                </td>
                                <td><img src='https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/112/0711231_PE728076_S3.jpg' 
                                alt='keresek' width='150px' /> </td>
                                <td>2</td>
                                <td> 600 gr </td>
                                <td>Rp. 30.000</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan='3' style={{fontWeight: 'bolder'}}>Sub Total</td>
                                <td style={{fontWeight: 'bolder'}}>total quantity</td>
                                <td style={{fontWeight: 'bolder'}}>berapa Kg.</td>
                                <td style={{fontWeight: 'bolder'}}>Rp. 60.000</td>
                            </tr>
                        </tfoot>
                        {/* ======================MAP LIMIT================================ */}

                    </table>
                </div>
                {/*===========================TABLE SECTION============================  */}
                <div className='row justify-content-between mt-5'>
                    <input type='button'className='btn btn-dark' value=' CONTINUE SHOPPING '/>
                    <input type='button' className='btn btn-dark ' value='PROCEED TO CHECKOUT' />
                </div>
            </div>
        )
    }
}

export default Cart