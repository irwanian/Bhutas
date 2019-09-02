import React from 'react'
import {Card} from 'reactstrap'
import {Link} from 'react-router-dom'

class Login extends React.Component{
    
           state = {
               errorMessage : ''
            }
    

    
    render(){
        
    
        
        return(
            <div className='' style={{  
                backgroundImage: `url(http://wallpaperesque.com/wp-content/uploads/plixpapers1506/giant_wallpaper_background_26879.jpg)`,
                height : '100',
                width : '100',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='row justify-content-center'>
                    <div  >
                    <Card  style={{marginTop : '100px', width : '450px', height : '550px', marginBottom : '50px'}} >
                    <h2  className='text-center pt-4'>LOGIN</h2>                            
                            <div className='text-center' >
                                <div>
                                    <input className='mt-5' style={{width: '400px', height: '40px', border: '1px solid grey',outline: 'none',paddingLeft:'10px', borderRadius : '25px'}}
                                    type='text' placeholder='email address' ref='email' />
                                </div>
                                <div>
                                    <input className='mt-4' style={{width: '400px', height: '40px', border: '1px solid grey',outline: 'none',paddingLeft:'10px', borderRadius : '25px'}}
                                    type='password' placeholder='Password' ref='pass' />
                                </div>
                                
                                {/* ERROR MESSAGE START */}
                                
                            {this.state.errorMessage !== '' ?
                                    <div className='alert alert-danger mt-5' style={{borderRadius : '7px'}}>{this.state.errorMessage}</div>
                                    : null    
                                }
                                {/* ERROR MESSAGE END */}
                                <input type='button' className='btn btn-dark mt-4 mb-3' value='LOGIN' />
                            </div>
                            <div className='pb-3' >
                                New to Bhutas? 
                                <Link to='/registration' >
                                    <span style={{color : 'bright',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    marginTop: '30px'}}> Register Now!</span>
                                </Link>     
                            </div>
                        </Card>
                
                    </div>
                </div>
            </div>
        )
    }

}

export default Login