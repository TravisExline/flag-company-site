import display1 from '../images/display1.jpg'
import display2 from '../images/display2.jpg'
import display3 from '../images/display3.jpg'
import display4 from '../images/display4.jpg'
import display5 from '../images/display5.jpg'
import display6 from '../images/display6.jpg'
import display7 from '../images/display7.jpg'
import display8 from '../images/display8.jpg'
import display9 from '../images/display9.jpg'
import ADD_TO_CART from '..actions/cartItemActions'


const initState = {
    flags: [
        {id: 1, photo: display1, name: 'Black American Flag', smallPrice: 'Small (18.5") - $55', medPrice: 'Medium (26") - $75', lrgPrice: 'Large (37") - $110'},
        {id: 2, photo: display2, name: 'American Flag', smallPrice: 'Small (18.5") - $55', medPrice: 'Medium (26") - $75', lrgPrice: 'Large (37") - $110'},
        {id: 3, photo: display3, name: 'Thin Blue Line American Flag', smallPrice: 'Small (18.5") - $55', medPrice: 'Medium (26") - $75', lrgPrice: 'Large (37") - $110'},
        {id: 4, photo: display4, name: 'Punisher American Flag', smallPrice: 'Small (18.5") - $55', medPrice: 'Medium (26") - $75', lrgPrice: 'Large (37") - $110'},
        {id: 5, photo: display5, name: 'Tattered American Flag', smallPrice: 'Small (18.5") - $55', medPrice: 'Medium (26") - $75', lrgPrice: 'Large (37") - $110'},
        {id: 6, photo: display6, name: 'USAF American Flag', smallPrice: 'Small (18.5") - $55', medPrice: 'Medium (26") - $75', lrgPrice: 'Large (37") - NOT AVAILABLE'},
        {id: 7, photo: display7, name: 'Tread American Flag', smallPrice: 'Small (18.5") - $55', medPrice: 'Medium (26") - $75', lrgPrice: 'Large (37") - $110'},
        {id: 8, photo: display8, name: 'US Navy American Flag', smallPrice: 'Small (18.5") - $55', medPrice: 'Medium (26") - $75', lrgPrice: 'Large (37") - NOT AVAILABLE'},
        {id: 9, photo: display9, name: 'Thin Red Line American Flag', smallPrice: 'Small (18.5") - $55', medPrice: 'Medium (26") - $75', lrgPrice: 'Large (37") - $110'}
    ],
    addedItems: [],
    total: 0
}

const flagReducer = (state = initState, action) => {
    if(action.type === ADD_TO_CART) {
        let addedFlag = state.flags.find(flag => flag.id === action.id)
    }
    else return state;
}

export default flagReducer