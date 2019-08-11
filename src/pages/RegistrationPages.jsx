import React from 'react'
import {Card} from 'reactstrap'


class Register extends React.Component{
    state = {
        errorMessage : 'lagi error'
    }
    

    
    render(){
        
    
        
        return(
            <div className="container">
                <div className='row justify-content-center'>
                    <div className='mt-5' >
                    <h2 style={{marginTop: '70px', paddingTop : '80px'}}>Registration Form</h2>
                    <Card  style={{marginTop : '30px', width : '350px', height : '530px'}} >
                            <div className='text-center' >
                                <div>
                                    <input className='' style={{marginTop : '100px',border: '1px solid grey',textAlign: 'center', borderRadius : '25px'}}
                                    type='text' placeholder='Username' ref='username' />
                                </div>
                                <div>
                                    <input className='mt-4' style={{border: '1px solid grey',textAlign: 'center', borderRadius : '25px'}}
                                    type='text' placeholder='email address' ref='email' />
                                </div>
                                <div>
                                    <input className='mt-4' style={{border: '1px solid grey',textAlign: 'center', borderRadius : '25px'}}
                                    type='password' placeholder='Password' ref='pass' />
                                </div>
                                <div>
                                    <input className='mt-4' style={{border: '1px solid grey',textAlign: 'center', borderRadius : '25px'}}
                                    type='password' placeholder='Re-type Password' ref='Confirmpass' />
                                </div>
                                
                                {/* ERROR MESSAGE START */}
                                
                            {this.state.errorMessage !== '' ?
                                    <div className='alert alert-danger mt-5' style={{borderRadius : '25px'}}>{this.state.errorMessage}</div>
                                    : null    
                                }
                                {/* ERROR MESSAGE END */}
                                <input type='button' className='btn btn-dark mt-xl-5 mb-3' value='Register' />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }

}

export default Register