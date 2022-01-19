import React from 'react'
// import FlagCard from '../components/FlagCard'
import { connect } from 'react-redux'

class ShoppingCartPage extends React.Component {
    render(){
              
        let addedFlags = this.props.flags.length ?
            (  
                this.props.flags.map(flag=>{
                    return(
                       
                        <li className="collection-item avatar" key={flag.id}>
                                    <div className="item-img"> 
                                        <img src={flag.photo} alt={flag.phoyo} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{flag.name}</span>
                    
                                        <button className="waves-effect waves-light btn pink remove">Remove</button>
                                    </div>
                                    
                               </li>                        
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedFlags}
                    </ul>
                </div>  
            </div>
       )
    }
}

const mapStateToProps = (state) => {
    return {flags: state.addedFlags}
}

export default connect(mapStateToProps)(ShoppingCartPage)