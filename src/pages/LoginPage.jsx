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
                height : '900px',
                width : '100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
                <div className='row justify-content-xl-center' >
                    <div className=' mt-xl-5' >
                        <div className='mt-3' style={{color : 'white'}}>
                                <h2 style={{marginTop: '70px', paddingTop : '30px'}}>Login Form</h2>
                        <Card  style={{marginTop : '40px', width : '350px', height : '450px'}} >
                            <div className='text-center'>
                                <div>
                                    <input  style={{marginTop : '60px',border : '1px grey solid', marginBottom: '20px', borderRadius : '25px'}}
                                    type='text'  ref='email' /> 
                                </div>
                                <div>
                                    <input className=' mt-3' style={{marginBottom: '10px',border : '1px grey solid', borderRadius : '25px'}}
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
                             <span style={{color : 'blue', textDecoration: 'underline', cursor: 'pointer'}}> Register Now!</span>
                           </Link>     
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login