import React from 'react'

class ErrorPage extends React.Component {
    render(){
        return(
            <div>
                <center>
                    <h1 className='text-center' style={{zIndex: '3', paddingTop: '100px',color: 'black',
                     fontSize : '90px', fontWeight:'bolder'}}>404</h1>
                    <h1 style={{color: 'black', zIndex:'3', paddingTop:'30px'}}> the developer might have too much Netflix in his spare time</h1>
                    <div>
                        <img src='https://cdn1.vectorstock.com/i/1000x1000/96/95/young-man-sleeping-in-front-of-the-tv-cartoon-vector-18249695.jpg'
                        alt='error page' className='justify-content-center ' />
                    </div>
                </center>
            </div>
        )
    }
}

export default ErrorPage