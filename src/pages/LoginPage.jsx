import React from 'react'
import { Spinner } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { emailLoginChanged, passwordLoginChanged, loginUser, logoutUser } from '../Actions'

class Login extends React.Component{

    onBtnLoginClick = () => {
        const { loginUser, email, password } = this.props
        loginUser({ email, password })
    }

    
    render(){
        if(this.props.login) return <Redirect to='/' />

        return(
            <div style={{  
                backgroundImage: `url(http://wallpaperesque.com/wp-content/uploads/plixpapers1506/giant_wallpaper_background_26879.jpg)`,
                height : '100vh',
                width : '100vw',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='row pl-5'>
                    <div  >
                    <table className='form-table'  style={{backgroundColor: '#ebeff5', marginTop : '190px', width : '450px', height : '450px', marginBottom : '50px'}} >
                    <h2  className='text-center pt-4'>LOGIN</h2>                            
                            <div className='text-center' >
                                <div>
                                    <input onChange={(e)=> this.props.emailLoginChanged(e.target.value)} className='mt-5' style={{width: '400px', height: '40px', border: '1px solid grey',outline: 'none',paddingLeft:'10px', borderRadius : '25px'}}
                                    type='text' placeholder='email address' ref='email' />
                                </div>
                                <div>
                                    <input onChange={(e)=> this.props.passwordLoginChanged(e.target.value)} className='mt-4' style={{width: '400px', height: '40px', border: '1px solid grey',outline: 'none',paddingLeft:'10px', borderRadius : '25px'}}
                                    type='password' placeholder='Password' ref='pass' />
                                </div>
                                
                                {/* ERROR MESSAGE OR LOGIN BUTTON */}
                                
                            {this.props.error !== '' ?
                                    <div className='alert alert-danger mt-5' style={{borderRadius : '7px'}}>{this.props.error}</div>
                                    : null
                                }

                                {this.props.loading === false ?
                                <input type='button' onClick={this.onBtnLoginClick} className='btn btn-dark mt-5 mb-3' value='LOGIN' />
                                : <Spinner color='dark' style={{fontSize: '30px'}} />    
                            }
                            </div>
                            <div className='pl-3 mt-5' >
                                New to Bhutas? 
                                <Link to='/registration' >
                                    <span style={{color : 'bright',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    marginTop: '30px'}}> Register Now!</span>
                                </Link>     
                            </div>
                        </table>
                
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({ auth }) => {
    return {
        email: auth.email,
        password: auth.password,
        loading: auth.loading,
        error: auth.error,
        login: auth.justLogin,
        fullname: auth.fullname
    }
}

export default connect(mapStateToProps, { logoutUser, loginUser, emailLoginChanged, passwordLoginChanged })(Login)