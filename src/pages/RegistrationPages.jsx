import React from 'react'
import {Paper} from '@material-ui/core'


class Register extends React.Component{
    state = {
        errorMessage : ''
    }
    

    
    render(){
        
    
        
        return(
            <div className="container">
                <div className='row justify-content-center'>
                    <div className='col-md-6 mt-xl-5' >
                        <Paper className='container' style={{  
                                backgroundImage: `url(https://i.pinimg.com/originals/b9/2f/74/b92f7403dfce46265b34a3daa6e2a440.jpg)`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                                }} >
                               
                            <h2 style={{marginBottom: '10px', paddingTop : '30px'}}>Login Form</h2>
                            <input className='form-control ' style={{marginTop : '150px',marginBottom: '20px', borderRadius : '25px'}}
                             type='text' placeholder='Username' ref='username' />
                            <input className='form-control ' style={{marginTop : '150px',marginBottom: '20px', borderRadius : '25px'}}
                             type='text' placeholder='email address' ref='email' />
                            <input className='form-control mt-3' style={{marginBottom: '10px', borderRadius : '25px'}}
                             type='password' placeholder='Password' ref='pass' />
                            <input className='form-control mt-3' style={{marginBottom: '10px', borderRadius : '25px'}}
                             type='password' placeholder='Re-type Password' ref='Confirmpass' />
                            
                            {/* ERROR MESSAGE START */}
                            
                           {this.state.errorMessage !== '' ?
                                <div className='alert alert-danger mt-3' style={{borderRadius : '25px'}}>{this.state.errorMessage}</div>
                                : null    
                            }
                            {/* ERROR MESSAGE END */}
                            <input type='button' className='btn btn-dark mt-3 mb-3' value='Login' />
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }

}

export default Register