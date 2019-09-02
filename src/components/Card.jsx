import React from 'react';


class Card extends React.Component {
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
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 1,
    marginBottom: 20
    }
    }

    export default Card