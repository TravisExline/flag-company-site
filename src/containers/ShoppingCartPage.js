import React from 'react'
// import FlagCard from '../components/FlagCard'
import { connect } from 'react-redux'

class ShoppingCartPage extends React.Component {
    render() {
        return(
            <div>
                {/* {this.props.cartItems.map((item) => (
                    <FlagCard name={item.name} />
                ))} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {cartItems: state.cartItemsReducer}
}

export default connect(mapStateToProps)(ShoppingCartPage)