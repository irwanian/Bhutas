import React from 'react'
import JumbotronSlider from '../components/JumbotronSlider';
import FooterPage from '../components/footer';
import NewArrivals from '../components/SliderNewArrivals';
import HottestProduct from '../components/HottestProduct';

class HomePage extends React.Component{
    render(){
        return(
            <div className='bg-light' >
                <div >
                    <JumbotronSlider />
                </div>
                <div className ='container bg-white'>
                    <NewArrivals  />
                    <HottestProduct  />
                </div>
                <div>
                    <FooterPage   />
                </div>
            </div>
        )
    }
}

export default HomePage