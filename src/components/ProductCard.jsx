import React from 'react'
import CardSection from './CardSection';
import Card from './Card';

class ProductCard extends React.Component {
    render () {
        return (
            <div>
                <Card>
                    <CardSection>
                        <div style={{width: '280px', height: '280px'}} >
                        <img src={'https://media.giphy.com/media/tntfKAkzFmeu4/giphy.gif'}
                        alt='gadot' />
                        </div>
                    </CardSection>
                    <CardSection>
                        <div > 180000 </div>
                    </CardSection>
                </Card>
            </div>
        )
    }
}


export default ProductCard