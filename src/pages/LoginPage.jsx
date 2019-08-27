import React from 'react'
import {Card} from 'reactstrap'
import {Link} from 'react-router-dom'

class Login extends React.Component{
    state = {
        errorMessage : ''
    }
    

    
    render(){
        
    
        
        return(
            <div className='img-fluid' style={{  
                backgroundImage: `url(http://wallpaperesque.com/wp-content/uploads/plixpapers1506/giant_wallpaper_background_26879.jpg)`,
                height : '100',
                width : '100',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
                <div className='row justify-content-xl-center align-content-center' >
                    <div className=' mt-xl-5'>
                        <div className='mt-3' style={{color : 'white'}}>
                                <h2 style={{marginTop: '50px', paddingTop : '30px'}}>Login Form</h2>
                        <Card  style={{marginTop : '40px',
                                        width : '350px',
                                        height : '450px',
                                        marginBottom: '50px'}} >
                            <div className='text-center'>
                                <div>
                                    <input  style={{marginTop : '60px',border : '1px grey solid', marginBottom: '20px', borderRadius : '10px'}}
                                    type='text'  ref='email' /> 
                                </div>
                                <div>
                                    <input className=' mt-3' style={{marginBottom: '10px',border : '1px grey solid', borderRadius : '10px'}}
                                    type='password' placeholder='Password' ref='password' />

                                </div>
                                
                                
                                {/* ERROR MESSAGE START */}
                                
                            {this.state.errorMessage !== '' ?
                                    <div className='alert alert-danger mt-3' style={{borderRadius : '25px'}}>{this.state.errorMessage}</div>
                                    : null    
                                }

                                {/* ERROR MESSAGE END */}
                                <input type='button' className='btn btn-dark mb-3' style={{marginTop : '90px'}} value='Login' />
                            </div>
                        </Card>
                        New to Bhutas? 
                           <Link to='/registration' >
                             <span style={{color : 'bright',
                              textDecoration: 'underline',
                              cursor: 'pointer',
                              marginBottom: '50px'}}> Register Now!</span>
                           </Link>     
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login