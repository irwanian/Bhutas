import React from 'react'
import { Redirect } from 'react-router-dom'
import { Card } from 'reactstrap'
import { connect } from 'react-redux'
import { fullnameRegisterChanged, emailRegisterChanged, passwordRegisterChanged, conPasswordRegisterChanged, registerUser } from '../Actions';
import { Spinner } from 'reactstrap'

class Register extends React.Component{
    

    onRegisterBtnClick = () => {
        const { fullname, email, password, conPassword } = this.props
        
        this.props.registerUser({
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
        if(this.props.redirecting) return <Redirect to='waitingverification' />

        return(
            <div className="container">
                <div className='row justify-content-center'>
                    <div  >
                    <Card  style={{marginTop : '100px', width : '450px', height : '550px', marginBottom : '50px'}} >
                    <h2 style={{marginTop: '30px', paddingTop : '30px'}} className='text-center'>CREATE ACCOUNT</h2>
                            <div className='text-center' >
                                <div>
                                    <input onChange={(e)=> this.props.fullnameRegisterChanged(e.target.value.toLowerCase())}
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
                                    <input onChange={(e)=> this.props.passwordRegisterChanged(e.target.value.toLowerCase())} 
                                    className='mt-4' style={{width: '400px', height: '40px', border: '1px solid grey'
                                    ,outline: 'none', paddingLeft:'10px', borderRadius : '25px'}}
                                    type='password' placeholder='Password'/>
                                </div>
                                <div>
                                    <input onChange={(e)=> this.props.conPasswordRegisterChanged(e.target.value.toLowerCase())}
                                     className='mt-4' style={{width: '400px', height: '40px', border: '1px solid grey',outline: 'none', paddingLeft:'10px', borderRadius : '25px'}}
                                    type='password' placeholder='Re-type Password'/>
                                </div>
                                    {this.renderErrorMessage()}
                                
                                {this.props.loading === false ? <input type='button' onClick={this.onRegisterBtnClick} className='btn btn-dark mt-4 mb-3' value='Register' />:
                                <Spinner style={{fontSize: '40px', fontWeight: 200}} className='mt-4'/>}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({ auth }) => {
    return{
        fullname: auth.fullname,
        email: auth.email,
        password: auth.password,
        conPassword: auth.conPassword,
        loading: auth.loading,
        error: auth.error,
        redirecting: auth.justRegistered
    }
}

export default connect(mapStateToProps, { fullnameRegisterChanged,
                                          emailRegisterChanged,
                                          passwordRegisterChanged,
                                          conPasswordRegisterChanged,
                                          registerUser })(Register)