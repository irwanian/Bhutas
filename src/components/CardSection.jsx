import React from 'react';


class CardSection extends React.Component {
    render() {
        return(
            <div>
                <div style={styles.containerStyle}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const styles = {
    containerStyle: {
        borderBottomWidth: 2,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
        }
        }
    

    export default CardSection