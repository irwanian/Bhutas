import React from 'react'
import { Card } from 'reactstrap'
import { connect } from 'react-redux'
import { fullnameRegisterChanged, emailRegisterChanged, passwordRegisterChanged, conPasswordRegisterChanged, registerUser } from '../Actions';

class Register extends React.Component{
    

    onRegisterBtnClick = () => {
        const { registerUser, fullname, email, password, conPassword } = this.props
        
        registerUser({
            fullname,
            email,
            password,
            conPassword
        })
    }

    renderErrorMessage = () => {
        if(this.props.error){
            return (
                <div style={{marginBottom: 15, marginTop: 15}}>
                  <div className='alert alert-danger'>
                    {this.props.error}
                  </div>
                </div>
              )
        }
    }
    
    render(){
        
    
        
        return(
            <div className="container">
                <div className='row justify-content-center'>
                    <div  >
                    <Card  style={{marginTop : '100px', width : '450px', height : '550px', marginBottom : '50px'}} >
                    <h2 style={{marginTop: '30px', paddingTop : '30px'}} className='text-center'>CREATE ACCOUNT</h2>
                            <div className='text-center' >
                                <div>
                                    <input onChange={(e)=> this.props.fullnameRegisterChanged(e.target.value)}
                                     style={{width: '400px', height: '40px', marginTop : '30px', outline: 'none'
                                     , border: '1px solid grey',paddingLeft:'10px', borderRadius : '25px'}}
                                    type='text' placeholder='Full Name'/>
                                </div>
                                <div>
                                    <input onChange={(e)=> this.props.emailRegisterChanged(e.target.value)} 
                                    className='mt-4' style={{width: '400px', height: '40px', border: '1px solid grey'
                                    ,outline: 'none', paddingLeft:'10px', borderRadius : '25px'}}
                                    type='text' placeholder='email address' />
                                </div>
                                <div>
                                    <input onChange={(e)=> this.props.passwordRegisterChanged(e.target.value)} 
                                    className='mt-4' style={{width: '400px', height: '40px', border: '1px solid grey'
                                    ,outline: 'none', paddingLeft:'10px', borderRadius : '25px'}}
                                    type='password' placeholder='Password'/>
                                </div>
                                <div>
                                    <input onChange={(e)=> this.props.conPasswordRegisterChanged(e.target.value)}
                                     className='mt-4' style={{width: '400px', height: '40px', border: '1px solid grey',outline: 'none', paddingLeft:'10px', borderRadius : '25px'}}
                                    type='password' placeholder='Re-type Password'/>
                                </div>
                                    {this.renderErrorMessage()}
                                <input type='button' onClick={this.onRegisterBtnClick} className='btn btn-dark mt-4 mb-3' value='Register' />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        fullname: state.registration.fullname,
        email: state.registration.email,
        password: state.registration.password,
        conPassword: state.registration.conPassword,
        loading: state.registration.loading,
        error: state.registration.error
    }
}

export default connect(mapStateToProps, { fullnameRegisterChanged,
                                          emailRegisterChanged,
                                          passwordRegisterChanged,
                                          conPasswordRegisterChanged,
                                          registerUser })(Register)