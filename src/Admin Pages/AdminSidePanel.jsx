import React from 'react';

class SidePanel extends React.Component {
    render (){
        return(
            <div className='bg-dark pt-5 col-2' style={{height:'100vh', color:'white' }} >
                <div style={{paddingBottom: 20}}>
                    <h4>Add new Category</h4>
                </div>
                <div style={{paddingBottom: 20}}>
                    <h4>Add New Brand</h4>
                </div>
                <div style={{paddingBottom: 20}}>
                    <h4>Add New Product</h4>
                </div>
            </div>
        )
    }
}

export default SidePanel